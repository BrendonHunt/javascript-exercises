function leapYears() {
    year = prompt ("enter a year to determine if its a leap year.");
    if (isNaN(year) || year ===null || year <0) {
        alert("Please enter a valid year");
        return;
    }
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        alert( year + " is a leap year");
    }
}
