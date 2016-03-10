// Set pin 5 as output on lamp control module
$.getq('queue', '/esp8266/mode/5/o');

$(document).ready(function() {

  // Function to control lamp
  $("#1").click(function() {
    $.getq('queue', '/esp8266/digital/5/1');
  });

  $("#2").click(function() {
    $.getq('queue', '/esp8266/digital/5/0');
  });

  // Get data from DHT sensor
  function refresh_dht() {
  	$.getq('queue', '/esp8266/temperature', function(data) {
      $('#temperature').html("Temperature: " + data.temperature + " C");	
    });

    $.getq('queue', '/esp8266/humidity', function(data) {
      $('#humidity').html("Humidity: " + data.humidity + " %");
    });


     $.getq('queue', '/esp8266/amp', function(data) {
      $('#amp').html("amp: " + data.amp + " %");
    });
  }
  refresh_dht();
  setInterval(refresh_dht, 1000);

});