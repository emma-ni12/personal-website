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

let modalInfo = new Map();

modalInfo.set('1', 
    {
        project: true,
        title: "edX Course: Make Your Own App",
        image: "./sources/chatterapp1.png",
        altImage: 'screenshot of app',
        date: 'May 30, 2022',
        tools: 'HTML, CSS, JS',
        link: `<a href="https://emma-ni12.github.io/chatterapp/">GitHub Pages</a>`,
        desc: `&emsp; My main project of Summer 2022 is a recruitment portal for my project team at Cornell,
        CUAir. In order to contribute to that project and start working on it as soon as possible,
       I made it my goal to learn the basics of front-end web development within the first few weeks
        after finishing my spring semester. I relied primarily on free courses I found online, as well 
        as reading through documentation on MDN and w3Schools. 
       <br>
       &emsp; This TUM edX Course, "Make Your Own App", 
        was my first taste of HTML/CSS/JS and taught me the fundamentals of the three tools via a 
        project called ChatterApp: a mock messaging app that allows you to create different channels, 
       organize them by "favorited" and "not favorited", and send messages (with emoji capabilities!). 
       Working with HTML/CSS/JS on a tangible project, rather than isolated, short practice exercise, was
       incredibly helpful for my learning- I was able to see how different pieces of the code fit together, 
       wrestle with challenges as they appeared over the course of working on the project, and leave with
        a completed app that I could look back on and refer to when needed. Looking back on the project, I
        would definitely re-organize and tidy up the code if I were to work on it again. The course was a 
       great first stepping stone in learning front-end, setting up the foundation I needed to work on 
       several other online courses for JS, React, and TypeScript.`
    });

function expandCard(e) {
    
    const infoObj = modalInfo.get(e.target.id);
    // if (infoObj.project) {
    const modal = `
        <div class="modal project">
            <h5 class="card-title">${infoObj.title}</h5>
            <div class="modal-info">
                <div class="img-wrap modal-image"><img class="card-image" src="${infoObj.image}" alt="${infoObj.altImage}"></div>
                <p><strong>Date: </strong>${infoObj.date}</p>
                <p><strong>Tools: </strong>${infoObj.tools}</p>
                <p><strong>See It: </strong>${infoObj.link}</p>
                <p class="desc">
                    ${infoObj.desc}
                </p>
            </div>    
        </div>
    `;
    // }
    document.getElementById('modal-container').innerHTML = modal;
    showModal();
}

function showModal() {
    const newModal = document.getElementById('modal-container');
    newModal.style.display = "block";
    window.onclick = function(e) {
        if (e.target == newModal) {
            newModal.innerHTML = "";
            newModal.style.display = 'none';
        }

    }
}



/*what if, we just had two empty modals, one formatted for projects,
another for updates- and when we want to show the modal we just update the 
inner html for each value and then display it... */



const cards = document.getElementsByClassName('card-title');
for (let c of cards) {
    c.addEventListener("click", expandCard);
}

