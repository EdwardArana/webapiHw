var startButton = document.querySelector("#start");
var score = 0
var highScores = 0
var questionDiv = document.querySelector("#question");
var answersDiv = document.querySelector("#answers");
var questionIndex = 0;
var timer = document.querySelector("#timer");
var submitButton = document.querySelector("#submit");
var input = document.querySelector("#intials");
var time = 120;
var displayResults = document.getElementById("#display")
var timerInterval;
// Where my questions and answers get picked from
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


// This function gets the currernt question and when you submit an answer it will move you to the next question.

function getCurrentQuestion(){
    if(testQuestions[questionIndex]) {
    questionDiv.textContent=testQuestions[questionIndex].question

        var answerOne = document.createElement("button")

        answerOne.textContent=testQuestions[questionIndex].answers.a
        answerOne.setAttribute("class", "choices")

        var answerTwo = document.createElement("button")

        answerTwo.textContent=testQuestions[questionIndex].answers.b
        answerTwo.setAttribute("class", "choices")
        var answerThree = document.createElement("button")

        answerThree.textContent=testQuestions[questionIndex].answers.c
        answerThree.setAttribute("class", "choices")
        var answerFour = document.createElement("button")

        answerFour.textContent=testQuestions[questionIndex].answers.d
        answerFour.setAttribute("class", "choices")
        

        answersDiv.appendChild(answerOne)
        answersDiv.appendChild(answerTwo)
        answersDiv.appendChild(answerThree)
        answersDiv.appendChild(answerFour)
    }
}

getCurrentQuestion();
//// This event listener is for the answer button and when you click on it the button will show a prompt telling you if you got it correct or wrong.
document.body.addEventListener("click", function(e) {
    if(e.target.className === "choices") {
        console.log(e.target.textContent)
        if(e.target.textContent===testQuestions[questionIndex].correctAnswer){
            alert("correct")
        } else {
            time = time -10
            alert("wrong")
        }
        console.log(testQuestions)
        
        questionIndex++
        questionDiv.innerHTML = ""
        answersDiv.innerHTML = ""
       
        getCurrentQuestion()
        
        if(questionIndex === 4) {
            document.querySelector("#myform").setAttribute("style", "display:block");
            score = time
            clearInterval(timerInterval)
        }
    }
    
});

// This event listener is for the highscore submit button, it checks if there is a high score already and if there is it will display it. If there isnt a high score already then it will set it to 0.
submitButton.addEventListener("click", function(e){
    e.preventDefault();
    var intials = input.value;
    console.log(intials);
    var userScore = {
        user:intials,
        score:score
    }
    var prevScore = JSON.parse(localStorage.getItem("highscore"))
    
    // console.log(typeof prevScore.score); 
    // console.log(typeof score);
    if(!prevScore) {

        localStorage.setItem("highscore", JSON.stringify(userScore))
    }
    
    else if(parseInt (prevScore.score) < score){

        localStorage.setItem("highscore", JSON.stringify(userScore))
    
        
    } 
    
    if(questionIndex === 4) {
        document.querySelector("#myform").setAttribute("style", "display:block");

    
    }

});


// this button starts the timer and test.

startButton.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#quiz").setAttribute("style", "display:block");
    startTimer();
})


//this is how i start and stop the timer once the test is over.

function startTimer(){
    
    var timerElement = document.querySelector("#timer");
    timerElement.innerHTML="";
    
     timerInterval = setInterval(function(){
        if(time !== 0) {
            time --
        }
        
        timerElement.textContent=time
        if (time === 0 || time < 0 ) {
            clearInterval(timerInterval);
            document.querySelector("#myform").setAttribute("style", "display:block");

        }
    }, 1000);
    
} 

