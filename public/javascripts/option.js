// select의 년/월/일 시간 선택
window.onload = function () {
    // printTime();
    var sYear = 2019
    var eYear = 2025
    var sMonth = 01
    var eMonth = 12
    var sDay = 01
    var eDay = 31
    var sHour = 00
    var eHour = 23
    var sMinute = 00
    var eMinute = 59
    var sNum = 1
    var eNum = 10

    var strYear = "";
    var strMonth = "";
    var strDay = "";
    var strHour = "";
    var strMinute = "";
    var strNum = "";

    strYear += "<option value='' disabled selected>년</option>"
    strMonth += "<option value='' disabled selected>월</option>"
    strDay += "<option value='' disabled selected>일</option>"
    strHour += "<option value='' disabled selected>시</option>"
    strMinute += "<option value='' disabled selected>분</option>"
    strNum += "<option value = '' disabled selected>횟수</option>"

    for (var i = sYear; i <= eYear; i++) {
        strYear += "<option value=" + i + ">" + i + "</option>";
    }
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

    document.getElementById("ayear").innerHTML = strYear;
    document.getElementById("amonth").innerHTML = strMonth;
    document.getElementById("aday").innerHTML = strDay;
    document.getElementById("ahour").innerHTML = strHour;
    document.getElementById("aminute").innerHTML = strMinute;
    document.getElementById("repeat_num").innerHTML = strNum;
}

function logo_info() {
    /*   접속 지역에 따라 달라지는 CI 표현 */
    var img_src;
    for (var i = 0; i <= 39; i++) {
        if (user_area == i) {
            img_src = '../public/img/' + i + '_logo.png';
        }
    }
    return img_src;
}

function title_info() {
    var img_src;
    for (var i = 0; i <= 39; i++) {
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
    document.getElementById("headline").selectedIndex = -1;
    document.getElementById("siren").selectedIndex = -1;

}

// 방송 종류에서 modal 창에서 선택 안할 시 선택 표시 안되게 처리
function closecheck() {
    $("[id=broadcast]").parent().removeClass('selected');
    $("[id=broadcast]").prop("checked", false);
    document.getElementById("tts_title").selectedIndex = -1;
    document.getElementById("headline").selectedIndex = -1;
    document.getElementById("siren").selectedIndex = -1;
}

// 재난 종류에서 modal 창에서 선택 안할 시 선택 표시 안되게 처리
function closecheck1() {
    $("[id=alarm_type1]").prop("checked", false);
    $("[id=popup_show1]").prop("checked", false);
    $("[id=popup_show1]").parent().removeClass('selected');
}

function closecheck2() {
    $("[id=alarm_type2]").prop("checked", false);
    $("[id=popup_show2]").prop("checked", false);
    $("[id=popup_show2]").parent().removeClass('selected');
}

function closecheck3() {
    $("[id=alarm_type3]").prop("checked", false);
    $("[id=popup_show3]").prop("checked", false);
    $("[id=popup_show3]").parent().removeClass('selected');
}

function closecheck4() {
    $("[id=alarm_type4]").prop("checked", false);
    $("[id=popup_show4]").prop("checked", false);
    $("[id=popup_show4]").parent().removeClass('selected');
}

function closecheck5() {
    $("[id=alarm_type5]").prop("checked", false);
    $("[id=popup_show5]").prop("checked", false);
    $("[id=popup_show5]").parent().removeClass('selected');
}

function closecheck6() {
    $("[id=alarm_type6]").prop("checked", false);
    $("[id=popup_show6]").prop("checked", false);
    $("[id=popup_show6]").parent().removeClass('selected');
}

function closecheck7() {
    $("[id=alarm_type7]").prop("checked", false);
    $("[id=popup_show7]").prop("checked", false);
    $("[id=popup_show7]").parent().removeClass('selected');
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
    '<button type = "button" class = "btn btn-default" onclick=closecheck1() data-dismiss = "modal" > 닫기 </button>' +
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
    '<button type = "button" class = "btn btn-default" onclick=closecheck3() data-dismiss = "modal" > 닫기 </button>' +
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
    '<button type = "button" class = "btn btn-default" onclick=closecheck4() data-dismiss = "modal" > 닫기 </button>' +
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
    '<button type = "button" class = "btn btn-default" onclick=closecheck5() data-dismiss = "modal" > 닫기 </button>' +
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
    '<button type = "button" class = "btn btn-default" onclick=closecheck6() data-dismiss = "modal" > 닫기 </button>' +
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
    '<button type = "button" class = "btn btn-default" onclick=closecheck7() data-dismiss = "modal" > 닫기 </button>' +
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

// 경보 메세지 설명, 행동 요령 직접 입력
function subject_select() {
    $('select#headline').each(function () {
        if ($(this).val() == '직접 입력') { //직접 입력 선택한 경우
            $('#description').val(''); //값 초기화
            $('#instruction').val(''); //값 초기화
            $('#description').attr("disabled", false);
            $('#instruction').attr("disabled", false);
        } else { //직접 입력이 아닌 경우
            $('#description').attr("disabled", true);
            $('#instruction').attr("disabled", true);
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
        'width': 320,
        'height': 250
    };
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

// 실제 방송 전송
function SendData() { // post rasData
    var postData = { //postData 타입 정의
        "identifier": 0,
        "sender": "",
        "sent": "",
        "status": "",
        "msgType": "",
        "scope": "",
        "category": "",
        "event" : "",
        "responseType" : "",
        "urgency" : "",
        "severity": "",
        "certainty": "",
        "eventcode_valuename" : "",
        "eventcode_value": "",
        "headline": "",
        "description": "",
        "instruction" : "",
        "contact": "",
        "area": "",
        "areaDesc" : ""
    };

    var time = document.getElementById('checktime').value; //시간
    var status = document.getElementById('checkstatus').value; // 실제/훈련/시험
    var area = document.getElementById('checkcode').value; //행정구역코드
    var location_num = document.getElementById('checknum').value; //단말기 num
    var category = document.getElementById('checkcategory').value; //재난 카테고리
    var event = document.getElementById('event').value;
    var alarm_type = document.getElementById('checkalarm').value; //재난 종류 약어
    var severity = $('select#severity').val(); // 경보 발령 원인 사건의 피해규모
    var headline = document.getElementById('checkheadline').value; //경보 주제
    var description = document.getElementById('checkdescription').value; //사건 설명
    var instruction = document.getElementById('checkinstruction').value; //행동 요령

    postData.identifier = user_area; // 인천
    postData.sender = "INCHEON@WS.GOV";//장치의 식별자
    postData.sent = time; // 즉시
    postData.status = status;
    postData.msgType = "Alert";
    postData.scope = "Public";
    postData.category= category;//재난 카테고리
    postData.event = event; //기준이 되는 사건
    postData.responseType = "Shelter";
    postData.urgency = "Immediate";
    postData.severity = severity;
    postData.certainty = "Observed";
    postData.eventcode_valuename = "SAME";
    postData.eventcode_value = alarm_type;
    postData.headline = headline;
    postData.description = description;
    postData.instruction = instruction;
    postData.contact = "MANAGER OF INCHEON CITY HALL CENTRAL CONTROL STATION"; //연락 담당자
    postData.area = area; // 남동구
    postData.areaDesc = location_num; // 인천시청역
    // postData.siren = siren; // 사이렌

    var getTest = function (data) {
        var result;
        $.ajax({
            type: "POST",
            url: '/rasData',
            data: data,
            // async: false,
            async: true,
            success: function (data) {
                result = data.result;
            },
            error: function (e) {}
        });
        return result;
    }
    var run = function (postData) {
        getTest(postData);
    }
    run(postData);
}