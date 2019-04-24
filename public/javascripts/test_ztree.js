// ztree 선언
var newJquery = $.noConflict(true);
var zNodes;
var zNodes2;
var zNodes3;

// ztree 지역별 데이터 가져오기
newJquery(document).ready(function () {
    var url = '';
    if (user_area == 1) {
        url = '/regionseoul'
    } else if (user_area == 4) {
        url = '/regionincheon'
    } else if (user_area == 10) {
        url = '/regiongangwon'
    } else if (user_area == 15) {
        url = '/regiongyeongbuk'
    } else if (user_area == 17) {
        url = '/regionjeju'
    }
    newJquery.ajax({
        type: "GET",
        url: url,
        contentType: "application/json",
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
    var url = '';
    if (user_area == 1) {
        url = '/facilityseoul'
    } else if (user_area == 4) {
        url = '/facilityincheon'
    } else if (user_area == 10) {
        url = '/facilitygangwon'
    } else if (user_area == 15) {
        url = '/facilitygyeongbuk'
    } else if (user_area == 17) {
        url = '/facilityjeju'
    }
    newJquery.ajax({
        type: "GET",
        url: url,
        contentType: "application/json",
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
    var url = '/group';
    newJquery.ajax({
        type: "GET",
        url: url,
        contentType: "application/json",
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
        nodes = zTree.getSelectedNodes(), // 선택한 노드
        treeNode = nodes[0]; // treeNode는 부모 노드
    if (treeNode) { // 노드 추가를 눌렀을 경우

        // 그룹 추가를 누른 경우
        if (isParent == true) {
            var newId = 0;
            var idArray = new Array();
            $.ajax({
                type: "GET",
                url: "/group",
                async: false,
                contentType: "application/json",
                success: function (data) {
                    for (var i = 0; i <= data.length; i++) {
                        idArray.push(data[i].id);
                    }
                },
                error: function (error) {
                    console.log(error);
                }
            })
            // console.log(idArray); //idArray에 id값 잘 들어오는 것 확인 !
            for (var i = 0; i <= idArray.length; i++) {
                if (newId <= idArray[i]) {
                    newId++;
                }
            }
            treeNode = zTree.addNodes(treeNode, {
                id: newId + 1,
                pId: treeNode.id,
                isParent: isParent,
                name: "그룹명"
            })

        }

        else { //단말기 추가를 선택한 경우
            console.log('단말기 추가');
            console.log(newId);
            treeNode = zTree.addNodes(treeNode, {
                id: (treeNode.id * 10) + newId,
                pId: treeNode.id,
                isParent: isParent,
                name: "단말기명"
            })
        }
    } 
    else {
        // console.log(treeNode)
        treeNode = zTree.addNodes(null, {
            id: (100 + newCount),
            pId: 0,
            isParent: isParent,
            name: "입력하세요"
        });
    }
    if (treeNode) {
        zTree.editName(treeNode[0]);
    } else {
        zTree.editName(treeNode[0]);
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
// 지역별, 분류별, 그룹별 if문 7개

function zTreeOnCheck(event, treeId, treeNode) {
    var treeObj = newJquery.fn.zTree.getZTreeObj("treeDemo"); //treeDemo(지역별)에서 노드 가져오기
    var treeObj2 = newJquery.fn.zTree.getZTreeObj("treeDemo2"); //treeDemo2(그룹별)에서 노드 가져오기
    var treeObj3 = newJquery.fn.zTree.getZTreeObj("treeDemo3");
    var nodes = treeObj.getCheckedNodes(true);
    var nodes2 = treeObj2.getCheckedNodes(true);
    var nodes3 = treeObj3.getCheckedNodes(true);
    var checkedArray = new Array();

    if (nodes.length != 0 && nodes2.length == 0 && nodes3.length == 0) { // 지역별 탭에서만 선택 하는 경우
        for (var i = 0; i <= 100; i++) {
            var checkednode = nodes[i].name; //체크한 노드의 이름
            var checkednodepid = nodes[i].pId;
            if (checkednodepid != 1 && checkednodepid != 0) {
                checkedArray.push(checkednode);
                $(document).ready(function () {
                    $('#checklocation').val(checkedArray);
                });
            }
        }
    }

    if (nodes.length == 0 && nodes2.length != 0 && nodes3.length == 0) { // 분류별 탭에서만 선택 하는 경우
        for (var i = 0; i <= nodes2.length; i++) {
            var checkednode = nodes2[i].name;
            var checkednodepid = nodes2[i].pId;
            console.log(checkednode);
            if (checkednodepid != 0 && checkednodepid != 1 && checkednodepid != 11 && checkednodepid != 12) {
                checkedArray.push(checkednode);
                $(document).ready(function () {
                    $('#checklocation').val(checkedArray);
                });
            }
        }
    }

    if (nodes.length != 0 && nodes2.length != 0 && nodes3.length == 0) { // 지역별, 분류별 탭 둘 다 선택 하는 경우
        for (var i = 0; i <= nodes.length; i++) {
            var checkednode = nodes[i].name;
            var checkednode2 = nodes2[i].name;
            var checkednodepid = nodes[i].pId;
            var checkednodepid2 = nodes2[i].pId;
            if (checkednodepid != 0 && checknodepid2 != 0 && checkednodepid != 1 && checkednodepid2 != 1 && checkednodepid2 != 11 && checkednodepid2 != 12) {
                checkedArray.push(checkednode);
                checkedArray.push(checkednode2);
                $(document).ready(function () {
                    $('#checklocation').val(checkedArray);
                });
            }
        }
    }

    if (nodes.length == 0 && nodes2.length == 0 && nodes3.length != 0) { // 그룹별만 선택하는 경우
        for (var i = 0; i <= nodes3.length; i++) {
            var checkednode = nodes3[i].name;
            var checkednodepid = nodes3[i].pId;
            console.log(checkednode);
            if (checkednodepid != 0 && checkednodepid != 1) {
                checkedArray.push(checkednode);
                $(document).ready(function () {
                    $('#checklocation').val(checkedArray);
                });
            }
        }
    }

    // if (nodes.length != 0 && nodes2.length == 0 && nodes3.length != 0) { // 지역별, 그룹별 탭 둘 다 선택 하는 경우
    //     for (var i = 1; i <= nodes.length; i++) {
    //         var checkednode = nodes[i].name;
    //         console.log(checkednode);
    //         var checkednode2 = nodes3[i].name;
    //         console.log(checkednode2)
    //         if (checkednode != '전 체' && checkednode != '중구' && checkednode != '구로구' && checkednode != '영등포구' && checkednode != '서초구') {
    //             checkedArray.push(checkednode);
    //             checkedArray.push(checkednode2);
    //             checkedArray.push(checkednode);
    //             $(document).ready(function () {
    //                 $('#checklocation').val(checkedArray);
    //             });
    //         }
    //     }
    // }

    // if (nodes.length == 0 && nodes2.length == 0 && zNodes3.length == 0) { // 둘 다 선택 안한 경우
    //     var none = '단말기를 선택하지 않았습니다.'
    //     $(document).ready(function () {
    //         $('#checklocation').val(none);
    //     });
    // }

};