//class questionCard with properties to ask the question, give answer choices and provide the correct answer
class questionCard {
    constructor(question,answerChoice,rightAnswer) {
        this.question = question
        this.answerchoice = answerChoice
        this.rightAnswer = rightAnswer
        
    }

    isAnswerCorrect(clickedAnswer,points) {
        if (clickedAnswer === this.rightAnswer) {
            return true
        } else {
            return false;}
    }
}


//new array with class questionCard and its properties, question, answerChoice, rightAnswer
const parkCards = [
    new questionCard("What state contains the most national parks?",
    ["Alaska", "Colorado","Utah", "California"], 
    "California"),
    new questionCard("What was the first National Park?",
    ["Dealth Valley National Park", "Yosemite National Park", "Acadia National Park", "Yellowstone National Park"],
    "Yellowstone National Park"),
    new questionCard("What national park is home to the longest cave system in the world?",
    ["Mammoth Cave National Park", "Canyonlands National Park", "Carlsbad Caverns National Park", "Great Basin National Park"], 
    "Mammoth Cave National Park")
];

let activeCard = 0
let score = 0
let questionNumber = 0

const questionTitle = document.querySelector(".question-title")
const answerChoices = document.querySelector(".answer-choices")
const buttonContainer = document.querySelector(".button-container")
const nextButton = document.getElementById("next-question-button")
const backButton = document.getElementById("prev-question-button")
const answerList = document.getElementById("answer-list")
const answerText = document.querySelector(".answer-text")

//console.log(card)

function displayQuestionCard() {
        //seperates out each question object from the array of parkCards starting at card 0 in the parkCards array
        const card = parkCards[activeCard]
        //grabs question from question card class
        const currentQuestion = card.question;
        questionTitle.innerHTML = currentQuestion
        
        //creates next question button
        nextButton.setAttribute("class", "button-style")
        nextButton.innerText = "Next Question"
        //once pass the first card show back button
        if (activeCard > 0) {
            backButton.setAttribute("class", "button-style")
        }

        //create a new div element
        //const newDiv = document.createElement("div")
        //add said class to new div element
        //newDiv.className = "question-title"
        //create text node with question
        //const titleText = document.createTextNode(currentQuestion)
        //newDiv.appendChild(titleText);
        //document.querySelector(".card-container").insertBefore(newDiv, answerChoices)
        const cardAnswerList = card.answerchoice
        
        cardAnswerList.forEach(choice => {
            let answerItem = document.createElement("li")
            answerItem.className = "btn"
            
                answerItem.addEventListener("click", evt => {
                    const userAnswer = evt.target.innerText;
                    
                    let current = document.getElementsByClassName("btn");
                    current[0].className = current[0].className.replace("active", " ");
                    this.className += "active";
                    if (card.isAnswerCorrect(userAnswer) === true) {
                        //answerItem.setAttribute("class","answer-correct")
                        //answerItem.style.border = "2px solid #3c763d"
                        answerText.style.color = "#3c763d"
                        answerText.innerText = "Your Right"
                        score++
                        showScore()
                    } else if (card.isAnswerCorrect(userAnswer) == false) {
                        //answerItem.style.border = "2px solid red"
                        answerText.style.color = "red"
                        answerText.innerText = "Sorry, Try Again"
                    }
                    
                })
            answerList.appendChild(answerItem)
            //add answerchoice values to li elements created
            answerItem.innerHTML = choice
        //}
    })        
}
displayQuestionCard();

function showScore() {
    const scoreText = document.getElementById("score")
    console.log(scoreText)
    scoreText.style.display = "block";
    scoreText.innerText = `Score: ${score}/${parkCards.length}`
}
// showScore()

//delete li answer choice elements
function deleteChild() {   
        let first = answerList.firstElementChild; 
        while (first) { 
            first.remove(); 
            first = answerList.firstElementChild;} 
} 

//next question button event click listener
nextButton.addEventListener("click", evt => {
    evt.preventDefault();
        activeCard++;
        deleteChild();
        answerText.innerText = '';
    if (activeCard !== parkCards.length) {
        return displayQuestionCard();
    } else if (activeCard === parkCards.length) {
        const cardContainer = document.querySelector(".card-container")
        cardContainer.innerText = '';
        cardContainer.innerHTML = "<h3>Thanks for playing!</h3>"
                console.log("game over")
    }
})

//previous button event click listener
backButton.addEventListener("click", evt => {
    evt.preventDefault();
    answerText.innerText = '';
    activeCard--;
    deleteChild();
    displayQuestionCard();

})


