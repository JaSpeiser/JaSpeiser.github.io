window.onload = focusName;

const person = ['Larry', 'Curly', 'Moe'];
const salaries = [10, 100, 15];
const third = [1,1,2];

function displayResults() {
    let totalSalaries = 0;
    let topSalary = 0;

    for (let i = 0; i < salaries.length; i++) {
        totalSalaries = totalSalaries + salaries[i];
    }

    let avgSalary = totalSalaries / salaries.length;

    for (let i = 0; i < salaries.length; i++) {
        if (salaries[i] > topSalary) {
            topSalary = salaries[i];
        }
    }
    document.getElementById("resHead").innerHTML = ("Results");
    document.getElementById("avgSal").innerHTML = ('Average Salary: ' + avgSalary);
    document.getElementById("topSal").innerHTML = ('Highest Salary: ' + topSalary);
}


//https://stackoverflow.com/questions/64949448/how-to-create-a-table-from-an-array-using-javascript
function displaySalary() {
    let headers = ["Name", "Salary", "third"];
    let table = document.getElementById("results_table");
    table.innerHTML = "";

    for(let i = 0; i < person.length; i++) {
        let row = table.insertRow(i);
        row.insertCell(0).innerHTML = person[i];
        row.insertCell(1).innerHTML = salaries[i];
        row.insertCell(2).innerHTML = third[i];
    }

    let header = table.createTHead();
    let headerRow = header.insertRow(0);
    for(let i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }
    document.body.append(table);
}

function addSalary(name, pers) {
    let hasNumber = /\d/;
    let newName = document.getElementById("newName").value;
    let newSal = document.getElementById("newSal").value;
    if ((newName == '' || newSal == '') || hasNumber.test(newName)) {
        alert("Invalid entries. Please try again.");
    } else {
        person.push(newName);
        salaries.push(newSal);
        focusName();
    }

}

function focusName() {
    document.getElementById("newName").focus();
    document.getElementById("newName").select();
}

