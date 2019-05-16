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
      var status =  $('input[name="status"]:checked').attr('class');
      var msgType =  $('#msgType').find('option:selected').attr('name');
      var scope =  $('#scope').find('option:selected').attr('name');
      var urgency = $('#urgency').find('option:selected').attr('name');
      var event = document.getElementById('event').value;
      var severity = $('#severity').find('option:selected').attr('name');
      var certainty = $('#certainty').find('option:selected').attr('name');
      var ayear = $('select#ayear').val();
      var amonth = $('select#amonth').val();
      var aday = $('select#aday').val();
      var ahour = $('select#ahour').val();
      var aminute = $('select#aminute').val();
      var alarm_typeArray = new Array();
      var alarm_code = '';
      var alarm_category = '';
      var tts = $("select#tts_title").val();
      var tts_text = $('#tts_text').val();
      var repeat_num = $('select#repeat_num').val();
      var headline = $("#headline").val();
      var description = $('#description').val();
      var instruction = $('#instruction').val();
      var responseType = $('#responseType').find('option:selected').attr('name');
      var siren = $("select#siren").val();
      var time = '';
      var status =  $('input[name="status"]:checked').val();

      if(status != undefined) {
         showText += '방송 상황 : ' + status + '<br/>';
      }

      if(msgType != undefined) {
         showText += '경보 종류 : ' + msgType + '<br/>';
      }

      if(scope != undefined) {
         showText += '수신자 범위 : ' + scope + '<br/>';
      }

      if(urgency != undefined) {
         showText += '대응 긴급성 : ' + urgency + '<br/>';
      }

      if(event != null) {
         showText += '기준 사건 : ' + event + '<br/>';
      }

      if(severity != undefined) {
         showText += '사건의 피해 규모 : ' + severity + '<br/>';
      }

      if(certainty != undefined) {
         showText += '사건 발생 확률 : ' + certainty + '<br/>';
      }

      if ($('#time:checked').val() == 'right_now') {
         time = $('#servertime').html();
         showText2 += '발령 시간 : ' + time + '<br/>';
      }

      if (ayear != null) {
         showText2 += ayear + '-' + amonth + '-' + aday + 'T' + ahour + ':' + aminute + ':00+09:00';
      }

      if ($('#time:checked').val() != 'right_now') {
         time = ayear + '-' + amonth + '-' + aday + 'T' + ahour + ':' + aminute + ':00+09:00';
      }

      var location = $('#checklocation').val();
      if (location.length >= 1) {
         showText2 += '단말기 선택 : ' + location + '<br/>';
      }

<<<<<<< HEAD
=======
      var alarm_typeArray = new Array();
      var alarm_code = '';
      var alarm_category = '';

>>>>>>> origin/master
      for (var a = 1; a <= 7; a++) {
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

      var communicationArray = new Array();
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

      if (communicationArray.length != 0) {
         showText2 += '통신 종류 : ' + communicationArray + '<br/>';
      }

      if (tts != undefined) {
<<<<<<< HEAD
         showText2 += 'TTS 방송 종류 : ' + tts + '<br/>TTS 방송 문안 : ' + tts_text + '<br/>';
=======
         showText += 'TTS 방송 종류 : ' + tts + '<br/>TTS 방송 문안 : ' + tts_text + '<br/>';
>>>>>>> origin/master
      }

      if (tts == undefined) {
         tts = 'NULL';
         tts_text = 'NULL';
      }

      if (repeat_num != null) {
         showText2 += 'TTS 방송 반복 횟수 : ' + repeat_num + '<br/>';
      }

      if (headlineselect.selectedIndex != -1 && headline.length != 0) {
         showText2 += '메시지 종류 : ' + headline + '<br/>경보 위험요인 : ' + description + '<br/>행동 요령 : ' + instruction + '<br/>행동 요령 코드 : ' + responseType +'<br/>' ;
      }

      if (headline == null) {
         headline = 'NULL';
         description = 'NULL';
         instruction = 'NULL';
      }

      if (siren != null) {
         showText2 += '사이렌 종류 : ' + siren + '<br/>';
      }
      
      var sirencode;
      $("select#siren").each(function () {
         sirencode = $(this).find('option:selected').attr("name");
         // console.log(sirencode);
      });
      
      if (siren == null) {
         siren = 'NULL';
      }

      mymodal.find('.modal-body').html(showText);
      mymodal2.find('.modal-body').html(showText);
      mymodal.find('.modal-body2').html(showText2);
      mymodal2.find('.modal-body2').html(showText2);

      if (time != 'null-null-nullTnull:null:00+09:00' && location != null && alarm_typeArray != undefined) {
      $(document).ready(function () {
         $('#checktime').val(time); //시간
         $('#checkalarm').val(alarm_code); //재난 코드
         $('#checkcategory').val(alarm_category); //재난 카테고리
<<<<<<< HEAD
=======
         $('#checkheadline').val(headline); //저장메시지 주제
         $('#checkdescription').val(description); // 위험 요인 설명
         $('#checkinstruction').val(instruction); // 행동 요령
         $('#checkstatus').val(status);
>>>>>>> origin/master
      })
      }

      $("#postwarning").click(function () {
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

   for (var i = 1; i <= 11; i++) {
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