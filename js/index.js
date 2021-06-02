//global variables for HTML tags
const submissionForm = document.getElementById('create-monster');
const monsterContainer = document.getElementById('monster-container');
const forwardButton = document.getElementById('forward');
const backButton = document.getElementById('back');

//variable for API
const monstersAPI = 'http://localhost:3000/monsters';


//fetch request
function getMonsters() {
    return fetch(monstersAPI)
    .then(res => res.json())
    .then(data => displayData(data));
}

//function to display data
function displayData(data) {
    for (let i = 0; i <= 49; i++) {
        //create div for each monster element w id = id#
        const newDiv = document.createElement('div');
        //create H2 for name & set innerText
        const name = document.createElement('h2');
        name.innerText = data[i].name;
        console.log(name)
        //create H4 for age & set innerText
        const age = document.createElement('h4');
        age.innerText = data[i].age;
        //create p for description
        const desc = document.createElement('p');
        desc.innerText = data[i].description;
        //append to div
        newDiv.append(name, age, desc);
        monsterContainer.append(newDiv);
        
        }
    }
   

