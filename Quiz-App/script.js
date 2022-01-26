const quizData = [
    {
        question: "How old is Florin?",
        a: "10",
        b: "17",
        c: "26",
        d: "34",
        correct: "c"
    },{
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "Who is the president of US",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Joe Biden",
        correct: "d"
    },{
        question: "What does HTML stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },{
        question: "What year was JavaScript launched?",
        a: "2020",
        b: "1995",
        c: "2018",
        d: "none of the above",
        correct: "b"
    }
];

const question_text = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let answerid = undefined;
let score =0;
function loadQuiz(){
   
    const currentQuizData = quizData[currentQuiz];
    question_text.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}
 
loadQuiz();

submitBtn.addEventListener('click', ()=>{


    if(currentQuiz < quizData.length){
        getSelectedAndChecked();
        loadQuiz();
    } else {
        // TODO; show results
        alert(`Quiz over \nYour score ${score}`);
    }
    
});

function getSelectedAndChecked(){
    let correctAns = 0;
    const answers = document.getElementsByName("answer");
    for(let i=0; i< answers.length; i++){
        if(answers[i].checked){
            answerid = answers[i].id;
            if(answerid == quizData[currentQuiz].correct){
                score++;
            }
            correctAns++;
        }
    }
    correctAns ? currentQuiz++ : alert("Select atleast one option");
}
