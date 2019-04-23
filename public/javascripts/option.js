// function printTime() {
//     var clock = document.getElementById("clock"); // 출력할 장소 선택
//     var now = new Date(); // 현재시간
//     var nowTime = now.getFullYear() + "-" + (
//         now.getMonth() + 1
//     ) + "-" + now.getDate() + "&nbsp;&nbsp;" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
//     clock.innerHTML = nowTime; // 현재시간을 출력
//     setTimeout("printTime()", 1000); // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000
// }

// select의 년/월/일 시간 선택
window.onload = function () {
    // printTime();
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

    strMonth += "<option value='' disabled selected>월</option>"
    strDay += "<option value='' disabled selected>일</option>"
    strHour += "<option value='' disabled selected>시</option>"
    strMinute += "<option value='' disabled selected>분</option>"
    strNum += "<option value = '' disabled selected>횟수</option>"

    for (var i = sMonth; i <= eMonth; i++) {
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

    for (var i = sNum; i <= eNum; i++) {
        strNum += "<option value=" + i + ">" + i + "</option>";
    }

    document.getElementById("amonth").innerHTML = strMonth;
    document.getElementById("aday").innerHTML = strDay;
    document.getElementById("ahour").innerHTML = strHour;
    document.getElementById("aminute").innerHTML = strMinute;
    document.getElementById("repeat_num").innerHTML = strNum;
}

function logo_info() {
    /*   접속 지역에 따라 달라지는 CI 표현 */
    var img_src;
    for (var i = 0; i <= 17; i++) {
        if (user_area == i) {
            img_src = '../public/img/' + i + '_logo.png';
        }
    }
    return img_src;
}

function title_info() {
    var img_src;
    for (var i = 0; i <= 17; i++) {
        if (user_area == i) {
            img_src = '../public/img/' + i + '_title.png';
        }
    }
    return img_src;
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

// 체크박스 선택 시, CheckFunc() 함수 실행
$(function () {
    $("input[type=checkbox]").each(function () {
        $(this).click(function () {
            CheckFunc($(this));
        });
    });
});

// 버튼 클릭 시 초기화
function clear_onclick() {
    alert("모든 선택 내용이 초기화 됩니다.");
    $("input[type=checkbox]").parent().removeClass('selected');
    $("input[type=checkbox]").prop('checked', false);
    document.getElementById("year").selectedIndex = -1;
    document.getElementById("amonth").selectedIndex = -1;
    document.getElementById("aday").selectedIndex = -1;
    document.getElementById("ahour").selectedIndex = -1;
    document.getElementById("aminute").selectedIndex = -1;
    document.getElementById("tts_title").selectedIndex = -1;
    document.getElementById("message_title").selectedIndex = -1;
    document.getElementById("siren").selectedIndex = -1;

}

// 방송 종류에서 modal 창에서 선택 안할 시 선택 표시 안되게 처리
function closecheck() {
    $("[id=broadcast]").parent().removeClass('selected');
    $("[id=broadcast]").prop("checked", false);
    document.getElementById("tts_title").selectedIndex = -1;
    document.getElementById("message_title").selectedIndex = -1;
    document.getElementById("siren").selectedIndex = -1;
}

// 재난 종류에서 modal 창에서 선택 안할 시 선택 표시 안되게 처리
function closecheck2() {
    $("[id=alarm_type]").prop("checked", false);
    for (var i = 1; i <= 7; i++) {
        $("[id=popup_show" + i + "]").prop("checked", false);
        $("[id=popup_show" + i + "]").parent().removeClass('selected');
    }
}


// 지역 선택 3개 TAB 설정
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

// 세부 재난 종류 modal 7개 생성
var content1 = '<div class="modal" id="popup1" role="dialog">' +
    ' <div class="modal-dialog" role="document">' +
    '<form id="myForm">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title" id="modal_title">재난 종류 상세 선택</h5>' +
    '</div>' +
    '<div class = "modal-body">' +
    '<p > < /p>' +
    '</div>' +
    '<div class = "modal-footer">' +
    '<button type = "button" class = "btn btn-default" onclick=closecheck2() data-dismiss = "modal" > 닫기 </button>' +
    '<button type = "button" class = "btn btn-primary" data-dismiss = "modal" > 선택 완료 </button>' +
    '</div>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';

var content2 = '<div class="modal" id="popup2" role="dialog">' +
    ' <div class="modal-dialog" role="document">' +
    '<form id="myForm">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title" id="modal_title">재난 종류 상세 선택</h5>' +
    '</div>' +
    '<div class = "modal-body">' +
    '<p > < /p>' +
    '</div>' +
    '<div class = "modal-footer">' +
    '<button type = "button" class = "btn btn-default" onclick=closecheck2() data-dismiss = "modal" > 닫기 </button>' +
    '<button type = "button" class = "btn btn-primary" data-dismiss = "modal" > 선택 완료 </button>' +
    '</div>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';

var content3 = '<div class="modal" id="popup3" role="dialog">' +
    ' <div class="modal-dialog" role="document">' +
    '<form id="myForm">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title" id="modal_title">재난 종류 상세 선택</h5>' +
    '</div>' +
    '<div class = "modal-body">' +
    '<p > < /p>' +
    '</div>' +
    '<div class = "modal-footer">' +
    '<button type = "button" class = "btn btn-default" onclick=closecheck2() data-dismiss = "modal" > 닫기 </button>' +
    '<button type = "button" class = "btn btn-primary" data-dismiss = "modal" > 선택 완료 </button>' +
    '</div>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';

var content4 = '<div class="modal" id="popup4" role="dialog">' +
    ' <div class="modal-dialog" role="document">' +
    '<form id="myForm">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title" id="modal_title">재난 종류 상세 선택</h5>' +
    '</div>' +
    '<div class = "modal-body">' +
    '<p > < /p>' +
    '</div>' +
    '<div class = "modal-footer">' +
    '<button type = "button" class = "btn btn-default" onclick=closecheck2() data-dismiss = "modal" > 닫기 </button>' +
    '<button type = "button" class = "btn btn-primary" data-dismiss = "modal" > 선택 완료 </button>' +
    '</div>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';

var content5 = '<div class="modal" id="popup5" role="dialog">' +
    ' <div class="modal-dialog" role="document">' +
    '<form id="myForm">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title" id="modal_title">재난 종류 상세 선택</h5>' +
    '</div>' +
    '<div class = "modal-body">' +
    '<p > < /p>' +
    '</div>' +
    '<div class = "modal-footer">' +
    '<button type = "button" class = "btn btn-default" onclick=closecheck2() data-dismiss = "modal" > 닫기 </button>' +
    '<button type = "button" class = "btn btn-primary" data-dismiss = "modal" > 선택 완료 </button>' +
    '</div>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';

var content6 = '<div class="modal" id="popup6" role="dialog">' +
    ' <div class="modal-dialog" role="document">' +
    '<form id="myForm">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title" id="modal_title">재난 종류 상세 선택</h5>' +
    '</div>' +
    '<div class = "modal-body">' +
    '<p > < /p>' +
    '</div>' +
    '<div class = "modal-footer">' +
    '<button type = "button" class = "btn btn-default" onclick=closecheck2() data-dismiss = "modal" > 닫기 </button>' +
    '<button type = "button" class = "btn btn-primary" data-dismiss = "modal" > 선택 완료 </button>' +
    '</div>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';

var content7 = '<div class="modal" id="popup7" role="dialog">' +
    ' <div class="modal-dialog" role="document">' +
    '<form id="myForm">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title" id="modal_title">재난 종류 상세 선택</h5>' +
    '</div>' +
    '<div class = "modal-body">' +
    '<p > < /p>' +
    '</div>' +
    '<div class = "modal-footer">' +
    '<button type = "button" class = "btn btn-default" onclick=closecheck2() data-dismiss = "modal" > 닫기 </button>' +
    '<button type = "button" class = "btn btn-primary" data-dismiss = "modal" > 선택 완료 </button>' +
    '</div>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';


function sweetalert() {
    swal('발령되었습니다.').then(function () {
        location.reload();
    })
}

function sweetalert2() {
    swal('선택하지 않은 항목이 있는지 확인하세요.').then(function () {
        location.reload();
    })
}

function deletealert() {
    swal('삭제되었습니다.').then(function () {
        location.reload();
    })
}

function insertalert() {
    swal('추가되었습니다.').then(function () {
        location.reload();
    })
}

function success() {
    swal('성공하였습니다.').then(function () {
        location.reload();
    })
}

function fail() {
    swal('실패하였습니다.').then(function () {
        location.reload();
    })
}

// tts, 저장메시지 직접 입력
function tts_select() {
    $('select#tts_title').each(function () {
        if ($(this).val() == '직접 입력') { //직접 입력 선택한 경우
            $('#tts_text').val(''); //값 초기화
            $('#tts_text').attr("disabled", false);
        } else { //직접 입력이 아닌 경우
            $('#tts_text').attr("disabled", true);
        }
    });
}

function message_select() {
    $('select#message_title').each(function () {
        if ($(this).val() == '직접 입력') { //직접 입력 선택한 경우
            $('#message_text').val(''); //값 초기화
            $('#message_text').attr("disabled", false);
        } else { //직접 입력이 아닌 경우
            $('#message_text').attr("disabled", true);
        }
    });
}

// 구글 차트
google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Result', 'All Result Record'],
        ['중구', 5],
        ['미추홀구', 2],
        ['연수구', 2],
        ['남동구', 2]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {
        'width': 300,
        'height': 250
    };
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}