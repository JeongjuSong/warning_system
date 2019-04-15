$(document).ready(function () {

   $('.custom-modal1').click(function () {
      var mymodal = $('#popup1');

      $.getJSON('/data/type.json', function (data) {
         console.log(data.weather_special);

         var weather_special = data.weather_special.map(function (weather_special) {
            return weather_special.situation;
         });

         //  mymodal.empty();
         if (weather_special.length) {
            // console.log(weather_special);
            var showText = "";
            weather_special.map(function (weather_special) {

               showText += "<input type='checkbox' id='alarm_type1' name='alarm_type' value='" + weather_special + "'>" + weather_special + "<br>";

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
            return other_alarm.situation;
         });
         //  mymodal.empty();
         if (other_alarm.length) {
            // console.log(other_alarm);
            var showText = "";
            other_alarm.map(function (other_alarm) {

               showText += "<input type='checkbox' id='alarm_type2' name='alarm_type' value='" + other_alarm + "'>" + other_alarm + "<br>";

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
            return civil_defence.situation;
         });
         //  mymodal.empty();
         if (civil_defence.length) {
            // console.log(civil_defence);
            var showText = "";
            civil_defence.map(function (civil_defence) {

               showText += "<input type='checkbox' id='alarm_type3' name='alarm_type' value='" + civil_defence + "'>" + civil_defence + "<br>";

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
            return national.situation;
         });
         //  mymodal.empty();
         if (national.length) {
            // console.log(national);
            var showText = "";
            national.map(function (national) {

               showText += "<input type='checkbox' id='alarm_type4' name='alarm_type' value='" + national + "'>" + national + "<br>";

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
            return local.situation;
         });
         //  mymodal.empty();
         if (local.length) {
            // console.log(local);
            var showText = "";
            local.map(function (local) {

               showText += "<input type='checkbox' id='alarm_type5' name='alarm_type' value='" + local + "'>" + local + "<br>";

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
            return test.situation;
         });
         //  mymodal.empty();
         if (test.length) {
            // console.log(test);
            var showText = "";
            test.map(function (test) {

               showText += "<input type='checkbox' id='alarm_type6' name='alarm_type' value='" + test + "'>" + test + "<br>";

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
            return weather.situation;
         });
         //  mymodal.empty();
         if (weather.length) {
            // console.log(weather);
            var showText = "";
            weather.map(function (weather) {

               showText += "<input type='checkbox' id='alarm_type7' name='alarm_type' value='" + weather + "'>" + weather + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }
      });
   });

   // 선택 내용 확인은 popup8, 실제 방송 전송은 popup9
   $('.custom-modal8').click(function () {
      var mymodal = $('#popup9');
      var mymodal2 = $('#popup8');
      var showText = "";
      var ayear = $('select#year').val();
      var amonth = $('select#amonth').val();
      var aday = $('select#aday').val();
      var ahour = $('select#ahour').val();
      var aminute = $('select#aminute').val();
      var tts = $("select#tts_title").val();
      var repeat_num = $('select#repeat_num').val();
      var message = $("select#message_title").val();
      var siren = $("select#siren").val();
      var time = '';

      if ($('#time:checked').val() == 'right_now') {
         var dt = new Date();
         var month = dt.getUTCMonth() + 1;
         var hour = dt.getUTCHours() + 9;
         time = (dt.getUTCFullYear() + "." + month + "." + dt.getUTCDate() + " " + hour + ":" + dt.getUTCMinutes() + ":" + dt.getUTCSeconds());
         showText += '발령 시간 : ' + time + '<br/>';
      }

      if (ayear != null) {
         showText += '발령 시간 : ' + ayear + '.';
      }

      if (amonth != null) {
         showText += amonth + '.'
      }

      if (aday != null) {
         showText += aday + '. '
      }

      if (ahour != null) {
         showText += ahour + ':'
      }

      if (aminute != null) {
         showText += aminute + ':00<br/>'
      }

      if ($('#time:checked').val() != 'right_now') {
         time = ayear + '.' + amonth + '.' + aday + ' ' + ahour + ':' + aminute + ':00';
      }

      var location = $('#checktest').val();
      if (location.length >= 1) {
         showText += '지역 선택 : ' + location + '<br/>';
      }

      var alarm_typeArray = new Array();

      for (var a = 1; a <= 7; a++) {
         var type = $('#popup_show' + a + ':checked').val();
         if ('#popup_show' + a + ':checked') {
            var val2 = [];
            $('#alarm_type' + a + ':checked').each(function (i) {
               val2[i] = $(this).val();
               alarm_typeArray.push(val2[i]);
               showText += type + " : " + val2[i] + '<br/>';
               // console.log(alarm_typeArray)
            });
         }
      }

      var communicationArray = new Array();
      var val = [];
      $('#communication:checked').each(function (i) {
         val[i] = $(this).val();
         communicationArray.push(val[i]);
         showText += '통신 종류 : ' + val[i] + '<br/>';
         // console.log(communicationArray)
      });

      if (tts != null) {
         showText += 'TTS 방송 종류 : ' + tts + '<br/>';
      }

      if (repeat_num != null) {
         showText += 'TTS 방송 반복 횟수 : ' + repeat_num + '<br/>';
      }

      if (message != null) {
         showText += '저장 메시지 종류 : ' + message + '<br/>';
      }

      if (siren != null) {
         showText += '사이렌 종류 : ' + siren + '번<br/>';
      }

      mymodal.find('.modal-body').html(showText);
      mymodal2.find('.modal-body').html(showText);

      $("#postwarning").click(function () {
         console.log('버튼은 눌러짐');
         if (time != 'null.null.null null:null:00' && location != null && alarm_typeArray != undefined && communicationArray != undefined) {
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
                  message: message,
                  siren: siren
               },
               dataType: "json",
               cache: false,
               success: function (data) {
                  alert('저장되었다');
               },
               error: function (data) { // error인데도 발령이 되는 부분 수정
                  alert('발령 성공');
                  return window.location.reload();
               }
            });
         }
         else {
            alert('선택하지 않은 항목이 있는지 확인하세요.');
            return window.location.reload();
         }

      });
   });


   for (var i = 1; i <= 9; i++) {
      $("#popup" + i).modal({
         show: false,
         backdrop: 'static'
      });
   }

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