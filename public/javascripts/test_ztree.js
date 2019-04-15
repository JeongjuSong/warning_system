// ztree 선언
var newJquery = $.noConflict(true);
var zNodes;
var zNodes2;
var zNodes3;

// ztree 지역별 데이터 가져오기
newJquery(document).ready(function (data) {
    var url = '/data/region.json';
    newJquery.ajax({
        type: "GET",
        url: url,
        async: false,
        success: function (data) {
            if (user_area == 1)
                zNodes = data.seoul;
            if (user_area == 4)
                zNodes = data.incheon;
            if (user_area == 10)
                zNodes = data.gangwon;
            if (user_area == 15)
                zNodes = data.gyeongbuk;
            if (user_area == 17)
                zNodes = data.jeju;
        },
        error: function (e) {
            console.log(e.responseText);
        }
    })
});

// ztree2 분류별 데이터 가져오기
newJquery(document).ready(function (data) {
    var url = '/data/facility.json';
    newJquery.ajax({
        type: "GET",
        url: url,
        async: false,
        success: function (data) {
            if (user_area == 1)
                zNodes2 = data.seoul;
            if (user_area == 4)
                zNodes2 = data.incheon;
            if (user_area == 10)
                zNodes2 = data.gangwon;
            if (user_area == 15)
                zNodes2 = data.gyeongbuk;
            if (user_area == 17)
                zNodes2 = data.jeju;
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
    newJquery("#addParent").bind("click", {
        isParent: true
    }, add);
    newJquery("#addLeaf").bind("click", {
        isParent: false
    }, add);
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
        var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo3");
        setTimeout(function () {
            zTree.editName(treeNode)
        }, 10);
        return false;
    }
    return true;
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
        })
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
        alert("하위 노드를 추가할 수 없습니다.");
    }
};

function edit() {
    var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo3"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (nodes.length == 0) {
        alert("수정할 노드를 먼저 선택하여 주십시오.");
        return;
    }
    zTree.editName(treeNode);
};

function remove(e) {
    var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo3"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (nodes.length == 0) {
        alert("삭제할 노드를 먼저 선택하여 주십시오.");
        return;
    }
    var callbackFlag = newJquery("#callbackTrigger").attr("checked");
    zTree.removeNode(treeNode, callbackFlag);
};

function clearChildren(e) {
    var zTree = newJquery.fn.zTree.getZTreeObj("treeDemo3"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (nodes.length == 0 || !nodes[0].isParent) {
        alert("하위 노드를 삭제 할 부모 노드를 먼저 선택하여 주십시오.");
        return;
    }
    zTree.removeChildNodes(treeNode);
};
// edit 기능 여기까지

// 아이콘 숨김
function showIconForTree(treeId, treeNode) {
    return !treeNode.isParent;
};


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
    var treeObj = newJquery.fn.zTree.getZTreeObj("treeDemo"); //treeDemo(지역별)에서 노드 가져오기
    var treeObj2 = newJquery.fn.zTree.getZTreeObj("treeDemo2"); //treeDemo2(그룹별)에서 노드 가져오기
    var nodes = treeObj.getCheckedNodes(true);
    var nodes2 = treeObj2.getCheckedNodes(true);
    var checkedArray = new Array();

    if (nodes.length != 0 && nodes2.length == 0) { // 지역별 탭에서만 선택 하는 경우
        for (var i = 0; i <= 100; i++) {
            var checkednode = nodes[i].name; //체크한 노드의 이름
            if (checkednode != '전 체' && checkednode != '중구' && checkednode != '구로구' && checkednode != '영등포구' && checkednode != '서초구') {
                checkedArray.push(checkednode);

                $(document).ready(function () {
                    $('#checktest').val(checkedArray);
                });
            }
        }
    }

    if (nodes.length == 0 && nodes2.length != 0) { // 분류별 탭에서만 선택 하는 경우
        for (var i = 0; i <= 100; i++) {
            var checkednode = nodes2[i].name;
            if (checkednode != '전 체' && checkednode != '운수시설' && checkednode != '여객자동차터미널' && checkednode != '철도 역 시설' && checkednode != '도시철도 역 시설' && checkednode != '대규모점포' && checkednode != '대형마트' && checkednode != '전문점' && checkednode != '백화점' && checkednode != '복합 쇼핑몰' && checkednode != '영화상영관' && checkednode != '공항 여객 시설' && checkednode != '항만 여객 시설') {
                checkedArray.push(checkednode);
                $(document).ready(function () {
                    $('#checktest').val(checkedArray);
                });
            }
        }
    }

    if (nodes.length != 0 && nodes2.length != 0) { // 지역별, 분류별 탭 둘 다 선택 하는 경우
        for (var i = 0; i <= 100; i++) {
            var checkednode = nodes[i].name;
            var checkednode2 = nodes2[i].name;
            if (checkednode != '전 체' && checkednode != '중구' && checkednode != '구로구' && checkednode != '영등포구' && checkednode != '서초구' && checkednode != '운수시설' && checkednode != '여객자동차터미널' && checkednode != '철도 역 시설' && checkednode != '도시철도 역 시설' && checkednode != '대규모점포' && checkednode != '대형마트' && checkednode != '전문점' && checkednode != '백화점' && checkednode != '복합 쇼핑몰' && checkednode != '영화상영관' && checkednode != '공항 여객 시설' && checkednode != '항만 여객 시설') {
                checkedArray.push(checkednode);
                checkedArray.push(checkednode2);
                $(document).ready(function () {
                    $('#checktest').val(checkedArray);
                });
            }
        }
    }

    if (nodes.length == 0 && nodes2.length == 0) { // 둘 다 선택 안한 경우
        var none = '단말기를 선택하지 않았습니다.'
        $(document).ready(function () {
            $('#checktest').val(none);
        });
    }

};