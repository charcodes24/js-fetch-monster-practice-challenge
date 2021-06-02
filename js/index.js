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
    .then(data => {
        data.forEach(element => {
            console.log(element.name)
        })
    })
}