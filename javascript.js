var startButton = document.querySelector("start");
// var score = document.querySelector("");
// var leaderBoard = document.querySelector("");
var questionDiv = document.querySelector("#question");
var answersDiv = document.querySelector("#answers");
var questionIndex = 0;
var timer = document.querySelector("#timer");




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
        questionIndex++
        questionDiv.innerHTML = ""
        answersDiv.innerHTML = ""
        getCurrentQuestion()
    }
});



//////////////////////// timers vvvvvvvvvvvvvvv ///////////////////

// function startTimer(){
//     var timerElement = document.querySelector("#timer");
    
//     timerElement.innerHTML="";
//     var timer = setInterval(function(){
//         time --
//         timerElement.textContent=time
//         if (time === 0) {
//             clearInterval(timer);

//         }
//     }, 1000);
    
// }


// function startTimer() {
//     var timeInterval = setInterval(function(){
//         timer.textContent = timeLeft = "seconds left";
//         timeLeft--;
//         if(timeLeft === 0) {
//             timer.textContent = "You're out of time lad."
//             clearInterval(timeInterval);
//             gameOver();
//         }
//     },1000);
// }



/// if question goes past array display scxore 

