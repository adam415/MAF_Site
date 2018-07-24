fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            let row = document.createElement('tr');

            let nameCell = document.createElement('td');
            let ageCell = document.createElement('td');

            nameCell.innerText = user.name;
            ageCell.innerText = user.age;

            row.appendChild(nameCell);
            row.appendChild(ageCell);

            userRows.appendChild(row);
        });
    }).catch(err => {
        console.error(`An error occurred while querying users: ${err}`);
    });