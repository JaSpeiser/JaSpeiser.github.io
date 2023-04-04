window.onload = displaySignup;

const names = ['Phoenix Chassin', 'Jake Speiser', 'John Doe'];
const emails = ['phx319@gmail.com', 'DiceMaster74@gmail.com', 'JohnDoe@example.com'];
const phones = ['704-903-6049', '704-877-8897', '704-603-5020'];

function displaySignup() {
    let headers = ["Name", "Email", "Phone"];
    let table = document.getElementById("results_table");
    table.innerHTML = "";

    for(let i = 0; i < names.length; i++) {
        let row = table.insertRow(i);
        row.insertCell(0).innerHTML = names[i];
        row.insertCell(1).innerHTML = emails[i];
        row.insertCell(2).innerHTML = phones[i];
    }

    let header = table.createTHead();
    let headerRow = header.insertRow(0);
    for(let i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }
    document.body.append(table);
}

function addPerson(name, email, phone) {
    let nam = document.getElementById('newName').value;
    let emai = document.getElementById('newEmail').value;
    let phon = document.getElementById('newPhone').value;

    if (names.includes(nam) == true || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emai) == false) || (/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(phon) == false) || (nam == '')) {

    } else {
        names.push(nam);
        emails.push(emai);
        phones.push(phon);
    }


    displaySignup();
}