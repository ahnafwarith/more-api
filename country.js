const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => sendData(data))
}
loadCountries();
const sendData = (receivedData) => {
    /* for (const country of receivedData) {
        console.log(country)
    } */
    const countries = document.getElementById('countries')
    receivedData.forEach(country => {
        console.log(country)
        const countryName = document.createElement('h3');
        countryName.innerText = country;
        countries.appendChild(countryName)
    });
}
