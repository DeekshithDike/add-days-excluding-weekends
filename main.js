// recursive function to calculate expiry date
function getExpiryDate(startDate, noOfDaysToAdd, count) {
    if (count < noOfDaysToAdd) {
        endDate = new Date(startDate.setDate(startDate.getDate() + 1));
        if (endDate.getDay() != 0 && endDate.getDay() != 6) {	// sunday & saturday excluded from the list
            count++;
        }
        getExpiryDate(startDate, noOfDaysToAdd, count); // recursion
    }
    return endDate;	// return final result
}


/* startDate = "2020-08-22"; // Add custom date */
let startDate = new Date(); // Current date
let endDate = "", noOfDaysToAdd = 10, count = 0; // Variable declaration

const expiryDate = getExpiryDate(startDate, noOfDaysToAdd, count); // Call getExpiryDate function
console.log(expiryDate); // display result in console