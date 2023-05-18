const levels1 = [
    {
        question1: 'What is Capital of Morocco?',
        a: 'Agadir',
        b: 'Rabat',
        c: 'CasaBlanca',
        correct: 'b',
    },
    {
        question1: 'What is Capital of United State?',
        a: 'Washington',
        b: 'New York',
        c: 'California',
        correct: 'a',
    },
    {
        question1: 'What is Capital of Spain?',
        a: 'Barsalona',
        b: 'Seville',
        c: 'Madrid',
        correct: 'c',
    },
    {
        question1: 'What is Capital of France?',
        a: 'Paris',
        b: 'Marseille',
        c: 'lyon',
        correct: 'a',
    },
    {
        question1: 'What is Capital of Canada?',
        a: 'Toronto',
        b: 'Montreal',
        c: 'Vancouver',
        correct: 'b',
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
let allAnswers = document.querySelectorAll('.allAnswers');
let currentQuiz = 0;
var score = 0;
let questionNumber = 1;



function startQuiz() {
    document.querySelector(".level1").style.display = "flex";
    document.querySelector(".copyright").style.display = "flex";
    document.querySelector("#startButton").style.display = "none";
};

// function startNextLevel(){
//     document.querySelector(".level1").style.display = "flex";
//     document.querySelector(".copyright").style.display = "flex";
//     document.querySelector("#startButton").style.display = "none";
//     document.querySelector("#nextLevelBtn").style.display = "none";
// }

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = levels1[currentQuiz];
    question.innerHTML = currentQuizData.question1;
    answer1.innerHTML = currentQuizData.a;
    answer2.innerHTML = currentQuizData.b;
    answer3.innerHTML = currentQuizData.c;
    fiveQuestion.innerHTML = "Question " + questionNumber + "/5";
}
loadQuiz()
function deselectAnswers() {
    allAnswers.forEach(allAnswer => allAnswer.checked = false);
}
function answerSelected() {
    let answer;
    allAnswers.forEach(allAnswer => {
        if(allAnswer) {
            answer = allAnswer.id;
        }
    })
    return answer;
}
function nextQuestion() {
    const answer = answerSelected();
    if(answer) {
       if(answer === levels1[currentQuiz].correct){
        score++;
       }
 
       questionNumber++;
       fiveQuestion.innerHTML = "Question " + questionNumber + "/5";
    
       currentQuiz++;

       if(currentQuiz < levels1.length){
           loadQuiz();
        }else {
           document.querySelector(".level1").style.display = "none";
           document.querySelector(".copyright").style.display = "none";
           document.getElementById("nextLevelBtn").style.display = "flex";
           document.getElementById('score').innerHTML = 'You answered ' + score + '/5';
           document.getElementById('level2').innerHTML = 'Next Level';
       }
    }
};
// function restart() {
//     if (score <= 2){
//         document.getElementById('level2').innerHTML = 'Restart';
//     }
//     if (score >= 3){
//         document.getElementById('level2').innerHTML = 'Next Level';
//     }
// }


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


if (allAnswers == le) {
    
}