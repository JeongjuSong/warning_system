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
    document.getElementById("headlineselect").selectedIndex = -1;
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
    $('select#headlineselect').each(function () {
        if ($(this).val() == '직접 입력') { //직접 입력 선택한 경우
            $('#headline').val(''); //값 초기화
            $('#description').val(''); //값 초기화
            $('#instruction').val(''); //값 초기화
            $('#headline').attr("disabled", false);
            $('#description').attr("disabled", false);
            $('#instruction').attr("disabled", false);
        } else { //직접 입력이 아닌 경우
            $('#headline').attr("disabled", true);
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
        width: '100%',
        height: '100%'
    };
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

// 실제 방송 전송
function SendData() { // post rasData
    var postData = { //postData 타입 정의
        "cap": "",
        "identifier": 0,
        "sender": "",
        "sent": "",
        "status": "",
        "msgType": "",
        "scope": "",
        "category": "",
        "event": "",
        "responseType": "",
        "urgency": "",
        "severity": "",
        "certainty": "",
        "eventcode_valuename": "",
        "eventcode_value": "",
        "headline": "",
        "description": "",
        "instruction": "",
        "contact": "",
        "areaDesc": 0
    };

    var sent = document.getElementById('checktime').value; //시간
    var status = $('input[name="status"]:checked').val(); // 실제/훈련/시험
    var msgType = $('select#msgType').val(); // 경보 종류 (신규, 갱신, 취소)
    var scope = $('select#scope').val(); // 수신자범위 (public,restriced)
    var category = document.getElementById('checkcategory').value; //재난 카테고리
    var event = document.getElementById('event').value; //기준 사건
    var responseType = $('select#responseType').val(); //행동요령 코드
    var urgency = $('select#urgency').val(); //대응 긴급성
    var alarm_type = document.getElementById('checkalarm').value; //재난 종류 약어
    var severity = $('select#severity').val(); // 경보 발령 원인 사건의 피해규모
    var certainty = $('select#certainty').val(); // 사건의 발생 확률
    var headline = $("#headline").val(); //경보 주제
    var description = $('#description').val(); //사건 설명
    var instruction = $('#instruction').val(); //행동 요령
    var contact = document.getElementById('contact').value;
    var areaDesc = document.getElementById('checklocation').value; //보내는 지역
    // var location_num = document.getElementById('checknum').value; //단말기 num

    postData.cap = "cap" // 시작한다는 안내
    postData.identifier = user_area; // 인천
    postData.sender = user_area + "000@WS.GOV"; //장치의 식별자
    postData.sent = sent; // 시간
    postData.status = status; // 실제/훈련/테스트 방송 선택
    postData.msgType = msgType; //경보 종류 (신규, 갱신, 취소)
    postData.scope = scope; //수신자 범위
    postData.category = category; //재난 카테고리
    postData.event = event; //기준이 되는 사건
    postData.responseType = responseType; //행동요령 코드
    postData.urgency = urgency; //대응 긴급성
    postData.severity = severity; // 경보 발령 원인 사건의 피해 규모
    postData.certainty = certainty; //사건의 발생 확률
    postData.eventcode_valuename = "SAME";
    postData.eventcode_value = alarm_type; //재난 종류 (지진 경보, 민방위 경계경보)
    postData.headline = headline; //메시지 주제
    postData.description = description; //
    postData.instruction = instruction;
    postData.contact = contact; //연락 담당자
    postData.areaDesc = areaDesc; // 남동구
    // postData.areaDesc = location_num; // 인천시청역
    // postData.siren = siren; // 사이렌

    var getTest = function (data) {
        // console.log("1 data: " + postData.cap);
        // console.log("2 data: " + postData.identifier);
        // console.log("3 data: " + postData.sender);
        // console.log("4 data: " + postData.sent);
        // console.log("5 data: " + postData.status);
        // console.log("6 data: " + postData.msgType);
        // console.log("7 data: " + postData.scope);
        // console.log("8 data: " + postData.category);
        // console.log("9 data: " + postData.event);
        // console.log("10 data: " + postData.responseType);
        // console.log("11 data: " + postData.urgency);
        // console.log("12 data: " + postData.severity);
        // console.log("13 data: " + postData.certainty);
        // console.log("14 data: " + postData.eventcode_valuename);
        // console.log("15 data: " + postData.eventcode_value);
        // console.log("16 data: " + postData.headline);
        // console.log("17 data: " + postData.description);
        // console.log("18 data: " + postData.instruction);
        // console.log("19 data: " + postData.contact);
        // console.log("20 data: " + postData.areaDesc);
        var result;
        $.ajax({
            type: "POST",
            url: '/rasData',
            data: data,
            async: true,
            success: function (data) {
                result = data.result;
            },
            error: function (request, status, error) {}
        });
        return result;
    }


    var run = function (postData) {
        getTest(postData);
    }
    run(postData);
}