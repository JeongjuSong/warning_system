function printTime() {
    var clock = document.getElementById("clock"); // 출력할 장소 선택
    var now = new Date(); // 현재시간
    var nowTime = now.getFullYear() + "-" + (
        now.getMonth() + 1
    ) + "-" + now.getDate() + "&nbsp;&nbsp;" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    clock.innerHTML = nowTime; // 현재시간을 출력
    setTimeout("printTime()", 1000); // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000
}

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
    var sNum = 1
    var eNum = 10

    var strMonth = "";
    var strDay = "";
    var strHour = "";
    var strMinute = "";
    var strNum = "";

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

    for (var i = sNum; i<= eNum; i++) {
        strNum += "<option value="+ i + ">" + i + "</option>";
    }

    document.getElementById("amonth").innerHTML = strMonth;
    document.getElementById("aday").innerHTML = strDay;
    document.getElementById("ahour").innerHTML = strHour;
    document.getElementById("aminute").innerHTML = strMinute;
    document.getElementById("repeat_num").innerHTML = strNum;
}


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
    $("input[type=checkbox]").each(function () {
        $(this).click(function () {
            CheckFunc($(this));
        });
    });
    $("input[type=checkbox]").each(function () {
        $(this).click(function () {
            CheckFunc($(this));
        });
    });

    // 전체선택해제 체크박스 클릭 
    $("#allClear").click(function () {
        //해당화면에 모든 checkbox들의 체크를해제시킨다. 
        $("input[type=checkbox]").prop("checked", false);
    })
});

function buttonclick() {
    $("input[type=checkbox]").style.borderColor = "#4e73df";
}

function clear_onclick() {
    $("input[type=checkbox]").parent().removeClass('selected');
}

// 재난 종류에서 modal 창에서 선택 안할 시 선택 표시 안되게 처리
function closecheck() {
    $("[name=broadcast]").parent().removeClass('selected');
    $("[name=broadcast]").prop("checked", false);
}


function openTab(evt, select) {
    var i,
        tabcontent,
        tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document
        .getElementById(select)
        .style
        .display = "block";
    evt.currentTarget.className += " active";
}