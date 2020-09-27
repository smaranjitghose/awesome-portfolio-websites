/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Quiz App",
    cardImage: "assets/images/project-page/quiz.jpg",
    description:
      "A quiz app built using basic react.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Chess Engine",
    cardImage: "assets/images/project-page/chess.jpg",
    description:
      "A chess engine for a popular game dev engine.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Flappy Bird",
    cardImage: "assets/images/project-page/flappybird.png",
    description:
      "Flappy bird game built using React.js",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Exercise Tracker",
    cardImage: "assets/images/project-page/exercise.jpg",
    description:
      "Exercise tracker built using basic redux.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Recipe Ingredient Parser",
    cardImage: "assets/images/project-page/recipe.jpg",
    description:
      "Recipe Ingredient Parser built using JavaScript.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Poker Game",
    cardImage: "assets/images/project-page/poker.jpg",
    description:
      "Poker game built using typescript.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Personal Book Library",
    cardImage: "assets/images/project-page/book.png",
    description:
      "Personal book library app built using JavaScript.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Minesweeper Game",
    cardImage: "assets/images/project-page/minesweeper.jpg",
    description:
      "Minesweeper Game built using python Object Oriented Programming.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Battery Life Calculator",
    cardImage: "assets/images/project-page/battery.png",
    description:
      "Built battery life calculator using Python.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Movie Recommendation System",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description:
      "Movie Recommendation System built using Tensorflow.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Music Recommendation Engine",
    cardImage: "assets/images/project-page/music.jpg",
    description:
      "Music Recommendation Engine built using Python.",
    Previewlink: "",
    Githublink: "",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
