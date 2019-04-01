// ztree 선언
var newJquery = $.noConflict(true);
var zNodes;
var zNodes2;
var zNodes3;

// ztree 지역별 데이터 가져오기
newJquery(document).ready(function () {
    for (var i = 1; i <= 17; i++) {
        if ((user_area) == i) {
            var url = '/data/data' + i + '.json';
            // console.log(url);
        }
    }
    newJquery.ajax({
        type: "GET",
        url: url,
        async: false,
        success: function (data) {
            zNodes = data;
        },
        error: function (e) {
            console.log(e.responseText);
        }
    })
});

// ztree2 분류별 데이터 가져오기
newJquery(document).ready(function () {
    for (var i = 1; i <= 17; i++) {
        if ((user_area) == i) {
            var url = '/data/device_' + i + '.json';
        }
    }
    newJquery.ajax({
        type: "GET",
        url: url,
        async: false,
        success: function (data) {
            zNodes2 = data;
        },
        error: function (e) {
            console.log(e.responseText);
        }
    })
});

// ztree3 그룹별 데이터 가져오기
newJquery(document).ready(function () {
    var url = '/data/group.json';
    newJquery.ajax({
        type: "GET",
        url: url,
        async: false,
        success: function (data) {
            zNodes3 = data;
        },
        error: function (e) {
            console.log(e.responseText);
        }
    })
});


var setting = {
    edit: {
        enable: true,
        showRemoveBtn: false,
        showRenameBtn: false
    },
    check: {
        enable: true,
        nocheckInherit: true
    },
    data: {
        keep: {
            parent: true,
            leaf: true
        },
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeDrag: beforeDrag,
        beforeRemove: beforeRemove,
        beforeRename: beforeRename,
        onRemove: onRemove,
        onCheck: zTreeOnCheck,
        beforeDrop: beforeDrop
    },
    view: {
        showIcon: showIconForTree,
        selectMulti: false
    }
};
var code;


// treeDemo 생성
newJquery(document).ready(function () {
    newJquery.fn.zTree.init(newJquery("#treeDemo"), setting, zNodes);
    newJquery.fn.zTree.init(newJquery("#treeDemo2"), setting, zNodes2);
    newJquery.fn.zTree.init(newJquery("#treeDemo3"), setting, zNodes3);
    newJquery("#addParent").bind("click", {isParent: true}, add);
    newJquery("#addLeaf").bind("click", {isParent: false}, add);
    newJquery("#edit").bind("click", edit);
    newJquery("#remove").bind("click", remove);
    newJquery("#clearChildren").bind("click", clearChildren);
});

// 노드 삭제하기
function beforeRemove(treeId, treeNode) {
    className = (className === "dark" ? "" : "dark");
    showLog("[ " + getTime() + " beforeRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
    return confirm("Confirm delete node '" + treeNode.name + "' it?");
}

function onRemove(e, treeId, treeNode) {
    showLog("[ " + getTime() + " onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
}

// node 이름 바꾸기
function beforeRename(treeId, treeNode, newName) {
    if (newName.length == 0) {
        alert("Node name can not be empty.");
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        setTimeout(function () {
            zTree.editName(treeNode)
        }, 10);
        return false;
    }
    return true;
}

// Log 보여주기
function showLog(str) {
    if (!log) log = $("#log");
    log.append("<li class='" + className + "'>" + str + "</li>");
    if (log.children("li").length > 8) {
        log.get(0).removeChild(log.children("li")[0]);
    }
}

// Log에 시간 표시
function getTime() {
    var now = new Date(),
        h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds(),
        ms = now.getMilliseconds();
    return (h + ":" + m + ":" + s + " " + ms);
}

var newCount = 1;

function add(e) {
    var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo3"),
        isParent = e.data.isParent,
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (treeNode) {
        treeNode = zTree.addNodes(treeNode, {
            id: (100 + newCount),
            pId: treeNode.id,
            isParent: isParent,
            name: "new node" + (newCount++)
        });
    } else {
        treeNode = zTree.addNodes(null, {
            id: (100 + newCount),
            pId: 0,
            isParent: isParent,
            name: "new node" + (newCount++)
        });
    }
    if (treeNode) {
        zTree.editName(treeNode[0]);
    } else {
        alert("Leaf node is locked and can not add child node.");
    }
};

function edit() {
    var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo3"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (nodes.length == 0) {
        alert("Please select one node at first...");
        return;
    }
    zTree.editName(treeNode);
};

function remove(e) {
    var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo3"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (nodes.length == 0) {
        alert("Please select one node at first...");
        return;
    }
    var callbackFlag = $("#callbackTrigger").attr("checked");
    zTree.removeNode(treeNode, callbackFlag);
};

function clearChildren(e) {
    var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo3"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (nodes.length == 0 || !nodes[0].isParent) {
        alert("Please select one parent node at first...");
        return;
    }
    zTree.removeChildNodes(treeNode);
};
// edit 기능 여기까지

// 아이콘 숨김
function showIconForTree(treeId, treeNode) {
    return !treeNode.isParent;
};

function nocheckNode(e) {
    var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo"),
        nocheck = e.data.nocheck,
        nodes = zTree.getSelectedNodes();
    if (nodes.length == 0) {
        alert("Please select one node at first...");
    }

    for (var i = 0, l = nodes.length; i < l; i++) {
        nodes[i].nocheck = nocheck;
        zTree.updateNode(nodes[i]);
    }
}


function setCheck() {
    var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo"),
        py = newJquery("#py").attr("checked") ? "p" : "",
        sy = newJquery("#sy").attr("checked") ? "s" : "",
        pn = newJquery("#pn").attr("checked") ? "p" : "",
        sn = newJquery("#sn").attr("checked") ? "s" : "",
        type = {
            "Y": s,
            "N": s
        };
    zTree.setting.check.chkboxType = type;
    showCode('setting.check.chkboxType = { "Y" : "s", "N" : "s" }');
}

function showCode(str) {
    if (!code) code = newJquery("#code");
    code.empty();
    code.append("<li>" + str + "</li>");
}

function beforeDrag(treeId, treeNodes) {
    for (var i = 0, l = treeNodes.length; i < l; i++) {
        if (treeNodes[i].drag === false) {
            return false;
        }
    }
    return true;
}

function beforeDrop(treeId, treeNodes, targetNode, moveType) {
    return targetNode ? targetNode.drop !== false : true;
}

// 지역별 selected value 값 받기
function zTreeOnCheck(event, treeId, treeNode) {
    var treeObj = newJquery.fn.zTree.getZTreeObj("treeDemo");
    var nodes = treeObj.getCheckedNodes(true);
    if (nodes.length != 0) {
        console.log(nodes);
    }

    var treeObj2 = newJquery.fn.zTree.getZTreeObj("treeDemo2");
    var nodes2 = treeObj2.getCheckedNodes(true);
    if (nodes2.length != 0) {
        console.log(nodes2);
    }

    var treeObj3 = newJquery.fn.zTree.getZTreeObj("treeDemo3");
    var nodes3 = treeObj3.getCheckedNodes(true);
    if (nodes3.length != 0) {
        console.log(nodes3);
    }
};