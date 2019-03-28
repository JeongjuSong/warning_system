// ztree 선언
var newJquery = $.noConflict(true);
var zNodes;
var zNodes2;

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
    newJquery.fn.zTree.init($("#treeDemo"), setting, zNodes);
    newJquery.fn.zTree.init($("#treeDemo2"), setting, zNodes2);
});

// 아이콘 숨김
function showIconForTree(treeId, treeNode) {
    return !treeNode.isParent;
};

newJquery(document).ready(function () {
    newJquery.fn.zTree.init($("#treeDemo"), setting, zNodes);
    newJquery.fn.zTree.init($("#treeDemo2"), setting, zNodes2);
});


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
    var zTree = newJquery.fn.zTree.getZTreeObj("#treeDemo"),
        py = $("#py").attr("checked") ? "p" : "",
        sy = $("#sy").attr("checked") ? "s" : "",
        pn = $("#pn").attr("checked") ? "p" : "",
        sn = $("#sn").attr("checked") ? "s" : "",
        type = {
            "Y": s,
            "N": ps
        };
    zTree.setting.check.chkboxType = type;
    showCode('setting.check.chkboxType = { "Y" : "s", "N" : "ps" }');
}

function showCode(str) {
    if (!code) code = $("#code");
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