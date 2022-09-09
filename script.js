//Data
const grossData = {
  darkKnight: [
    "$1,081,153,097",
    "1081152097",
    "images/darkKnight.jpg",
    "darkKnight",
  ],
  interstellar: [
    "$701,729,206",
    "701729206",
    "images/interstellar.jpg",
    "interstellar",
  ],
  joker: ["$1,074,445,730", "1074445730", "images/joker.jpg", "joker"],

  spiritedAway: [
    "$274,925,095",
    "274925095",
    "images/spiritedAway.jpg",
    "spiritedAway",
  ],
  deadMansChest: [
    "$1,066,179,747",
    "1066179747",
    "images/deadMansChest.jpg",
    "deadMansChest",
  ],

  harryPotter: [
    "$1,022,290,019",
    "1022290019",
    "images/harryPotter.jpg",
    "harryPotter",
  ],

  avatar: ["$2,847,397,339", "2847397339", "images/avatar.jpg", "avatar"],
  frozen: ["$1,281,508,100", "1281508100", "images/frozen.jpg", "frozen"],
  skyfall: ["$1,108,569,499", "1108569499", "images/skyfall.jpg", "skyfall"],
  endgame: ["$2,797,501,328", "2797501328", "images/endgame.jpg", "endgame"],
  noWayHome: [
    "$1,901,232,550",
    "1901232550",
    "images/noWayHome.webp",
    "noWayHome",
  ],

  toyStory: ["$1,073,394,593", "1073394593", "images/toyStory.jpg", "toyStory"],

  aladdin: ["$1,050,693,953", "1050693953", "images/aladdin.jpg", "aladdin"],

  desolation: [
    "$958,366,855",
    "958366855",
    "images/desolation.jpg",
    "desolation",
  ],

  homealone: ["$476,684,675", "476684675", "images/homealone.jpg", "homealone"],

  jurrasicPark: [
    "$1,099,699,003",
    "1099699003",
    "images/jurrasicPark.jpg",
    "jurrasicPark",
  ],

  lionKing: ["$1,063,611,805", "1063611805", "images/lionKing.jpg", "lionKing"],

  mulan: ["$304,320,254", "304320254", "images/mulan.jpg", "mulan"],

  phantom: ["$1,027,082,707", "1027082707", "images/phantom.jpg", "phantom"],

  returnOfKinf: [
    "$1,146,436,214",
    "1146436214",
    "images/returnOfKinf.jpg",
    "returnOfKinf",
  ],

  schindler: ["$322,161,245", "322161245", "images/schindler.jpg", "schindler"],

  secretsOfDumbledor: [
    "$405,161,334",
    "405161334",
    "images/secretsOfDumbledor.jpg",
    "secretsOfDumbledor",
  ],

  spidermanSpiderverse: [
    "$375,540,831",
    "375540831",
    "images/spidermanSpiderverse.jpg",
    "spidermanSpiderverse",
  ],
};

const arrayDone = [];

//Element Selection
const footer = document.querySelector(".score-footer");

//IntroPage Elements
const introPage = document.querySelector(".intro-page");
const btnStart = document.querySelector(".btnStart");

//ContentsPage Elements
const contentsPage = document.querySelector(".contents-page");
const movieImage = document.querySelectorAll(".movie-image");
const btns = document.querySelectorAll(".buttons");
const btnHigh = document.querySelectorAll(".btnHigh");
const btnLow = document.querySelectorAll(".btnLow");
const btnNext = document.querySelectorAll(".nextButton");
const grossValue = document.querySelectorAll(".gross-value");
const grossNextContainer = document.querySelectorAll(".gross-next-container");
const correct = document.querySelector(".circle");
const wrong = document.querySelector(".cross");

//EndPage Elements
const endPage = document.querySelector(".end-page");
const scoreDisplay = document.querySelector(".score-display");
const btnAgain = document.querySelector(".btnAgain");

//SCORE
let score = 0;
let scoreTracker = document.querySelector(".scoreTracker");
scoreTracker.textContent = `Score: ${score}`;

//Get Random Key From Object
const getKey = function (object) {
  const arrayOfKey = Object.keys(object);
  return arrayOfKey[Math.floor(Math.random() * arrayOfKey.length)];
};

console.log(typeof getKey(grossData));

//Initialize Two Movies
const initialize = function () {
  let movie0 = getKey(grossData);
  while (arrayDone.includes(movie0)) {
    movie0 = getKey(grossData);
  }
  arrayDone.push(movie0);
  console.log(arrayDone);
  let movie1 = getKey(grossData);
  while (arrayDone.includes(movie1)) {
    movie1 = getKey(grossData);
    console.log("yes");
  }
  arrayDone.push(movie1);
  const srcImage0 = grossData[movie0][2];
  const srcImage1 = grossData[movie1][2];
  grossValue[0].setAttribute("data-target", grossData[movie0][1]);
  grossValue[1].setAttribute("data-target", grossData[movie1][1]);
  movieImage[0].src = srcImage0;
  movieImage[1].src = srcImage1;
  movieImage[0].alt = grossData[movie0][3];
  movieImage[1].alt = grossData[movie1][3];
  grossValue[0].textContent = grossData[movie0][0];
  footer.classList.remove("hidden");
};

//Transition of Pages
btnStart.addEventListener("click", function () {
  introPage.classList.add("hidden");
  initialize();
  contentsPage.classList.remove("hidden");
});

//Comparison Functions
btnHigh.forEach((button, i) => {
  button.addEventListener("click", function () {
    //HIDE BUTTONS
    btns[1].classList.add("hidden");
    //Display Stats and Next Button
    const speed = 200;

    const updateCount = () => {
      const target = +grossValue[1].getAttribute("data-target");
      const count = +grossValue[1].innerText;
      console.log(count);
      console.log(target);
      const inc = target / speed;
      console.log(inc);

      if (count < target) {
        grossValue[1].innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        console.log(movieImage[1].alt);
        grossValue[1].innerText = grossData[movieImage[1].alt][0];
      }
    };
    updateCount();
    grossNextContainer[1].classList.remove("hidden");
    const movie0 = +grossValue[0].getAttribute("data-target");
    const movie1 = +grossValue[1].getAttribute("data-target");
    if (movie1 > movie0) {
      //CASE WHEN CORRECT
      correct.classList.remove("hidden");
      score++;
      scoreTracker.textContent = `Score: ${score}`;
    } else {
      wrong.classList.remove("hidden");
      // //UPDATE SCORE
      scoreTracker.textContent = `Score: ${score}`;
    }
  });
});

btnLow.forEach((button, i) => {
  button.addEventListener("click", function () {
    //HIDE BUTTONS
    btns[1].classList.add("hidden");
    //Display Stats and Next Button
    const speed = 200;

    const updateCount = () => {
      const target = +grossValue[1].getAttribute("data-target");
      const count = +grossValue[1].innerText;
      console.log(count);
      console.log(target);
      const inc = target / speed;
      console.log(inc);

      if (count < target) {
        grossValue[1].innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        console.log(movieImage[1].alt);
        grossValue[1].innerText = grossData[movieImage[1].alt][0];
      }
    };
    updateCount();
    grossNextContainer[1].classList.remove("hidden");
    const movie0 = +grossValue[0].getAttribute("data-target");
    const movie1 = +grossValue[1].getAttribute("data-target");
    if (movie1 < movie0) {
      //CASE WHEN CORRECT
      correct.classList.remove("hidden");
      score++;
      scoreTracker.textContent = `Score: ${score}`;
    } else {
      wrong.classList.remove("hidden");
      // //UPDATE SCORE
      score = 0;
      scoreTracker.textContent = `Score: ${score}`;
    }
  });
});

btnNext.forEach((button, i) => {
  button.addEventListener("click", function () {
    console.log(arrayDone);
    if (wrong.classList.contains("hidden")) {
      //Correct
      correct.classList.add("hidden");
      console.log("correct");
      movieImage[0].src = movieImage[1].src;
      grossValue[0].setAttribute(
        "data-target",
        grossValue[1].getAttribute("data-target")
      );
      grossValue[0].textContent = grossValue[1].textContent;
      movieImage[0].alt = movieImage[1].alt;

      let movie1 = getKey(grossData);
      while (arrayDone.includes(movie1)) {
        movie1 = getKey(grossData);
        console.log("yes");
      }
      arrayDone.push(movie1);
      const srcImage1 = grossData[movie1][2];
      grossValue[1].setAttribute("data-target", grossData[movie1][1]);
      movieImage[1].src = srcImage1;
      movieImage[1].alt = grossData[movie1][3];
      grossValue[1].textContent = 0;
      grossNextContainer[1].classList.add("hidden");
      btns[1].classList.remove("hidden");
    } else {
      //Wrong
      console.log("wrong");
      grossValue[1].textContent = 0;
      grossNextContainer[1].classList.add("hidden");
      btns[1].classList.remove("hidden");
      wrong.classList.add("hidden");
      contentsPage.classList.add("hidden");
      endPage.classList.remove("hidden");
      footer.classList.add("hidden");
      scoreDisplay.textContent = `Your score: ${score}`;
    }
  });
});

btnAgain.addEventListener("click", function () {
  score = 0;
  endPage.classList.add("hidden");
  initialize();
  contentsPage.classList.remove("hidden");
});
