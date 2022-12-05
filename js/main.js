console.log('Starting up');

const GITHUB_URL = `https://aviadmalikan.github.io/`
const gProjects = [
    {
        id: "sokoban",
        name: "Sokoban",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: GITHUB_URL + "Sokoban/",
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
        title: "Collect those ball",
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
        name: "Booking",
        title: "Hotel ? No its book shop",
        desc: "i born with a reading list i will never finish",
        url: GITHUB_URL + "Task-web/",
        publishedAt: 1669795200,
        labels: ["Matrixes", "keyboard events"],
    },
]


// $().click(openModal())

renderPortfolio()

function renderPortfolio() {
    console.log('HEY')

    var strHTMLs = gProjects.map(proj => `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`)
      console.log('strHTMLs: ', strHTMLs)
      
    var strHTML = strHTMLs.join('')
    $('.portfolio-container').html(strHTML)
}