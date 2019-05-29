$(document).ready(function () {

   $('.custom-modal1').click(function () {
      var mymodal = $('#popup1');

      $.getJSON('/data/type.json', function (data) {
         console.log(data.weather_special);

         var weather_special = data.weather_special.map(function (weather_special) {
            return weather_special;
         });

         //  mymodal.empty();
         if (weather_special.length) {
            // console.log(weather_special);
            var showText = "";
            weather_special.map(function (weather_special) {

               showText += "<input type='checkbox' id='alarm_type1' class= '" + weather_special.name+ "' name='" + weather_special.category + "' value='" + weather_special.situation + "'>" + weather_special.situation + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }
      });
   });

   $('.custom-modal2').click(function () {
      var mymodal = $('#popup2');

      $.getJSON('/data/type.json', function (data) {
         console.log(data.other_alarm);

         var other_alarm = data.other_alarm.map(function (other_alarm) {
            return other_alarm;
         });
         //  mymodal.empty();
         if (other_alarm.length) {
            // console.log(other_alarm);
            var showText = "";
            other_alarm.map(function (other_alarm) {

               showText += "<input type='checkbox' id='alarm_type2' class= '" + other_alarm.name+ "' name='" + other_alarm.category + "' value='" + other_alarm.situation + "'>" + other_alarm.situation + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal3').click(function () {
      var mymodal = $('#popup3');

      $.getJSON('/data/type.json', function (data) {
         console.log(data.civil_defence);

         var civil_defence = data.civil_defence.map(function (civil_defence) {
            return civil_defence;
         });
         //  mymodal.empty();
         if (civil_defence.length) {
            // console.log(civil_defence);
            var showText = "";
            civil_defence.map(function (civil_defence) {

               showText += "<input type='checkbox' id='alarm_type3' class= '" + civil_defence.name+ "' name='" + civil_defence.category + "' value='" + civil_defence.situation + "'>" + civil_defence.situation + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal4').click(function () {
      var mymodal = $('#popup4');

      $.getJSON('/data/type.json', function (data) {
         console.log(data.national);

         var national = data.national.map(function (national) {
            return national;
         });
         //  mymodal.empty();
         if (national.length) {
            // console.log(national);
            var showText = "";
            national.map(function (national) {

               showText += "<input type='checkbox' id='alarm_type4' class= '" + national.name+ "' name='" + national.category + "' value='" + national.situation + "'>" + national.situation + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal5').click(function () {
      var mymodal = $('#popup5');

      $.getJSON('/data/type.json', function (data) {
         console.log(data.local);

         var local = data.local.map(function (local) {
            return local;
         });
         //  mymodal.empty();
         if (local.length) {
            // console.log(local);
            var showText = "";
            local.map(function (local) {

               showText += "<input type='checkbox' id='alarm_type5' class= '" + local.name+ "' name='" + local.category + "' value='" + local.situation + "'>" + local.situation + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal6').click(function () {
      var mymodal = $('#popup6');

      $.getJSON('/data/type.json', function (data) {
         console.log(data.test);

         var test = data.test.map(function (test) {
            return test;
         });
         //  mymodal.empty();
         if (test.length) {
            // console.log(test);
            var showText = "";
            test.map(function (test) {

               showText += "<input type='checkbox' id='alarm_type6' class= '" + test.name+ "' name='" + test.category + "' value='" + test.situation + "'>" + test.situation + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal7').click(function () {
      var mymodal = $('#popup7');

      $.getJSON('/data/type.json', function (data) {
         console.log(data.weather);

         var weather = data.weather.map(function (weather) {
            return weather;
         });
         //  mymodal.empty();
         if (weather.length) {
            // console.log(weather);
            var showText = "";
            weather.map(function (weather) {

               showText += "<input type='checkbox' id='alarm_type7' class= '" + weather.name+ "' name='" + weather.category + "' value='" + weather.situation + "'>" + weather.situation + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }
      });
   });

   // 선택 내용 확인은 popup8, 경보 발령 전송은 popup9
   $('.custom-modal8').click(function () {
      var mymodal = $('#popup8');
      var mymodal2 = $('#popup9');
      var showText = "";
      var showText2 = "";
      var status =  $('input[name="status"]:checked').attr('class'); //name이 status인 checkbox의 class값을 status 객체에 저장
      var msgType =  $('#msgType').find('option:selected').attr('name'); //id가 msgType인 selectbox의 name값을 msgType 객체에 저장
      var scope =  $('#scope').find('option:selected').attr('name'); //id가 scope인 selectbox의 name값을 scope 객체에 저장
      var urgency = $('#urgency').find('option:selected').attr('name'); //id가 urgency인 selectbox의 name값을 urgency 객체에 저장
      var event = document.getElementById('event').value; //id가 event인 textbox의 value값을 event 객체에 저장
      var severity = $('#severity').find('option:selected').attr('name'); //id가 severity인 selectbox의 name값을 severity 객체에 저장
      var certainty = $('#certainty').find('option:selected').attr('name'); //id가 certainty인 selectbox의 name값을 certainty 객체에 저장
      var ayear = $('select#ayear').val(); //id가 ayear인 selectbox의 value값을 ayear 객체에 저장
      var amonth = $('select#amonth').val(); //id가 amonth인 selectbox의 value값을 amonth 객체에 저장
      var aday = $('select#aday').val(); //id가 aday인 selectbox의 value값을 aday 객체에 저장
      var ahour = $('select#ahour').val(); //id가 ahour인 selectbox의 value값을 ahour 객체에 저장
      var aminute = $('select#aminute').val(); //id가 aminute인 selectbox의 value값을 aminute 객체에 저장
      var alarm_typeArray = new Array(); //재난 종류를 2개 이상 선택할 수 있도록 배열 선언
      var alarm_code = ''; 
      var alarm_category = '';
      var tts = $("select#tts_title").val(); //id가 tts_title인 selectbox의 value값을 tts 객체에 저장
      var tts_text = $('#tts_text').val(); //id가 tts_text인 textbox의 value값을 tts_text 객체에 저장
      var repeat_num = $('select#repeat_num').val(); // (tts 반복 횟수) id가 repeat_num인 selectbox의 value값을 repeat_num 객체에 저장
      var headline = $("#headline").val(); // id가 headline인 textbox의 value값을 headline 객체에 저장
      var description = $('#description').val(); // id가 description인 textbox의 value값을 description 객체에 저장
      var instruction = $('#instruction').val(); // id가 instruction인 textbox의 value값을 instruction 객체에 저장
      var responseType = $('#responseType').find('option:selected').attr('name'); //id가 responseType인 selectbox의 name값을 responseType 객체에 저장
      var siren = $("select#siren").val(); //id가 siren인 selectbox의 value값을 siren 객체에 저장
      var time = '';

      if(status != undefined) { // status가 선택되었을 경우에만 showText에 추가
         showText += '방송 상황 : ' + status + '<br/>';
      }

      if(msgType != undefined) { // msgType이 선택되었을 경우에만 showText에 추가
         showText += '경보 종류 : ' + msgType + '<br/>';
      }

      if(scope != undefined) { // scope가 선택되었을 경우에만 showText에 추가
         showText += '수신자 범위 : ' + scope + '<br/>';
      }

      if(urgency != undefined) { // urgency가 선택되었을 경우에만 showText에 추가
         showText += '대응 긴급성 : ' + urgency + '<br/>';
      }

      if(event != null) { // event가 입력되었을 경우에만 showText에 추가
         showText += '기준 사건 : ' + event + '<br/>';
      }

      if(severity != undefined) { // severity가 선택되었을 경우에만 showText에 추가
         showText += '사건의 피해 규모 : ' + severity + '<br/>';
      }

      if(certainty != undefined) { // certainty가 선택되었을 경우에만 showText에 추가
         showText += '사건 발생 확률 : ' + certainty + '<br/>';
      }

      if ($('#time:checked').val() == 'right_now') { // time이 right_now에 선택되었을 경우에만 showText에 추가
         time = $('#servertime').html();
         showText2 += '발령 시간 : ' + time + '<br/>';
      }

      if (ayear != null) { // ayear이 선택되었을 경우에만 showText에 추가
         showText2 += '발령 시간 : ' + ayear + '-' + amonth + '-' + aday + 'T' + ahour + ':' + aminute + ':00+09:00';
      }

      var location = $('#checklocation').val(); // location이 선택되었을 경우에만 showText에 추가
      if (location.length >= 1) {
         showText2 += '단말기 선택 : ' + location + '<br/>';
      }

      for (var a = 1; a <= 7; a++) { // 재난 종류 선택 시, 세부 재난 코드와 카테고리를 모두 배열에 저장
         var type = $('#popup_show' + a + ':checked').val();
         if ('#popup_show' + a + ':checked') {
            var val2 = [];
            $('#alarm_type' + a + ':checked').each(function (i) {
               val2[i] = $(this).val();
               alarm_code = $(this).attr('class'); //재난 코드 약어는 alarm_code
               alarm_category = $(this).attr('name'); //재난 카테고리는 alarm_category
               alarm_typeArray.push(val2[i]);
               showText2 += "재난종류 : (" + type + ") " + val2[i] + '<br/>';
               // console.log(alarm_typeArray)
            });
         }
      }

      var communicationArray = new Array(); // 2개 이상 선택 가능 한 통신 종류를 communicationArray 배열에 저장
      var communicationcode = new Array();
      var val = [];
      var val3 = [];
      $('#communication:checked').each(function (i) {
         val[i] = $(this).val();
         val3[i]= (this.name);
         communicationcode.push(val3[i]);
         communicationArray.push(val[i]);
         // console.log(communicationArray)
      });

      if (communicationArray.length != 0) { // 통신 종류가 선택되었을 경우에만 showText에 추가
         showText2 += '통신 종류 : ' + communicationArray + '<br/>';
      }

      if (tts != undefined) { // TTS가 선택되었을 경우에만 showText에 추가
         showText2 += 'TTS 방송 종류 : ' + tts + '<br/>TTS 방송 문안 : ' + tts_text + '<br/>';
      }

      if (tts == undefined) { // TTS가 선택되지 않은 경우에는 tts, tts_text 모두 NULL로 변경
         tts = 'NULL';
         tts_text = 'NULL';
      }

      if (repeat_num != null) { // TTS 방송 반복 횟수가 선택되었을 경우에만 showText에 추가
         showText2 += 'TTS 방송 반복 횟수 : ' + repeat_num + '<br/>';
      }

      if (headlineselect.selectedIndex != -1 && headline.length != 0) { // headline이 선택되었을 경우에만 showText에 추가 (headline, description, instruction 모두 추가)
         showText2 += '메시지 종류 : ' + headline + '<br/>경보 위험요인 : ' + description + '<br/>행동 요령 : ' + instruction + '<br/>행동 요령 코드 : ' + responseType +'<br/>' ;
      }

      if (headline == null) { // headline이 선택되지 않은 경우에는 headline, description, instruction 모두 NULL로 변경
         headline = 'NULL';
         description = 'NULL';
         instruction = 'NULL';
      }

      if (siren != null) { // siren이 선택되었을 경우에만 showText에 추가
         showText2 += '사이렌 종류 : ' + siren + '<br/>';
      }
      
      var sirencode;
      $("select#siren").each(function () { // siren을 1, 2, 3, 4와 같은 int형으로 받기 위해 selectbox의 name값을 sirencode 객체에 저장
         sirencode = $(this).find('option:selected').attr("name");
         // console.log(sirencode);
      });
      
      if (siren == null) { // siren이 선택되지 않은 경우에는 siren 값 NULL로 변경
         siren = 'NULL';
      }

      mymodal.find('.modal-body').html(showText); // mymodal의 class가 modal-body인 곳에 showText 출력
      mymodal2.find('.modal-body').html(showText); // mymodal2의 class가 modal-body인 곳에 showText 출력
      mymodal.find('.modal-body2').html(showText2); // mymodal의 class가 modal-body2인 곳에 showText2 출력
      mymodal2.find('.modal-body2').html(showText2); // mymodal2의 class가 modal-body2인 곳에 showText2 출력

      if (time != 'null-null-nullTnull:null:00+09:00' && location != null && alarm_typeArray != undefined) {
      $(document).ready(function () { // 시간, 지역, 재난종류가 모두 선택되어있을 경우에만 함수 발동
         $('#checktime').val(time); //시간
         $('#checkalarm').val(alarm_code); //재난 코드
         $('#checkcategory').val(alarm_category); //재난 카테고리
      })
      }

      $("#postwarning").click(function () { // 발령 상황, 시간, 지역, 재난 종류가 모두 선택되어있을 경우에만 ajax 발동
         if (status != undefined && time != 'null-null-nullTnull:null:00+09:00' && location != null && alarm_typeArray != undefined) {
            $.ajax({
               type: "POST",
               url: "/warninginsert",
               async: true,
               data: {
                  time: time,
                  location: location,
                  alarm_type: alarm_typeArray,
                  communication: communicationArray,
                  tts: tts,
                  tts_text: tts_text,
                  headline : headline,
                  description: description,
                  instruction: instruction,
                  siren: siren,
                  area: user_area,
                  status: status
               },
               dataType: "json",
               cache: false,
               success: function (data) {
                  return sweetalert();
               },
               error: function (data) { // error인데도 발령이 되는 부분 수정
                  return sweetalert();
               }
            });

         } else {
            // alert('선택하지 않은 항목이 있는지 확인하세요.');
            return sweetalert2();
         }
      });
   });

   for (var i = 1; i <= 11; i++) { // 모달 생성 시, 모달 밖의 화면이나 ESC 자판 클릭 시 모달이 꺼지지 않도록 설정
      $("#popup" + i).modal({
         show: false,
         backdrop: 'static'
      });
   }

   // modal창 show하도록 설정
   $("#popup_show1").click(function () {
      $("#popup1").modal("show");
   });
   $("#popup_show2").click(function () {
      $("#popup2").modal("show");
   });
   $("#popup_show3").click(function () {
      $("#popup3").modal("show");
   });
   $("#popup_show4").click(function () {
      $("#popup4").modal("show");
   });
   $("#popup_show5").click(function () {
      $("#popup5").modal("show");
   });
   $("#popup_show6").click(function () {
      $("#popup6").modal("show");
   });
   $("#popup_show7").click(function () {
      $("#popup7").modal("show");
   });
   $("#confirm").click(function () {
      $("#popup8").modal('show');
   });
   $("#warning").click(function () {
      $("#popup9").modal('show');
   });

});