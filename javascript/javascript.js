$(document).ready(function() {
    $('#validateBtn').click(function() {
      var panNumber = $('#pan').val();
      var pan = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    if (pan.test(panNumber)) {
        $('#result').text('Successfully submitted');
      } 
    else {
        $('#result').text('Invalid PAN number');
      }
    });
  });