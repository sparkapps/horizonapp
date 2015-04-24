$(document).ready(function() {
      $(function() {
      $('div.column:not(:first)').hide(); // Hide all columns except the first
      console.log("are you hiding??");
      setInterval(showColumn, 5000); // Start the periodic calls (5 secs)
    });

      var colIndex = 1;

      function showColumn() {
      $('#column' + colIndex).hide(); // Hide current ones
      colIndex = (colIndex % 4) + 1; // Next index with cycling
      $('#column' + colIndex).show(); // Show next one

    }
});


$(document).ready(function() {
      navigator.geolocation.getCurrentPosition(onPositionUpdate);
    });



    function onPositionUpdate(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      console.log("im here");
      $.get("http://api.wunderground.com/api/e47574fe756fdcd6/geolookup/conditions/q/"+lat+","+lon+".json").done(function(parsed_json){

      // $.ajax({
      //   url : "http://api.wunderground.com/api/e47574fe756fdcd6/geolookup/conditions/q/"+lat+","+lon+".json",
      //   dataType : "jsonp",
      //   success : function(parsed_json) {
        console.log("WE MADE IT");
        console.log(parsed_json)
        var location = parsed_json.location.city;
        var currenttemp = parsed_json.current_observation.temp_f;
        var weathertype = parsed_json.current_observation.weather;
        var newNumber = Math.round(currenttemp);
        console.log(newNumber);
        var roundedTemp = inWords(newNumber);
        console.log(roundedTemp);
        $('#city').text(parsed_json.location.city);
        $('#currenttemp').text(roundedTemp);
        $('#weathertype').text(parsed_json.current_observation.weather);
        console.log(weathertype);

        $.ajax({
          url : "http://api.wunderground.com/api/e47574fe756fdcd6/astronomy/q/"+lat+","+lon+".json",
          dataType : "jsonp",
          success : function(parsed_json) {
            console.log("well hello there!");
            console.log(parsed_json);
            var sunrisehour = parsed_json.moon_phase.sunrise.hour;
            var sunriseminute = parsed_json.moon_phase.sunrise.minute;
            var wordsunrisehour = inWords(sunrisehour);
            var sunsethour = parsed_json.moon_phase.sunset.hour;
            var sunsetminute = parsed_json.moon_phase.sunset.minute;
            var wordsunsethour = inWords(sunsethour);
            var moon = parsed_json.moon_phase.phaseofMoon;
            console.log(wordsunrisehour);
            console.log(wordsunsethour);
            console.log(moon);
            $('#sunrise').text(wordsunrisehour + sunriseminute + " A.M.") + $('.todaysunrise').text("tomorrow's sunrise");
            $('#sunset').text(wordsunsethour + sunsetminute + " P.M.") + $('.todaysunset').text("today's sunset");
            $('#moon').text(parsed_json.moon_phase.phaseofMoon) + $('.moonphase').text("current moonphase");
          }
        });
      });//initial ajax request
    }; //outer onPositionUpdate

  var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  function inWords (num) {
    console.log(num);
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
    return str;
  }







          function clock(){
            var time = new Date()
            var hr = time.getHours()
            var min = time.getMinutes()
            var sec = time.getSeconds()
            var ampm = " PM "
            if (hr < 12){
              ampm = " AM "
            }
            if (hr > 12){
              hr -= 12
            }
            if (hr < 10){
              hr = hr
            }
            if (min < 10){
              min = "0" + min
            }
            if (sec < 10){
              sec = "0" + sec
            }
            if (hr === 12) {
              hr = "twelve"
            }
            if (hr === 11) {
              hr = "eleven"
            }
            if (hr === 10) {
              hr = "ten"
            }
            if (hr === 9) {
              hr = "nine"
            }
            if (hr === 8) {
              hr = "eight"
            }
            if (hr === 7) {
              hr = "seven"
            }
            if (hr === 6) {
              hr = "six"
            }
            if (hr === 5) {
              hr = "five"
            }
            if (hr === 4) {
              hr = "four"
            }
            if (hr === 3) {
              hr = "three"
            }
            if (hr === 2) {
              hr = "two"
            }
            if (hr === 1) {
              hr = "one"
            }
            if (hr === 0) {
              hr = "twelve"
            }

            document.getElementById('info').innerHTML = hr+"  "+min
            setTimeout("clock()", 1000)

          }

          window.onload=clock();