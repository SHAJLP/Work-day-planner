//variables
// moment.js

var today = moment();
// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container');

// REFERENCES
// Display current date and time with an id of "currentDay"
$('#currentDay').text(today.format('LLLL')); // LLLL shows day of the week, date and time

// EVENT LISTENER
// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var timeKey = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// items from local storage 
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

// Function to track tasks and implement a colour change if they are in the past, present or future
function auditTask() {
  // current number of hours
  var currentHour = today.hours();

  // loop over each time block
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

    // if the time Id attribute is before the current hour, add the past class
    if (timeId < currentHour) {
      $(this).addClass('past');
    } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
    else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

// Call the audit task function
auditTask();

// Use setTimeout to update the time every minute (1000ms * 60s)
setTimeout(function () {
  // clear the current URL
  location = ''; // location references the current URL
}, 1000 * 60);
