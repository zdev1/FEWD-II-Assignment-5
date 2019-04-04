/*eslint-env browser*/

var command;
var employeeList = [
        "John Zimmerman",
        "Bob Smith",
        "Fred Moore",
        "Joe Bob",
        "Frank Mann"];

function showEmployees() {
    "use strict";
    clearTable();
    for (var i = 0; i < checkedInArray.length; i++) {
        document.getElementById("checkedIn").innerHTML += "<tr><td>" + checkedInArray[i][0] + "</td> <td>" + checkedInArray[i][1] + "</td> <td>" + checkedInArray[i][2] + "</td><td>" + checkedInArray[i][3] + "</td><td>" + checkedInArray[i][4] + "</td></tr>";
    }
}
document.getElementById("checkIn").addEventListener("click",
    function update() {
        "use strict";
        var time = new Date();
        var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        if (document.getElementById("nameTyped").value === "" || document.getElementById("titleTyped").value === "" || document.getElementById("extensionTyped").value === "") {
            window.alert("You need to fill out all three forms");
        } else {
            var name = document.getElementById("nameTyped").value;
            var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
            employeeList.push([nameCapitalized, document.getElementById("titleTyped").value, document.getElementById("extensionTyped").value, "<input onclick='deleteEmployee(this)' type='button' class='tableButton' value='Return'>"]);

            showEmployees();

            document.getElementById("nameTyped").value = "";
            document.getElementById("titleTyped").value = "";
            document.getElementById("extensionTyped").value = ""; }
}
);

function addEmployees(arg) {
    "use strict";
    var employee = window.prompt("Enter the employee\'s name");
    arg.push(employee);
    window.console.log(employee + " was added.\n");
}
function deleteEmployees(arg) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employee number to delete"), 10);
    if (num < 1 || num > arg.length) {
        window.alert("Invalid employee number");
    } else {
        delete arg[num - 1];
    }
}
function main() {
    "use strict";
    
    employeeList = [
        "Zak Ruvalcaba",
        "Sally Smith",
        "Fred Franklin",
        "John Smith",
        "Jane Caruthers"];
    
        if (command !== null) {
            if (command == "show") {
                showEmployees(employeeList);
            } else if (command == "add") {
                addEmployees(employeeList);
            } else if (command == "del") {
                deleteEmployees(employeeList);

            } else {
                window.console.log("That is not a valid command");
            }
        }
    }
