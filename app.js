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

// Input radio's class
let checked1 = document.querySelector('.checked1');
let checked2 = document.querySelector('.checked2');
let checked3 = document.querySelector('.checked3');

let allAnswers = document.querySelectorAll('input[name="capital"]');


// Input radio's ID
let ans1 = document.querySelector('#ans1');
let ans2 = document.querySelector('#ans2');
let ans3 = document.querySelector('#ans3');

let timing = document.querySelector('#timing');
let fiveQuestion = document.querySelector('#fiveQuestion');
let currentQuiz = 0;
let questionNumber = 1;
let score = 0;
let currentQuizData = levels1[currentQuiz];
let index = 0;
let level2 = document.getElementById('level2');

function startQuiz() {
    document.querySelector(".level1").style.display = "flex";
    document.querySelector(".copyright").style.display = "flex";
    document.querySelector("#startButton").style.display = "none";
};

function loadQuiz() {
    question.innerHTML = currentQuizData.question1;
    answer1.innerHTML = currentQuizData.a;
    answer2.innerHTML = currentQuizData.b;
    answer3.innerHTML = currentQuizData.c;

    checked1.value = (currentQuizData.a);
    checked2.value = (currentQuizData.b) ;
    checked3.value = (currentQuizData.c) ;

    allAnswers.forEach(allAnswer => allAnswer.checked = false);

};

function loadCurrentQuestion(index){
    if(index < levels1.length){
        let currentQ = levels1[index];
        question.innerHTML = currentQ.question1;
        answer1.innerHTML = currentQ.a;
        answer2.innerHTML = currentQ.b;
        answer3.innerHTML = currentQ.c;
    
        checked1.value = (currentQ.a);
        checked2.value = (currentQ.b);
        checked3.value = (currentQ.c);

        questionNumber = index +1; 
        fiveQuestion.innerHTML = "Question " + questionNumber + "/5";
    };
};
loadCurrentQuestion(index);

function nextQuestion() {

    let checkedValue = document.querySelector('input[name="capital"]:checked')?.value;
    if(checkedValue != null){

        let ans = Object.keys(levels1[currentQuiz]).find((key) => levels1[currentQuiz][key] === checkedValue); 
        if(levels1[currentQuiz].correct == ans) {    
            score ++;
        };

        index++;
        currentQuiz++;
        
        if(currentQuiz < levels1.length){
           loadQuiz();
        }else{
            document.querySelector(".level1").style.display = "none";
            document.querySelector(".copyright").style.display = "none";
            document.getElementById("nextLevelBtn").style.display = "flex";
            document.getElementById("timing").style.display = "none";
            document.getElementById('scores').innerHTML = 'You answered ' + score + '/5';
        }
        loadCurrentQuestion(index);     
    };
    if (score >= 3) {
        document.getElementById('congrateOrOops').innerHTML = 'Congratulation';
        document.getElementById('level2').innerHTML = 'Next Level';
    }if (score < 3){
        document.getElementById('congrateOrOops').innerHTML = 'Ooops!';
        document.getElementById('level2').innerHTML = 'Restart';
    }
};