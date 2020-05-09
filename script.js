var ul = document.getElementById("ul");
var btn = document.getElementById("button");
var scoreCard = document.getElementById("scoreCard");
var quizBox = document.getElementById("questionBox");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");

var app = {
  questions: [
      {
        q: "What does the letter H stand for in HNG ?",
        options: ["Hotel", "Home", "House", "Hire"],
        answer: "Hotel",
      },
      {
        q: "How many hours are there in a day ?",
        options: [20, 23, 24, 10],
        answer: 24,
      },
    {
      q: "Nigeria has how many states ?",
      options: [36, 24, 16, 40],
      answer: 36,
    },
    {
      q: "How many fngers are on one hand ?",
      options: [0, 8, 5, 9],
      answer: 5,
    },
    {
      q: "How many president(s) does nigeria have ?",
      options: [2, 1, 0, 3],
      answer: 1,
    },
  ],

  index: 0,
  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
      op1.innerHTML = this.questions[this.index].options[0];
      op2.innerHTML = this.questions[this.index].options[1];
      op3.innerHTML = this.questions[this.index].options[2];
      op4.innerHTML = this.questions[this.index].options[3];
      this.scoreCard();
    } else {
      quizBox.innerHTML = "Quiz Over......!!!";
      op1.style.display = "none";
      op2.style.display = "none";
      op3.style.display = "none";
      op4.style.display = "none";
      btn.style.display = "none";
    }
  },

  next: function () {
    this.index++;
    this.load();
  },

  check: function (ele) {
    var id = ele.id.split("");
    console.log(ele.innerText);
    console.log(this.questions[this.index].answer);
    if (ele.innerText == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      ele.innerText = `Nice! ${ele.innerText} was correct`;
      this.scoreCard();
    } else {
      ele.className = "wrong";
      ele.innerText = `Ooops! ${ele.innerText} was the wrong choice`;
    }
  },

  notClickAble: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },

  clickAble: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = " ";
    }
  },

  score: 0,
  scoreCard: function () {
    scoreCard.innerHTML = `${this.score}/ ${this.questions.length}`;
  },
};

window.onload = app.load();
function button(ele) {
  app.check(ele);
  app.notClickAble();
}

function next() {
  app.next();
  app.clickAble();
}