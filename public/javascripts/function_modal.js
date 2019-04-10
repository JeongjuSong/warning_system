$(document).ready(function () {

   $('.custom-modal1').click(function () {
      var mymodal = $('#popup');

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

               showText += "<input type='checkbox' id='alarm_type' name='alarm_type' value='" + weather_special + "'>" + weather_special + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal2').click(function () {
      var mymodal = $('#popup');

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

               showText += "<input type='checkbox' id='alarm_type' name='alarm_type' value='" + other_alarm + "'>" + other_alarm + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal3').click(function () {
      var mymodal = $('#popup');

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

               showText += "<input type='checkbox' id='alarm_type' name='alarm_type' value='" + civil_defence + "'>" + civil_defence + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal4').click(function () {
      var mymodal = $('#popup');

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

               showText += "<input type='checkbox' id='alarm_type' name='alarm_type' value='" + national + "'>" + national + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal5').click(function () {
      var mymodal = $('#popup');

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

               showText += "<input type='checkbox' id='alarm_type' name='alarm_type' value='" + local + "'>" + local + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal6').click(function () {
      var mymodal = $('#popup');

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

               showText += "<input type='checkbox' id='alarm_type' name='alarm_type' value='" + test + "'>" + test + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }

      });

   });

   $('.custom-modal7').click(function () {
      var mymodal = $('#popup');

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

               showText += "<input type='checkbox' id='alarm_type' name='alarm_type' value='" + weather + "'>" + weather + "<br>";

            });
            mymodal.find('.modal-body').html(showText);
         }
      });
   });

   $('.custom-modal8').click(function () {
      var mymodal = $('#popup2');
      var mymodal2 = $('#popup3');
      var showText = "";
      var ayear = $('select#year').val();
      var amonth = $('select#amonth').val();
      var aday = $('select#aday').val();
      var ahour = $('select#ahour').val();
      var aminute = $('select#aminute').val();
      var tts = $("select#tts_title").val();
      var message = $("select#message_title").val();
      var siren = $("select#siren").val();

      if ($('#time:checked').val() == 'right_now') {
         var dt = new Date();
         var month = dt.getUTCMonth() + 1;
         var hour = dt.getUTCHours() + 9;
         var time = (dt.getUTCFullYear() + "." + month + "." + dt.getUTCDate() + " " + hour + ":" + dt.getUTCMinutes() + ":" + dt.getUTCSeconds());
         showText += '발령 시간 : ' + time + " <br/> ";
      }

      if (ayear != null) {
         showText += '발령 시간 : ' + ayear + '.';
      }

      if (amonth != null) {
         showText += amonth + '.'
      }

      if (aday != null) {
         showText += aday + ' '
      }
      
      if (ahour != null) {
         showText += ahour + ':'
      }

      if (aminute != null) {
         showText += aminute + ':00<br/>'
      }

      // 재난 종류, 기상특보/기타경보/민방위/전국/지역/테스트/기상추가 및 세부 재난 종류
      for (var a = 1; a <= 7; a++) {
         var type = $('#popup_show' + a + ':checked').val();
         if (type != undefined) {
            if ('#popup_show' + a + ':checked') {
               var val2 = [];
               $('#alarm_type:checked').each(function (i) {
                  val2[i] = $(this).val();
                  showText += type + ' : ' + val2[i] + '<br/>';
               });
            }
         }
      }

      // var val2 = [];
      // $('#alarm_type:checked').each(function (i) {
      //    val2[i] = $(this).val();
      //    showText += val2[i] + '<br/>';
      // });

      var val = [];
      $('#communication:checked').each(function (i) {
         val[i] = $(this).val();
         showText += '통신 종류 : ' + val[i] + '<br/>';
      });

      if (tts != null) {
         showText += 'TTS 방송 종류 : ' + tts + '<br/>';
      }

      if (message != null) {
         showText += '저장 메시지 종류 : ' + message + '<br/>';
      }

      mymodal.find('.modal-body').html(showText);
      mymodal2.find('.modal-body').html(showText);

   });


   $("#popup").modal({
      show: false,
      backdrop: 'static'
   });

   $("#popup2").modal({
      show: false,
      backdrop: 'static'
   });

   $("#popup_show1").click(function () {
      $("#popup").modal("show");
   });
   $("#popup_show2").click(function () {
      $("#popup").modal("show");
   });
   $("#popup_show3").click(function () {
      $("#popup").modal("show");
   });
   $("#popup_show4").click(function () {
      $("#popup").modal("show");
   });
   $("#popup_show5").click(function () {
      $("#popup").modal("show");
   });
   $("#popup_show6").click(function () {
      $("#popup").modal("show");
   });
   $("#popup_show7").click(function () {
      $("#popup").modal("show");
   });
   $("#warning").click(function () {
      $("#popup2").modal('show');
   })

   $("#confirm").click(function () {
      $("#popup3").modal('show');
   })

});