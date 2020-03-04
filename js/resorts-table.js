function addResort() {
    var resortNameInput = document.querySelector("#resort-name").value;
    var resortAddressInput = document.querySelector("#resort-address").value;
    var resortPhoneInput = document.querySelector("#resort-phone").value;
    var resortBookingsInput = document.querySelector("#resort-bookings").value;

    var newVacationResort = new VacationResort(resortNameInput, resortAddressInput, resortPhoneInput, resortBookingsInput);

    var newTr = document.createElement("tr");
    // newTr.appendChild(newTr);
    var currentTr = document.getElementById("tr");
    document.body.insertBefore(newTr, currentTr);

    for(resProp in newVacationResort) {
        var newTd = document.createElement("td");
        var newContent = document.createTextNode(newVacationResort[resProp]);
        newTd.appendChild(newContent);
        var currentTd = document.getElementById("td");
        document.body.insertBefore(newTd, currentTd);
    }
}   
 
//constructor

function VacationResort(resortName, resortAddress, resortPhone, resortBookings) {
    this.resortName = resortName,
    this.resortAddress = resortAddress,
    this.resortPhone = resortPhone,
    this.resortBookings = resortBookings
    }
