// const cards = [
//     {
//         name:
//         project:
//         date:
//         role:
//         tools:
//         short-desc:
//         blurb:
//     },
//     {
//         name:
//         project:
//         date:
//         role:
//         tools:
//         short-desc:
//         blurb:
//     },

// ]

/*  function to toggle what appears based on button pressed- 
    only allow one button to be pressed at a time- if one is on, 
    clicking the other should unclick the first one. Clicking on
    an active one should un-activate it.
    Toggle visibility by adding or removing a class using js.
    CSS file should address that tag

    Ideally want to columns, varying height of objects, read in 
    reverse chronological order from left to right, top to bottom.

    When you click on a card, it should expand to fit the width of
    the two columns, darken the background, and re-format with more 
    info. Start with no animation, then add. 




    How to make the modal enlarged box:
        Give each card an id. store the enlarged-info content in a hashmap.
        onclick of a card, find the corresponding content using the card's id,
        then use the content to create a dialog modal with the info. Onclick of modal 
        or outside the box, remove the modal from the DOM.
    
    How to organize the card-content: 
        Make an array of them. One of the init functions should iterate over
        all the cards in the array to add them to the DOM using inner HTML
*/

const projectsButton = document.getElementById("sort-projects-button");
const updatesButton = document.getElementById("sort-updates-button");

function init() {
    //loading cards
    projectsButton.addEventListener("click", sortByProjects);    
    updatesButton.addEventListener("click", sortByUpdates);
}

let sortingByUpdates = false;
let sortingByProjects = false;

const projects = document.getElementsByClassName("project");
const updates = document.getElementsByClassName("update");

function sortByProjects() {
    sortingByProjects = projectsButton.classList.toggle('active');
    for (let u of updates) {
        u.classList.toggle('inactive'); 
    }
    if (sortingByUpdates) {
        for (let p of projects) {
            p.classList.toggle('inactive');
        }
        sortingByUpdates = updatesButton.classList.toggle('active');
    } 
}

function sortByUpdates() {
    sortingByUpdates = updatesButton.classList.toggle('active');
    for (let p of projects) {
        p.classList.toggle('inactive'); 
    }
    if (sortingByProjects) {
        for (let u of updates) {
            u.classList.toggle('inactive');
        }
        sortingByProjects = projectsButton.classList.toggle('active');
    } 
}
