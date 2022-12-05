console.log('Starting up');

const GITHUB_URL = `https://aviadmalikan.github.io/`
const gProjects = [
    {

        id: "sokoban",
        name: "Sokoban",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: GITHUB_URL + "Sokobon/",
        publishedAt: 1668067200,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "space-invaders",
        name: "Space Invaders",
        title: "Kill them all",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: GITHUB_URL + "Space-Invaders/",
        publishedAt: 1669276800,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "pacman",
        name: "Pacman",
        title: "Give me power!",
        desc: `Why doesn't Pacman use Instagram? He doesn't like followers`,
        url: GITHUB_URL + "Ball-Board/",
        publishedAt: 1668931200,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "ball-board",
        name: "Ball Board",
        title: "Collect those ball",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: GITHUB_URL + "Ball-Board/",
        publishedAt: 1668931200,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "todo",
        name: "Tasking web",
        title: "I don't remember what to write..",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: GITHUB_URL + "Task-web/",
        publishedAt: 1669795200,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "books-shop",
        name: "Book shop",
        title: "Know booking? so not. just regular shop",
        desc: "i born with a reading list i will never finish",
        url: GITHUB_URL + "Book-shop/",
        publishedAt: 1669795200,
        labels: ["Matrixes", "keyboard events"],
    },
]


$(document).ready(init)
$('.submit-form').click(onContact)

function init() {
    renderPortfolio()
}

function renderPortfolio() {
    var strHTMLs = gProjects.map(proj => `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="openModal('${proj.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="h-100 w-100" src="img/portfolio/${proj.id}.png" alt="">
        </a>
        <div class="portfolio-caption ${proj.id}">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`)

    var strHTML = strHTMLs.join('')
    $('.portfolio-container').html(strHTML)
}

function openModal(projId) {
    // console.log('projId: ', projId)
    var proj = gProjects.find(project => project.id === projId)
    var time = new Date(proj.publishedAt)

    var day = time.getDay()
    var month = time.getMonth() + 1
    var year = time.getFullYear()

    var strHTML = `
    <h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.png" alt="">
    <p>${proj.desc}</p>
    <ul class="list-inline">
    <li>Date: ${day}/${month}/${year}</li>
    <li>Url: <a href="${proj.url}"> Click here to see</a></li>
    <li>Category :  ${proj.labels}</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>
    </div>`;
    $('.modal-body').html(strHTML)
}


function onContact(ev) {
    ev.preventDefault()

    // var email = $('#email').val()
    var email = `aviad879@gmail.com`
    var subject = $('#subject').val()
    var massage = $('#massage').val()

    var url = `https://mail.google.com/mail/?view=cm&fs=1&
    to=${email}&su=${subject}&body=${massage}`

    $('#subject').val('')
    $('#massage').val('')
    $('#email').val('')

    window.open(url, '_blank')

}