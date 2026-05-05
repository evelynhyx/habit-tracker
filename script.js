var date = new Date();

var currentMonth = date.getMonth();
var currentDay = date.getDay();
var currentDate = date.getDate();
var currentYear = date.getFullYear();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var title = document.getElementById("title");
title.innerHTML = "🧸 " + months[currentMonth] + " 🧸";

var habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function() {
    let habits = prompt("What's your habit", habitTitle.innerHTML);
    if (habits.length == 0) {
        habitTitle.innerHTML = "Click to set your habit";
    } else {
        habitTitle.innerHTML = habits;
    }
}

var daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysInThisMonth = daysInTheMonthList[currentMonth];

var daysCompleted = 0;
var totalDays = document.getElementById("totalDays");
totalDays.innerHTML = "0/" + daysInThisMonth;

var dayCount = 0;
var rowCount = 0;
var days = document.getElementsByClassName("days");

for (var i = 0; i < days.length; i++) {
    var day = days[rowCount].getElementsByClassName("day");
    for (var j = 0; j < day.length; j++) {
        if (dayCount == currentDate - 1) {
            day[j].setAttribute("style", "color: #e4d1bf;");
            day[j].setAttribute("style", "border: 2px solid black;");
        }
    }
}