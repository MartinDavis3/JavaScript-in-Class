function addResort() {
    var resortNameInput = document.querySelector("#resort-name").value;
    var resortAddressInput = document.querySelector("#resort-address").value;
    var resortPhoneInput = document.querySelector("#resort-phone").value;
    var resortBookingsInput = document.querySelector("#resort-bookings").value;

    var newVacationResort = new VacationResort(resortNameInput, resortAddressInput, resortPhoneInput, resortBookingsInput);

    var newRow = document.createElement( 'TR' );

    for(resProp in newVacationResort) {
        var newTd = document.createElement( 'TD' );
        newTd.textContent = newVacationResort[resProp];
        newRow.appendChild(newTd)
    }
   
    // Target your table body.
    var tableBody = document.getElementById( 'table-body' );
    tableBody.appendChild( newRow ); // Inject the brand new row, so the user can see it! Yay!

    document.querySelector("#resort-name").value = "";
    document.querySelector("#resort-address").value = "";
    document.querySelector("#resort-phone").value = "";
    document.querySelector("#resort-bookings").value = "";


} 

//constructor

function VacationResort(resortName, resortAddress, resortPhone, resortBookings) {
    this.resortName = resortName,
    this.resortAddress = resortAddress,
    this.resortPhone = resortPhone,
    this.resortBookings = resortBookings
    }
