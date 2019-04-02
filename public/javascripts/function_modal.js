$(document).ready(function () {

   $('.custom-modal1').click(function () {
      var mymodal = $('#popup');

      $.getJSON('/data/type.json', function (data) {
          console.log(data.weather_special);
          
      var weather_special = data.weather_special.map(function (weather_special) {
         return weather_special.id + ': ' + weather_special.situation;
       });
      //  mymodal.empty();
       if (weather_special.length) {
            // console.log(weather_special);
            var showText ="";
            weather_special.map(function(weather_special){
               
               showText+= weather_special+"<br>";
               
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
         return other_alarm.id + ': ' + other_alarm.situation;
       });
      //  mymodal.empty();
       if (other_alarm.length) {
            // console.log(other_alarm);
            var showText ="";
            other_alarm.map(function(other_alarm){
               
               showText+= other_alarm+"<br>";
               
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
         return civil_defence.id + ': ' + civil_defence.situation;
       });
      //  mymodal.empty();
       if (civil_defence.length) {
            // console.log(civil_defence);
            var showText ="";
            civil_defence.map(function(civil_defence){
               
               showText+= civil_defence+"<br>";
               
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
         return national.id + ': ' + national.situation;
       });
      //  mymodal.empty();
       if (national.length) {
            // console.log(national);
            var showText ="";
            national.map(function(national){
               
               showText+= national+"<br>";
               
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
         return local.id + ': ' + local.situation;
       });
      //  mymodal.empty();
       if (local.length) {
            // console.log(local);
            var showText ="";
            local.map(function(local){
               
               showText+= local+"<br>";
               
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
         return test.id + ': ' + test.situation;
       });
      //  mymodal.empty();
       if (test.length) {
            // console.log(test);
            var showText ="";
            test.map(function(test){
               
               showText+= test+"<br>";
               
            });
            mymodal.find('.modal-body').html(showText);
       }   
  
      });
   
   });

   $('.custom-modal7').click(function () {
      var mymodal = $('#popup');

      $.getJSON('/data/type.json', function (data) {
          console.log(data.other_weather);
          
      var other_weather = data.other_weather.map(function (other_weather) {
         return other_weather.id + ': ' + other_weather.situation;
       });
      //  mymodal.empty();
       if (other_weather.length) {
            // console.log(other_weather);
            var showText ="";
            other_weather.map(function(other_weather){
               
               showText+= weather_sother_weatherpother_weatherecial+"<br>";
               
            });
            mymodal.find('.modal-body').html(showText);
       }   
  
      });
   
   });



   $("#popup").modal({
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

});
