function printTime() {
    var clock = document.getElementById("clock"); // 출력할 장소 선택
    var now = new Date(); // 현재시간
    var nowTime = now.getFullYear() + "-" + (
        now.getMonth() + 1
    ) + "-" + now.getDate() + "&nbsp;&nbsp;" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    clock.innerHTML = nowTime; // 현재시간을 출력
    setTimeout("printTime()", 1000); // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000
}
// window.onload = function () { // 페이지가 로딩되면 실행
//     printTime();
// }

// select의 년/월/일 시간 선택
window.onload = function () {
    printTime();
    var sMonth = 1
    var eMonth = 12
    var sDay = 1
    var eDay = 31
    var sHour = 0
    var eHour = 23
    var sMinute = 00
    var eMinute = 59

    var strMonth = "";
    var strDay = "";
    var strHour = "";
    var strMinute = "";

    for (var i = sMonth; i < eMonth; i++) {
        strMonth += "<option value=" + i + ">" + i + "</option>";
    }
    for (var i = sDay; i <= eDay; i++) {
        strDay += "<option value=" + i + ">" + i + "</option>";
    }
    for (var i = sHour; i <= eHour; i++) {
        strHour += "<option value=" + i + ">" + i + "</option>";
    }
    for (var i = sMinute; i <= eMinute; i++) {
        strMinute += "<option value=" + i + ">" + i + "</option>";
    }

    document.getElementById("amonth").innerHTML = strMonth;
    document.getElementById("aday").innerHTML = strDay;
    document.getElementById("ahour").innerHTML = strHour;
    document.getElementById("aminute").innerHTML = strMinute;
}

// 전체 선택 시 하위 항목 선택
function allCheckFunc(obj) {
    $("[name=checkOne]").prop("checked", $(obj).prop("checked"));
    if ($(obj).prop("checked")) {
        $(obj).parent().addClass('selected');
        $("[name=checkOne]").parent().addClass('selected');
    } else {
        $(obj).parent().removeClass('selected');
        $("[name=checkOne]").parent().removeClass('selected');
    }
}

function oneCheckFunc(obj) {
    var allObj = $("[name=checkAll]");
    // var objName = $(obj).attr("id");
    var objName = $(obj).attr("name");
    if ($(obj).prop("checked")) {
        checkBoxLength = $("[name=" + objName + "]").length;
        checkedLength = $("[name=" + objName + "]:checked").length;
        $(obj).parent().addClass('selected');
        if (checkBoxLength == checkedLength) {
            allObj.prop("checked", true);
            $(obj).parent().addClass('selected');
        } else {
            allObj.prop("checked", false);
        }
    } else {
        $(obj).parent().removeClass('selected');
        allObj.prop("checked", false);
    }
}
$(function () {
    $("[name=checkAll]").click(function () {
        allCheckFunc(this);
    });
    $("[name=checkOne]").each(function () {
        $(this).click(function () {
            oneCheckFunc($(this));
        });
    });
});

// 나머지 항목들 따로 선택 
function CheckFunc(obj) {
    var allObj = $("[name=checkAll]");
    var objName = $(obj).attr("name");
    if ($(obj).prop("checked")) {
        checkBoxLength = $("[name=" + objName + "]").length;
        checkedLength = $("[name=" + objName + "]:checked").length;
        $(obj).parent().addClass('selected');
        if (checkBoxLength == checkedLength) {
            allObj.prop("checked", true);
            $(obj).parent().addClass('selected');
        } else {
            allObj.prop("checked", false);
        }
    } else {
        $(obj).parent().removeClass('selected');
        allObj.prop("checked", false);
    }
}

$(function () {
    $("[name=check]").each(function () {
        $(this).click(function () {
            CheckFunc($(this));
        });
    });
});

function buttonclick() {
    document.getElementById("check").style.borderColor = "#4e73df";
}

function clear_onclick() {
    $("[name=checkAll]").parent().removeClass('selected');
    $("[name=check]").parent().removeClass('selected');
    $("[name=checkOne]").parent().removeClass('selected');


}

// 재난 종류 클릭 시 팝업 창 생성
function weather1(){
    var w = 570;
    var h = 400;
    var LeftPosition = (screen.width - w) / 2;
    var TopPosition = (screen.height - h) / 2;

    window.name = "parentForm";
    openWin = window.open("/detail_weather", "childForm", "width=" + w + ",height=" + h + ",top=" + TopPosition + ",left=" + LeftPosition + ", scrollbars=no");
}

function weather2(){
    var w = 570;
    var h = 400;
    var LeftPosition = (screen.width - w) / 2;
    var TopPosition = (screen.height - h) / 2;

    window.name = "parentForm";
    openWin = window.open("/detail_weather", "childForm", "width=" + w + ",height=" + h + ",top=" + TopPosition + ",left=" + LeftPosition + ", scrollbars=no");
}

var openWin;

function setParentText() {
    opener.document.getElementById("pInput").value = document.getElementById("cInput").value
}

// 받은 값 : <input type="text" id="pInput">

// ztree 관련 코드
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

// 아이콘 숨김
function showIconForTree(treeId, treeNode) {
    return !treeNode.isParent;
};


function setChildValue(name) {
    document.getElementById("ParentInput").value = name;
}

function sendChildValue(name) {
    console.log("sendChildValue Open");
    opener.setChildValue(name);
    window.close();
}