"use strict";

// recursive function to calculate expiry date
function getExpiryDate(startDate, noOfDaysToAdd, count) {
  if (count < noOfDaysToAdd) {
    endDate = new Date(startDate.setDate(startDate.getDate() + 1));

    if (endDate.getDay() != 0 && endDate.getDay() != 6) {
      // sunday & saturday excluded from the list
      count++;
    }

    getExpiryDate(startDate, noOfDaysToAdd, count); // recursion
  }

  return endDate; // return final result
}
/* startDate = "2020-08-22"; // Add custom date */


var startDate = new Date(); // Current date

var endDate = "",
    noOfDaysToAdd = 10,
    count = 0; // Variable declaration

document.getElementById('cuurentDate').textContent = startDate;
document.getElementById('noOfDays').textContent = noOfDaysToAdd;
var expiryDate = getExpiryDate(startDate, noOfDaysToAdd, count); // Call getExpiryDate function
//show results in DOM

document.getElementById('futureDate').textContent = expiryDate;