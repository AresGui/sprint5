
const reportAcudits = [];
const face_frown = document.getElementById("face-frown");
const face_meh = document.getElementById("face-meh");
const face_smile = document.getElementById("face-smile");

const start_btn = document.getElementById("start-btn");
const next_joke = document.getElementById("next-joke");

let score;
let joke = "";

async function newJoke() {
    const acudit = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });
    const objAcudit = await acudit.json();
    joke = objAcudit.joke;
    console.log(joke);

    document.getElementById("text").innerHTML = joke;



    //Mostrar botones
    face_frown.style.display = "block";
    face_meh.style.display = "block";
    face_smile.style.display = "block";

    score = 0;
}

function rateJoke() {
    //date
    const date = (new Date()).toISOString();

    //score
    score = findOutScore();

    //adding the new object into the array (joke, score, date)
    const newObject = { joke, score, date };

    if (newObject.joke !== "") {
        reportAcudits.push(newObject);
    }

    console.log(reportAcudits);

    newJoke();
}

function findOutScore() {

    face_frown.addEventListener('click', () => {
        score = 1;
    })

    face_meh.addEventListener('click', () => {
        score = 2;
    })

    face_smile.addEventListener('click', () => {
        score = 3;
    })

    return score;
}


