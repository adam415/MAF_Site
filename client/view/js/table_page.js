var Users;

function removeCell(index) {
    alert(index);
}

function createRemoveButton(index) {
    let but = document.createElement('a');

    but.setAttribute('class', 'link-text table__link-text');
    but.setAttribute('onClick', `removeCell(${index}); return false;`);
    but.innerText = 'remove';

    return but;
}

fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let user = data[i];
            
            let row = document.createElement('tr');

            let nameCell = document.createElement('td');
            let ageCell = document.createElement('td');
            let remCell = document.createElement('td');

            let remBut = createRemoveButton(i);

            nameCell.innerText = user.name;
            ageCell.innerText = user.age;
            remCell.appendChild(remBut);

            row.appendChild(nameCell);
            row.appendChild(ageCell);
            row.appendChild(remCell);

            userRows.appendChild(row);
        }


        /*data.forEach(user => {
            let row = document.createElement('tr');

            let nameCell = document.createElement('td');
            let ageCell = document.createElement('td');

            nameCell.innerText = user.name;
            ageCell.innerText = user.age;

            row.appendChild(nameCell);
            row.appendChild(ageCell);

            userRows.appendChild(row);
        });*/
    }).catch(err => {
        console.error(`An error occurred while querying users: ${err}`);
    });