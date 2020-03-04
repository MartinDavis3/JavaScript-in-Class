 
 
var resortNameInput = document.querySelector("#resort-name").value
var resortAddressInput = document.querySelector("#resort-address").value
var employeeNameInput = document.querySelector("#employee-name").value
var employeeIdInput = document.querySelector("#employee-id").value
var employeeAgeInput = document.querySelector("#employee-age").value
var employeeDessertInput = document.querySelector("#employee-dessert").value

var newVacationResort = new VacationResort(resortNameInput, resortAddressInput,
     [employeeNameInput, employeeIdInput, employeeAgeInput, employeeDessertInput])
 
//constructor
function VacationResort(resortName, resortAddress,
    [employeeName, employeeID, employeeAge, employeeDessert]) {
    this.resortName = resortName;
    this.resortAddress = resortAddress;
    this.employee = [employeeName, employeeId, employeeAge, employeeDessert]
}
