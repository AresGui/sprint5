
async function firstFunction() {
    const weatherForecast = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.16&hourly=temperature_2m,precipitation&current_weather=true&forecast_days=1', {
        headers: {
            'Accept': 'application/json'
        }
    })

    const forecast = await weatherForecast.json();
    const getTemperature = forecast["current_weather"].temperature;

    console.log(getTemperature);



    document.getElementById("weather").innerHTML = `${getTemperature} ºC`;
};

firstFunction();

//document.getElementById("weather").innerHTML = firstFunction();

const reportAcudits = [];
const face_frown = document.getElementById("face-frown");
const face_meh = document.getElementById("face-meh");
const face_smile = document.getElementById("face-smile");

const start_btn = document.getElementById("start-btn");
const next_joke = document.getElementById("next-joke");

let score;
let joke = "";


const apis = [
    'https://icanhazdadjoke.com/',
    'https://api.chucknorris.io/jokes/random'
];

async function newJoke() {
    const randomIndex = Math.floor(Math.random() * 2);
    const selectedEndpoint = apis[randomIndex];

    joke = await fetch(selectedEndpoint, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => response.json()).then(data => {

        if (data.value === undefined) {

            return data.joke;
        } else {

            return data.value;
        }
    })
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


