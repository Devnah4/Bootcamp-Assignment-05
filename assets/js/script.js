// Global Variables
var currentDate = moment().format("[Today is] dddd, MMM Do");
var currentTime = moment().format('HH');
const timeText = Array.from(document.getElementsByClassName('.time-block'));
 
// Timeclock
$("#currentDay").text(`${currentDate}`);

// Save the Tasks via buttonclick
$(".saveBtn").each(function(index) {
    $(this).on('click', function () {
    var taskText = $(this).prev().val();
    localStorage.setItem(`${index}`, taskText);
    })
});

// Load tasks & Adjsut colors
$("textarea").each(function(index) {
    $(this).val(localStorage.getItem(`${index}`)|| "");
    if ($(this).attr("id") < parseInt(moment().hour())) {
        $(this).addClass('past');
    } else if ($(this).attr("id") == parseInt(moment().hour())) {
        $(this).addClass('present');
    } else {
        $(this).addClass('future');
    }   
})