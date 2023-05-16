const levels1 = [
    {
        question1 : 'What is Capital of Morocco?',
        a : 'Agadir',
        b : 'Rabat',
        c : 'CasaBlanca',
    },
    {
        question1 : 'What is Capital of United State?',
        a : 'Washington',
        b : 'New York',
        c : 'California',
    },
    {
        question1 : 'What is Capital of Spain?',
        a : 'Barsalona',
        b : 'Seville',
        c : 'Madrid',
    },
    {
        question1 : 'What is Capital of France?',
        a : 'Paris',
        b : 'Marseille',
        c : 'lyon',
    },
    {
        question1 : 'What is Capital of Canada?',
        a : 'Toronto',
        b : 'Montreal',
        c : 'Vancouver',
    },
];

let start = document.querySelector('#start');
let next = document.querySelector('#next');
let question = document.querySelector('#question');
let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');
let answer3 = document.querySelector('.answer3');
let level = document.querySelector('#level');
let fiveQuestion = document.querySelector('#fiveQuestion');
let ans1 = document.querySelector('#ans1');
let ans2 = document.querySelector('#ans2');
let ans3 = document.querySelector('#ans3');


function startQuiz() {
    document.querySelector(".level1").style.display = "flex";
    document.querySelector(".copyright").style.display = "flex";
    document.querySelector("#startButton").style.display = "none";
};
function fistQuestion(q1, a, b, c){
    question.innerHTML = q1;
    answer1.innerHTML = a;
    answer2.innerHTML = b;
    answer3.innerHTML = c;
}
fistQuestion(levels1[0].question1 ,levels1[0].a ,levels1[0].b ,levels1[0].c);

let i = 1;
function nextQuestion(){
    question.innerHTML = levels1[i].question1;
    answer1.innerHTML = levels1[i].a;
    answer2.innerHTML = levels1[i].b;
    answer3.innerHTML = levels1[i].c;

    i++;

    if (i == 5) {
        document.querySelector(".level1").style.display = "none";
        document.querySelector(".copyright").style.display = "none";
        document.querySelector("#startButton").style.display = "none";
        document.querySelector("#nextLevelBtn").style.display = "flex";
    }

    if (ans1.checked === true){
        ans1.checked = false;
    };
    if (ans2.checked === true){
        ans2.checked = false;
        let score = 1;
        document.getElementById('score').innerHTML = "Your Score is: " + score;
        score += 1;
    }; 
    if (ans3.checked === true){
        ans3.checked = false;
    };
}

var timeleft;
let downloadTimer = setInterval(function(){

  if(timeleft >= 0){
    setInterval(timeleft);
    document.getElementById("level").innerHTML = timeleft;
  };
  timeleft --;
  if (timeleft == -1) {
    setInterval(timeleft);
    timeleft = 10;
    nextQuestion() = onclick;
  };
}, 1000);

next.addEventListener("click", function() {
    setInterval(timeleft);
    timeleft = 10;
},1000);

start.addEventListener("click", function() {
    setInterval(timeleft);
    timeleft = 10;
});



