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
        simpleData: {
            enable: true
        }
    },
    callback: {
        onCheck: zTreeOnCheck,
        beforeDrag: beforeDrag,
        beforeDrop: beforeDrop
    },
    view: {
        showIcon: showIconForTree
    }
};
var code;


// treeDemo 생성
newJquery(document).ready(function () {
    newJquery.fn.zTree.init(newJquery("#treeDemo"), setting, zNodes);
    newJquery.fn.zTree.init(newJquery("#treeDemo2"), setting, zNodes2);
    newJquery.fn.zTree.init(newJquery("#treeDemo3"), setting, zNodes3);
});

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