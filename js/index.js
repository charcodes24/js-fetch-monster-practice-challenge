//global variables for HTML tags
const submissionForm = document.getElementById('create-monster');
const monsterContainer = document.getElementById('monster-container');
const forwardButton = document.getElementById('forward');
const backButton = document.getElementById('back');
let pageNumber = 1;



//fetch request
function getMonsters() {
    monsterContainer.innerHTML = '';
    return fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNumber}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.map(element => displayData(element))
    })
    .catch(error => console.log(error))
}

//function to display data
function displayData(element) {
        //create div for each monster element w id = id#
            const newDiv = document.createElement('div');
            //create H2 for name & set innerText
            const name = document.createElement('h2');
            name.innerText = element.name;
            //create H4 for age & set innerText
            const age = document.createElement('h4');
            age.innerText = element.age;
            //create p for description
            const desc = document.createElement('p');
            desc.innerText = element.description;
            //append to div
            newDiv.append(name, age, desc);
            monsterContainer.append(newDiv);
}
getMonsters();

//assign form HTML tags to variables
const form = document.forms[0];
const inputName = form[0];
const inputAge = form[1];
const inputDesc = form[2];

//eventlistener for form
form.addEventListener('submit', createMonster)
//function to createMonster 
function createMonster(e) {
    e.preventDefault();
    //configuration Object body, header
    const configObject = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({
            'name': inputName.value, 
            'age': inputAge.value, 
            'description': inputDesc.value 
        })
    }
    console.log(configObject);
    //send POST request
    fetch(monstersAPI, configObject)
    .then(res => res.json())
    .then(data => displayData(data))
    .catch(error => console.log(error))
}

//function to increment page number
function forward() {
    pageNumber++;
    console.log(pageNumber);
}

//function to load next 50 monters
function next50Monsters() {
    forward();
    getMonsters();
}
//eventListener
forwardButton.addEventListener('click', next50Monsters);

//function to decrease page number
function decrease() {
    if (pageNumber > 1) {
        pageNumber--;
    }
};

function last50Monsters() {
    decrease();
    getMonsters();
}

backButton.addEventListener('click', last50Monsters)

