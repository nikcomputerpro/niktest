var javascript_countdown = function () {
 var time_left; 
 var output_element_id = 'javascript_countdown_time';
 var keep_counting = 1;
 var no_time_left_message = '<b><font size=5 color=red>This Form Has Timed Out!<br>Please open the form in another window and copy any unsaved data.</font></b>';
 var num_timers = 1;

 function float2int (value) {
   return value | 0;
 }

 function countdown() {
  if(time_left < 2) {
   keep_counting = 0;
  }

//  time_left = time_left - 1;
   time_left = float2int((endTime - (+new Date))/1000);
   if (time_left < 0) {
     time_left = 0;
   }
 }

  function disableButtons()
  {
//  Original code to disable Submit/Update buttons
//    document.getElementById("Update").disabled=true;
//    if (num_timers >= 2)
//       document.getElementById("Update1").disabled=true;
//    if (num_timers >= 3)
//       document.getElementById("Update2").disabled=true;

     var inputs = document.getElementsByTagName('input');
     for(var i = 0; i < inputs.length; i++){
        if (inputs[i].type != 'text')
        inputs[i].disabled = 'disabled';
     }
  }


 function add_leading_zero(n) {
  if(n.toString().length < 2) {
   return '0' + n;
  } else {
   return n;
  }
 }
 function format_output() {
  var hours, minutes, seconds;
  var color = 'green';
  var fontsize = '';
  var message = '';
  seconds = time_left % 60;
  minutes = Math.floor(time_left / 60) % 60;
  hours = Math.floor(time_left / 3600);

  seconds = add_leading_zero( seconds );
  minutes = add_leading_zero( minutes );
  hours = add_leading_zero( hours );
  if (time_left % 600 == 0)  //Every 10 minutes, do a ping to refresh the user connection - doesn't work due to F5
  {
//    image_url = 'https://mmcm.jpl.nasa.gov/images/trans.gif?'+Math.random*Math.random;
//    http_request = new XMLHttpRequest();
//    http_request.open('GET', image_url);
//    http_request.send(null);
  }

  if (time_left <= 600) // 600 seconds = 10 minutes
  {
    color = 'red';
    fontsize = 'size=5';
    message = '<br>WARNING: This form will be deactivated in less than 10 minutes. Please save the form or risk losing your data.'
    if (time_left == 300) // 300 seconds = 5 minutes
    {
       var width = 400;
       var height = 200;
//     Center the popup on the user's screen
       var left = (screen.width/2)-(width/2);
       var top = (screen.height/2)-(height/2);
       popup = window.open('warning.html', 'Warning', 'scrollbars=no,menubar=no,titlebar=yes,location=no,toolbar=no, width='+width+', height='+height+', top='+top+', left='+left);
    }
  }
  else if (time_left <= 3600) // 3600 seconds = 1 hour, 1200 = 20 minutes
  {
    color = '#E56717'; //Dark Orange2
    color = '#C35817'; //Sienna3
    fontsize = 'size=4';
    message = '<br>WARNING: This form will be deactivated in less than 1 hour. Please save the form or risk losing your data.';
  }

  return '<b><font color=' + color + ' ' + fontsize + '>Form Timeout: ' + hours + ':' + minutes + ':' + seconds + message + '</font></b>';
 }

 function show_time_left() {
  document.getElementById(output_element_id).innerHTML =
    format_output();//time_left;
 }

 function no_time_left() {
  document.getElementById(output_element_id).innerHTML =
no_time_left_message;
  disableButtons();
 }

 return {
  count: function () {
   countdown();
   show_time_left();
  },
  timer: function () {
   javascript_countdown.count();

   if(keep_counting) {
    setTimeout("javascript_countdown.timer();", 1000);
   } else {
    no_time_left();
   }
  },
  init: function (n) {
//  return;
//   time_left = t;
   num_timers = n;
   output_element_id = 'javascript_countdown_time';
   endTime = (+new Date) + 1000 * 7200;  //milliseconds for countdown  =  7200  seconds = 2 hours
   javascript_countdown.timer();
  }
 };
}();
