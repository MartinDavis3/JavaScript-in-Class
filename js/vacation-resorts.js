
// inputForm.addEventListener( 'submit', function( event ) {
    // STOP the submission (event!)
    // event.preventDefault(); 

function onclick(event)  { addResort() }

function addResort() {
    console.log("running")
    var resortNameInput = document.querySelector("#resort-name").value;
    var resortAddressInput = document.querySelector("#resort-address").value;
    var employeeNameInput = document.querySelector("#employee-name").value;
    var employeeIdInput = document.querySelector("#employee-id").value;
    var employeeAgeInput = document.querySelector("#employee-age").value;
    var employeeDessertInput = document.querySelector("#employee-dessert").value;

    var newEmployee = new Employee(employeeNameInput, employeeIdInput, employeeAgeInput, employeeDessertInput);
    var newVacationResort = new VacationResort(resortNameInput, resortAddressInput, newEmployee);

    var outLine = newVacationResort.resortName + " | " +
                newVacationResort.resortAddress + " || " +
                newVacationResort.employee.employeeName  + " | " +
                newVacationResort.employee.employeeId  + " | " +
                newVacationResort.employee.employeeAge  + " | " +
                newVacationResort.employee.employeeDessert;

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(outLine);
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
}
 
//constructors
function Employee(employeeName, employeeId, employeeAge, employeeDessert) {
    this.employeeName = employeeName,
    this.employeeId = employeeId,
    this.employeeAge = employeeAge,
    this.employeeDessert = employeeDessert
}

function VacationResort(resortName, resortAddress, employee) {
    this.resortName = resortName,
    this.resortAddress = resortAddress,
    this.employee = employee
}
