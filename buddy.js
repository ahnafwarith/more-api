const loadData = () => {
    fetch('https://randomuser.me/api/?results=5000')
        .then(res => res.json())
        .then(data => sendData(data))
}
loadData();
const sendData = data => {
    const buddies = data.results;
    console.log(data.results);
    const buddiesDiv = document.getElementById('buddies')
    for (const buddy of buddies) {
        console.log(buddy.name.first)
        const p = document.createElement('p')
        p.innerText = `email: ${buddy.email}`
        buddiesDiv.appendChild(p)
    }
}