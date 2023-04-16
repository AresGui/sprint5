
async function newJoke() {
    const acudit = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });
    const objAcudit = await acudit.json();
    console.log(objAcudit.joke);
}


