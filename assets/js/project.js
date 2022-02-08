AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Currency Converter",
    cardImage: "assets/images/project-page/A.jpg",
    description: "A currency converter app made using API",
    tagimg: "",
    Previewlink: "https://aimanaisha.github.io/currency-converter/",
    Githublink: "https://github.com/aimanaisha/currency-converter",
  },
  {
    title: "Current Weather",
    cardImage: "assets/images/project-page/B.png",
    description: "A weather predictor made by fetching API",
    tagimg: "",
    Previewlink: "https://aimanaisha.github.io/current-weather/",
    Githublink: "https://github.com/aimanaisha/current-weather",
  },
  {
<<<<<<< HEAD
    title: "Expense Tracker",
    cardImage: "assets/images/project-page/C.png",
    description: "A code-along React project for tracking expenses",
    tagimg: "",
=======
    title: "Recipe Ingredient Parser",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    tagimg:
      "data:image/png;base64,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",
>>>>>>> 046963f9318358c0204fbec8491a8e5a8172befe
    Previewlink: "",
    Githublink: "https://github.com/aimanaisha/expense-tracker-app",
  },
  {
    title: "To-Do List",
    cardImage: "assets/images/project-page/D.png",
    description: "An app made using Js for making a to do list",
    tagimg: "",
    Previewlink: "https://aimanaisha.github.io/to-do-list/",
    Githublink: "https://aimanaisha.github.io/product-design/",
  },
  {
    title: "Product Design",
    cardImage: "assets/images/project-page/E.jpg",
    description: "A landing page for a product made using basic HTML and CSS",
    tagimg: "",
    Previewlink: "https://aimanaisha.github.io/product-design/",
    Githublink: "https://github.com/aimanaisha/product-design",
  },
  {
<<<<<<< HEAD
    title: "Portfolio",
    cardImage: "assets/images/project-page/F.png",
    description: "Portfolio website made using basic HTML and CSS",
    tagimg: "",
    Previewlink: "https://aimanaisha.github.io/portfolio/",
    Githublink: "https://github.com/aimanaisha/portfolio",
=======
    title: "Personal Book Library",
    cardImage: "assets/images/project-page/book.png",
    description: "Personal book library app built using JavaScript.",
    tagimg:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX33x4AAAD/5h+OgBH64h7/6B94bA5dVAv64R7NuRnXwhr23h5mXAzeyBt7bw9fVgtJQgnp0xy5pxZyZw6/rBfEsRiWhxJRSQqpmBTw2R2FeBDo0RyhkROcjRPUvxqThRI6NAcdGgOyoRWLfhE0LwYSEAJMRQlWTgo/OQgwKwYYFgNrYQ0hHgQ4MwcxLQYsJwUKCQA6yu78AAAG50lEQVR4nO2caVvbOhBGbUWiymIg+x6I2xAoofD/f921gZQknrElx45E73u+9cFxdWyto5GDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwaCmE2iOElK4LRPBVwAOMCqqFktHgrj/+s16vd6+P26tGvAoSzbqLbIdYbn9k2E6KSylVtNiGWR6WLSH0BUpuirgiShn+FEU/a0/uqR++sxl1lT+OtGEj31C071i9D67n6kIChZQwlGJZ4Jcym3rSHu0NRfTLQDCh6cdrtDZUEzO/9C5eKNoa0tczdKQHHY6lobixEAzDsXavaGcoOlaCiWLRsFM/Vobq2lIwqajO26KNoYitBZPJg2tFC0M9LyEYhgPHFdXCUN2WMgy7bnsbc0PZKycYjt3WUwvDdUnDMHZaT40NS7/ChKkDsb8YG6rH0oKzb2GoI97gqT+7+9nn5uO/Wt+jHYoRI7CZdJVIUdMe1dkuXUc1jA2ZoeI6+ApZSJVpqw9z59M2U8MpLbg8roFievwgYg+iGYaGskkKPp82MS0fvv7amTp/gYG5Ib3unWZekW6v938cePACA2NDMaMuuyZ6yX2nex18rziN6FOXDSgJsUj+svMkSBMYGyoq+BtGZDVM5gYNj8L7poY/qMvmpKFurbx5gYG5IRm+oA0DD4IzB5i2w2fqsqFXKgymhmSEZuHDeFfEWaPFo0/tjcPUkN6qaPrTZbKYzmkGpOEu8L8lGhpyy8OxRwMfg/EanzYMX9wvjwowNVRjRjHsme36O8N4Bczvio5XXjtWEacJOy2PHc1jbU85iuF46K2jsaEo2Pt9igOvkkz+Yh7zZiI1h7/q+vgizQ1FUYZJQqfpOnaYxWb/sNgwGR9j4dkAaWFouEG6WbS9crR5h8o0TaHhRRjxE6t9/PbGUDEcBd44WhnKvGH/hNiXscMy22RornjvSTzKNmPIQjHst30YOqyzvugNDJrN0IPXaJ25J6LfFo7X7jPb7LMvddsmt+3WeZppmRxhiwTMpKZ2v8ke8PGP5uyKnyByq1jKMNBqYNEameD/hShnmAz+0iTZ+4NNdiP1gpQ1TBP2ufSMDLcup3DlDZPf6sXOTNFlCuY5hsmvZc8sVarlrrc5zzDNoWmRG28nPLqrp+capo7dRrEiueV/Ec43TA+x6UlurDHh3llLrMIwvY0YFmQQO9uIq8gwrayr3KMKfVcvsTLD9xOJeXPyduVlN6NCw3Qyt+JPfbmqppUapif32H619D3PpGLDZGnFxTm2jhpi5YaBWDGK/4whGxt3lM9egyG3I75y09XUYSjppugoR8zaUOriga1NGsb1vkPu+dGpsXecoVbN16vCLoNO7Df4jEF5pODCQXRa5YgxVPP08sKxm96k4m5aBWp1HzIvUTxQhaEftwg+hvO3ov+PztWsz1C009TJO7puCaosYY8wlKq3j68VHX2lc6aXNRnK/fBEJmXrLmlI1EPVOohXjPIV9Zt5xTgbFe1bPXnQkTlzl3kaYnrc58Z5iprevRnWYSjaB5mvE6JUdEcTnlwl5eL0ijxF5jhtq/rxUKrj+VM24MUcXn49ulCr4Wv2mgWrqJhZW+V+BxV0T2YfiHmFRz2JmtPr2r6ma51idhjXVc+8ZZBNzV6fJINym0iHGer6J31Ncjcql02yG1NX1XalWvXIvInDZFCpuK2HwzkyPbZ9sG2qo3wELVVEHj15/68r7Wh0xG1/PQyCzyOf7ZiNOBw+bZ2bz7ZeRvr9G19SCiW6cc6uW7WLJ8FWrYTb2WjU6OdE44/rE3s+9pPfD7PlJI4njZuXvMtuKm6GxYmEOZyM98Lwm0L5VD0aiswAZs7upCyyVYHgrvIpmzDc9yLInPU553HtqbafSWEO7pqQvZlxyh5LHXtPijypZAB1XEv/OdOwlv1Dkdu1sbxSZdFd46xEknq++sUsjIpYkfNjWe7rO5/UtY9fqg9kFsqJ4rq04K62XAyrRMIP+G9zyWnpj5vUmBVlrXif87A1HZYr5KnWzDZ2D4HmsZ1bnazy2faMaz6iKLsWdeumKFVSzMkQUx5cu64OTZ/gpVgWF0Z/xduMeLnI13eyS326MJFRYWzy2cLJhU7QSDUsHPzfYuPCCB0XpZZ83HJ5wZMlUjTZpXfKS6xtCiPFqvADip2hvOyutlbdCVNZH+8i6yNnUojmjF02bjqTqYNTbFqq6XD0fLSo2mxnva4qd/RDCtUdLvunj+3HLG5pd4f03j+gPm2tmoNer9maJ/8QZ+XS6/R+QbRqDpMbDpI7qnPvWA1avlPZF0iS++lq7wgAAAAAAAAA4P/Ff/0ZVyq/bZRoAAAAAElFTkSuQmCC",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Minesweeper Game",
    cardImage: "assets/images/project-page/minesweeper.jpg",
    description:
      "Minesweeper Game built using python Object Oriented Programming.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Battery Life Calculator",
    cardImage: "assets/images/project-page/battery.png",
    description: "Built battery life calculator using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Movie Recommendation System",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Tensorflow.",
    tagimg:
      "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Music Recommendation Engine",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
>>>>>>> 046963f9318358c0204fbec8491a8e5a8172befe
  },
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, tags, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
