// const levels1 = [
//     {
//         question1: 'What is Capital of Morocco?',
//         a: 'Agadir',
//         b: 'Rabat',
//         c: 'CasaBlanca',
//         correct: 'Rabat',
//     },
//     {
//         question1: 'What is Capital of United State?',
//         a: 'Washington',
//         b: 'New York',
//         c: 'California',
//         correct: 'Washington',
//     },
//     {
//         question1: 'What is Capital of Spain?',
//         a: 'Barsalona',
//         b: 'Seville',
//         c: 'Madrid',
//         correct: 'Madrid',
//     },
//     {
//         question1: 'What is Capital of France?',
//         a: 'Paris',
//         b: 'Marseille',
//         c: 'lyon',
//         correct: 'Paris',
//     },
//     {
//         question1: 'What is Capital of Canada?',
//         a: 'Toronto',
//         b: 'Montreal',
//         c: 'Vancouver',
//         correct: 'Montreal',
//     }, 
// ];

// let start = document.querySelector('#start');
// let next = document.querySelector('#next');
// let question = document.querySelector('#question');
// let answer1 = document.querySelector('.answer1');
// let answer2 = document.querySelector('.answer2');
// let answer3 = document.querySelector('.answer3');
// let level = document.querySelector('#level');
// let fiveQuestion = document.querySelector('#fiveQuestion');
// let allAnswers = document.querySelectorAll('.allAnswers');
// let currentQuiz = 0;
// let questionNumber = 1;
// let score = 0;

// function startQuiz() {
//     document.querySelector(".level1").style.display = "flex";
//     document.querySelector(".copyright").style.display = "flex";
//     document.querySelector("#startButton").style.display = "none";
// };

// // function startNextLevel(){
// //     document.querySelector(".level1").style.display = "flex";
// //     document.querySelector(".copyright").style.display = "flex";
// //     document.querySelector("#startButton").style.display = "none";
// //     document.querySelector("#nextLevelBtn").style.display = "none";
// // }

// function loadQuiz() {
//     deselectAnswers()
//     const currentQuizData = levels1[currentQuiz];
//     question.innerHTML = currentQuizData.question1;
//     answer1.innerHTML = currentQuizData.a;
//     answer2.innerHTML = currentQuizData.b;
//     answer3.innerHTML = currentQuizData.c;


//     fiveQuestion.innerHTML = "Question " + questionNumber + "/5";
// }
// loadQuiz()
// function deselectAnswers() {
//     allAnswers.forEach(allAnswer => allAnswer.checked = false);
// }
// function answerSelected() {
//     let answer;
//     allAnswers.forEach(allAnswer => { 
//         if(allAnswer) {
//             answer = allAnswer.id;

//         }
        
//     })
    
//     return answer;
// }
// function nextQuestion() {
//     const answer = answerSelected();
//     if(answer) {
//         if(answer != levels1[currentQuiz].correct){
//             score++;
//         }

//         questionNumber++;
//         fiveQuestion.innerHTML = "Question " + questionNumber + "/5";
    
//         currentQuiz++;

//         if(currentQuiz < levels1.length){
//            loadQuiz();
//         }else {
//            document.querySelector(".level1").style.display = "none";
//            document.querySelector(".copyright").style.display = "none";
//            document.getElementById("nextLevelBtn").style.display = "flex";
//            document.getElementById("level").style.display = "none";   
//            document.getElementById('scores').innerHTML = 'You answered ' + score + '/5';
//            document.getElementById('level2').innerHTML = 'Next Level';
//         }
//     }
// };


// // var timeleft;
// // let downloadTimer = setInterval(function(){

// //   if(timeleft >= 0){
// //         setInterval(timeleft);
// //         document.getElementById("level").innerHTML = timeleft;
// //   };

// //   timeleft --;

// //     if (timeleft == -1) {
// //         setInterval(timeleft);
// //         timeleft = 10;
// //         nextQuestion() = onclick;
// //     };

// // }, 1000);

// // next.addEventListener("click", function() {
// //     setInterval(timeleft);
// //     timeleft = 10;
// // },1000);

// // start.addEventListener("click", function() {
// //     setInterval(timeleft);
// //     timeleft = 10;
// // });

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

let checked1 = document.querySelector('.checked1');
let checked2 = document.querySelector('.checked2');
let checked3 = document.querySelector('.checked3');

let level = document.querySelector('#level');
let fiveQuestion = document.querySelector('#fiveQuestion');
let allAnswers = document.querySelectorAll('.allAnswers');
let currentQuiz = 0;
let questionNumber = 1;
let score = 0;
let currentQuizData = levels1[currentQuiz];
let index = 0;

function startQuiz() {
    document.querySelector(".level1").style.display = "flex";
    document.querySelector(".copyright").style.display = "flex";
    document.querySelector("#startButton").style.display = "none";
};
function deselectAnswers() {
    allAnswers.forEach(allAnswer => allAnswer.checked = false);
}




function loadQuiz() {
    deselectAnswers()
    
    question.innerHTML = currentQuizData.question1;
    answer1.innerHTML = currentQuizData.a;
    answer2.innerHTML = currentQuizData.b;
    answer3.innerHTML = currentQuizData.c;

    checked1.value = (currentQuizData.a);
    checked2.value = (currentQuizData.b) ;
    checked3.value = (currentQuizData.c) ;

    fiveQuestion.innerHTML = "Question " + questionNumber + "/5";
}
// loadQuiz();

function loadCurrentQuestion(index){
    // deselectAnswers();
    console.log(checked3);
    if(index < levels1.length){
        let currentQ = levels1[index];
        question.innerHTML = currentQ.question1;
        answer1.innerHTML = currentQ.a;
        answer2.innerHTML = currentQ.b;
        answer3.innerHTML = currentQ.c;
    
        checked1.value = (currentQ.a);
        checked2.value = (currentQ.b) ;
        checked3.value = (currentQ.c) ;
        questionNumber = index +1;
        fiveQuestion.innerHTML = "Question " + questionNumber + "/5";
    }

    

};
loadCurrentQuestion(index);

function nextQuestion() {
    
    let checkedValue = document.querySelector('input[name="capital"]:checked')?.value;
    console.log(checkedValue);
    if(checkedValue != null){
        console.log(levels1[currentQuiz]);
        let ans = Object.keys(levels1[currentQuiz]).find((key) => levels1[currentQuiz][key] === checkedValue);
        console.log(ans);  
        if(levels1[currentQuiz].correct == ans) {
            
            score ++;

        }
        index++;
        currentQuiz++;
        
        if(currentQuiz < levels1.length){
           loadQuiz();
        }else {
           document.querySelector(".level1").style.display = "none";
           document.querySelector(".copyright").style.display = "none";
           document.getElementById("nextLevelBtn").style.display = "flex";
           document.getElementById("level").style.display = "none";   
           document.getElementById('scores').innerHTML = 'You answered ' + score + '/5';
           document.getElementById('level2').innerHTML = 'Next Level';
        }
    
        loadCurrentQuestion(index)
        
        
};
  
       
    // loadCurrentQuestion(index++)
    
}