var date = new Date();

var currentMonth = date.getMonth();
var currentDay = date.getDay();
var currentDate = date.getDate();
var currentYear = date.getFullYear();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var title = document.getElementsByClassName("title");
title.innerHTML = "🧸 " + months[currentMonth] + " 🧸";

var habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function() {
    let habits = prompt("What's your habit", habitTitle.innerHTML);
    if (habits.length == 0) {
        habitTitle.innerHTML = "Click to Set your Habit";
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
        if (dayCount < daysInThisMonth) {
            day[j].innerHTML = dayCount + 1;
            day[j].setAttribute("id", "day" + (dayCount + 1));
            dayCount++;
        } else {
            day[j].innerHTML = "";
            day[j].setAttribute("style", "background-color: white;");
        }
    }
    rowCount++;
}

var completed = new Array(31);
for (var i = 0; i < dayCount; i++) {
    var tempString = "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
    console.log("Storing date: " + tempString);
    var tempDay = localStorage.getItem(tempString);
    console.log(tempDay);
    if (tempDay == null || tempDay == "false") {
        localStorage.setItem(tempString, "false");
    } else if (tempDay == "true") {
        daysCompleted++;
    }
    totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
}

console.log("Completed array: " + completed);
console.log("Total days completed: " + daysCompleted);

for (var i = 0; i < currentDate; i++) {
    var tempString = "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
    console.log(tempString);
    var chosenDay = localStorage.getItem(tempString);
    console.log(i + 1 + ": " + chosenDay);
    var chosenDayDiv = document.getElementById("day" + (i + 1));
    if (chosenDay === "true") {
        chosenDayDiv.style.backgroundColor = "#e4d1bf";
    } else if (chosenDay === "false") {
        chosenDayDiv.style.backgroundColor = "white";
    }
}

var dayDivs = document.querySelectorAll(".day");
for (var i = 0; i < currentDate; i++) {
    dayDivs[i].onclick = function(e) {
        var num = e.target.innerText;
        var selectedDate = document.getElementById(e.target.id);
        var storageString = "" + (currentMonth + 1) + "-" + num + "-" + currentYear;

        if (localStorage.getItem(storageString) === "false") {
            selectedDate.style.backgroundColor = "#e4d1bf";
            localStorage.setItem(storageString, true);
            daysCompleted++;
        } else if (localStorage.getItem(storageString) === "true") {
            selectedDate.style.backgroundColor = "white";
            localStorage.setItem(storageString, false);
            daysCompleted--;
        }

        totalDays.innerHTML = daysCompleted + "/" + dayCount;
        console.log(daysCompleted, currentDate);

        if (daysCompleted === currentDate) {
            alert("Wow look at you gooo!");
        }
    }
}

var resetButton = document.getElementById("resetButton");
resetButton.onclick = function() {
    for (var i = 0; i < dayCount; i++) {
        var tempStrings = "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
        localStorage.setItem(tempStrings, "false");
        var curDay = document.getElementById("day" + (i + 1));
        curDay.style.backgroundColor = "white";
    }

    daysCompleted = 0;
    totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
}