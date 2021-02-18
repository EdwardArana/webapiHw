var startButton = document.querySelector("start");
// var score = document.querySelector("");
// var leaderBoard = document.querySelector("");
var questionDiv = document.querySelector("#question");
var answersDiv = document.querySelector("#answers");
var questionIndex = 0;

var testQuestions = [
    {
        question: "Who has a song called 'Like You' ",
        answers: {

            a: "Chingy",
            b: "Bow Wow",
            c: "Lil Romeo",
            d: "Ja Rule",
        },
        correctAnswer: "Bow Wow"
    },
    {
        question: "Who is the lowest rating artist?",
        answers: {

            a: "Iggy Azalea",
            b: "Shakira",
            c: "Beyonce",
            d: "Ariana Grande",
        },
        correctAnswer: "Iggy Azalea"
    },
    {
        question: "Who sang the song Jump?",
        answers: {
            a: "Lil Romeo",
            b: "Kris Kross",
            c: "Drake",
            d: "Will Thorne",
        },
        correctAnswer: "Kris Kross"
    },
    {
        question: "Who sang the popular song 'It's Hip To Be Square'",
        answers: {
            a: "Huey Lewis and The News",
            b: "Tom Swayer",
            c: "Tom Petty",
            d: "Rush",
        },
        correctAnswer: "Huey Lewis and The News"
        
    }
];




function getCurrentQuestion(){
    questionDiv.textContent=testQuestions[questionIndex].question
    var answerOne = document.createElement("button")
    answerOne.textContent=testQuestions[questionIndex].answers.a
    answersDiv.appendChild(answerOne)
}

getCurrentQuestion();


// on click event, when i click start the timer starts and it displays the first question. 
// when the user answers a question we need to do the logic to check if they selected the right answer, and incrament the question index to display the next question.
















function startTimer(){
    var time = 20;
    var timerElement = document.querySelector(".timer_Text");
    
    timerElement.innerHTML="";
    var timer = setInterval(function(){
        time --
        timerElement.textContent=time
        if (time === 0) {
            clearInterval(timer);

        }
    }, 1000);
    
}