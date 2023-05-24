async function fetchData() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    // Fetch location data here based on latitude and longitude.

    // Sample data
    const data = {
        latitude,
        longitude,
        country: 'Dominican Republic',
        countryCode: 'DO',
        province: 'Peravia',
        city: 'Bani',
        postalCode: 'N/A',
        elevation: 'N/A',
        timeZone: 'America/Santo_Domingo'
    };

    const table = document.getElementById('resultsTable');
    let html = '<thead><tr>';
    for (let key in data) {
        html += `<th>${key}</th>`;
    }
    html += '</tr></thead><tbody><tr>';
    for (let key in data) {
        html += `<td>${data[key]}</td>`;
    }
    html += '</tr></tbody>';
    table.innerHTML = html;
}

function downloadCSV() {
    let csv = [];
    let rows = document.querySelectorAll('table tr');

    for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll('td, th');
        for (let j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }
        csv.push(row.join(','));
    }

    let csvContent = "data:text/csv;charset=utf-8," + csv.join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
}
