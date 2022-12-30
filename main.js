// var botChoices = ["rock", "paper", "scissors"];
// var botRandomChoice = botChoices[Math.floor(Math.random() * 3)];

// var rock = document.getElementById("rock");
// var paper = document.getElementById("paper");
// var scissors = document.getElementById("scissors");
// var statuss = document.getElementById("status");
// var imgsContainer = document.getElementById("imgs-container");
// var myPick = document.getElementById("myPick");
// var botPick = document.getElementByelement-nameId("botPick");

// rock.onclick = function () {
//   // imgsContainer.style.display = "none";
//   // document.getElementById("results").style.display = "flex";
//   botPick.style.transform = "scaleX(-1)";
//   // myPick.setAttribute("src", "imgs/Rock.png");
//   myPick.style.width = "24rem";

//   /**********/
//   if (botRandomChoice == "paper") {
//     statuss.innerHTML = "YOU LOST!";
//     // botPick.setAttribute("src", "imgs/paper.png");
//     // botPick.style.width = "16.6rem";

//     scissors.style.display = "none";
//     document.getElementById("test").style.display = "none";
//     document.getElementById("scissorsName").style.display = "none";
//     imgsContainer.style.gridTemplateColumns = "1fr 1fr";
//     /**********/
//   } else if (botRandomChoice == "scissors") {
//     statuss.innerHTML = "YOU WON!";
//     botPick.setAttribute("src", "imgs/scissors.png");
//     botPick.style.width = "20rem";
//     /**********/
//   } else {
//     statuss.innerHTML = "YOU TIED!";
//     botPick.setAttribute("src", "imgs/Rock.png");
//     botPick.style.width = "24rem";
//   }
// };

// paper.onclick = function () {
//   imgsContainer.style.display = "none";
//   document.getElementById("results").style.display = "flex";
//   botPick.style.transform = "scaleX(-1)";
//   myPick.setAttribute("src", "imgs/paper.png");
//   myPick.style.width = "16.6rem";

//   /**********/
//   if (botRandomChoice == "scissors") {
//     statuss.innerHTML = "YOU LOST!";
//     botPick.setAttribute("src", "imgs/scissors.png");
//     botPick.style.width = "20rem";
//     /**********/
//   } else if (botRandomChoice == "rock") {
//     statuss.innerHTML = "YOU WON!";
//     botPick.setAttribute("src", "imgs/Rock.png");
//     botPick.style.width = "24rem";
//     /**********/
//   } else {
//     statuss.innerHTML = "YOU TIED!";
//     botPick.setAttribute("src", "imgs/paper.png");
//     botPick.style.width = "16.6rem";
//   }
// };

// scissors.onclick = function () {
//   imgsContainer.style.display = "none";
//   document.getElementById("results").style.display = "flex";
//   botPick.style.transform = "scaleX(-1)";
//   myPick.setAttribute("src", "imgs/scissors.png");
//   myPick.style.width = "20rem";
//   /**********/
//   if (botRandomChoice == "rock") {
//     statuss.innerHTML = "YOU LOST!";
//     botPick.setAttribute("src", "imgs/Rock.png");
//     botPick.style.width = "24rem";
//     /**********/
//   } else if (botRandomChoice == "paper") {
//     statuss.innerHTML = "YOU WON!";
//     botPick.setAttribute("src", "imgs/paper.png");
//     botPick.style.width = "16.6rem";

//     /**********/
//   } else {
//     statuss.innerHTML = "YOU TIED!";
//     botPick.setAttribute("src", "imgs/scissors.png");
//     botPick.style.width = "20rem";
//   }
// };

const rpcGame = () => {
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");
  const myChoices = [rock, paper, scissors];
  const botChoices = ["rock", "paper", "scissors"];

  const imgsContainer = document.getElementById("imgs-container");
  const myPic = document.getElementById("test1");
  const botPic = document.getElementById("test2");
  const myPickName = document.getElementById("myPickName");
  const botPickName = document.getElementById("botPickName");

  const botRandomPick = botChoices[Math.floor(Math.random() * 3)];

  myChoices.forEach((choice) => {
    choice.addEventListener("click", function () {
      conditions(this.id, botRandomPick);
      imgsContainer.style.display = "none";
      myPic.src = `imgs/${this.id}.png`;
      botPic.src = `imgs/${botRandomPick}.png`;
      myPickName.innerHTML = this.id;
      botPickName.innerHTML = botRandomPick;

      const myPickContainer = document.querySelector(".myPickContainer");
      const botPickContainer = document.querySelector(".botPickContainer");
      /**********MEDIA QUERY FOR MOBILE DEVICES**********/
      function myFunction(mediaQ) {
        if (mediaQ.matches) {
          myPickContainer.style.gap = "5px";
          myPickContainer.style.top = "-300px";
          myPickContainer.style.left = "38%";
          myPickContainer.style.animation = "toBottom 0.8s ease-out forwards";
          botPickContainer.style.gap = "5px";
          botPickContainer.style.bottom = "-400px";
          botPickContainer.style.right = "36%";
          botPickContainer.style.animation = "toTop 0.8s ease-out forwards";

          if (myPickName.innerHTML == "paper") {
            myPic.style.width = "10rem";
            myPickContainer.style.left = "40%";
          }
          if (botRandomPick == "paper") {
            botPic.style.width = "10rem";
            botPickContainer.style.left = "40%";
          }
        } else {
          document.querySelector(".myPickContainer").style.animation =
            "toRight 0.8s ease-out forwards";

          document.querySelector(".botPickContainer").style.animation =
            "toLeft 0.8s ease-out forwards";
        }
      }
      var mediaQ = window.matchMedia("(max-width: 950px)");
      myFunction(mediaQ);
      mediaQ.addListener(myFunction);
    });
  });
};

const conditions = (me, bot) => {
  const status = document.querySelector(".header");
  me = me.toLowerCase();
  bot = bot.toLowerCase();
  if (me == bot) {
    status.innerHTML = "YOU TIED!";
  } else if (me == "rock") {
    if (bot == "paper") {
      status.innerHTML = "YOU LOST!";
    } else {
      status.innerHTML = "YOU WON!";
    }
  } else if (me == "scissors") {
    if (bot == "rock") {
      status.innerHTML = "YOU LOST!";
    } else {
      status.innerHTML = "YOU WON!";
    }
  } else if (me == "paper") {
    if (bot == "scissors") {
      status.innerHTML = "YOU LOST!";
    } else {
      status.innerHTML = "YOU WON!";
    }
  }
  statusColor(status);
};

const statusColor = (x) => {
  if (x.innerHTML == "YOU WON!") {
    x.style.color = "green";
  } else if (x.innerHTML == "YOU LOST!") {
    x.style.color = "red";
  } else {
    x.style.color = "rgb(255, 217, 0)";
  }
};
rpcGame();
