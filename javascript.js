var startButton = document.querySelector("#start");
// var score = document.querySelector("");
var highScores = []
var questionDiv = document.querySelector("#question");
var answersDiv = document.querySelector("#answers");
var questionIndex = 0;
var timer = document.querySelector("#timer");
var submitButton = document.querySelector("#submit");
var input = document.querySelector("#intials");
var time = 20;


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

getCurrentQuestion();

document.body.addEventListener("click", function(e) {
    if(e.target.className === "choices") {
        console.log(e.target.textContent)
        if(e.target.textContent===testQuestions[questionIndex].correctAnswer){
            alert("correct")
            handleWin()
        } else {
            time = time -10
            alert("wrong")
        }
        questionIndex++
        questionDiv.innerHTML = ""
        answersDiv.innerHTML = ""
        getCurrentQuestion()
    }
});

function handleWin(){




}

submitButton.addEventListener("click", function(e){
    e.preventDefault();
    var intials = input.value;
    console.log(intials);
    var userScore = {
        user:intials,
        score:time
    }
    highScores.push(userScore);
    localStorage.setItem("highscore", JSON.stringify(highScores))

}
)


startButton.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#quiz").setAttribute("style", "display:block");
    startTimer();
})



function startTimer(){
    
    var timerElement = document.querySelector("#timer");
    timerElement.innerHTML="";
   
    var timer = setInterval(function(){
        time --
        timerElement.textContent=time
        if (time === 0 || time < 0 ) {
            clearInterval(timer);
            document.querySelector("#myform").setAttribute("style", "display:block");

        }
    }, 1000);
    
}

