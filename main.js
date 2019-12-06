//class questionCard with properties to ask the question, give answer choices and provide the correct answer
class questionCard {
    constructor(question,answerChoice,rightAnswer) {
        this.question = question
        this.answerchoice = answerChoice
        this.rightAnswer = rightAnswer
        
    }

    isAnswerCorrect(clickedAnswer) {
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
    "Mammoth Cave National Park"),

    new questionCard("What national park is home to the world's largest tree by volume?",
    ["Red Wood National Park", "Joshua Tree National Park", "California's Sequoia National Park", "Everglades National Park"], 
    "California's Sequoia National Park"),

    new questionCard("What is the most visited national park?",
    ["The Great Smoky Mountains", "The Grand Canyon", "Yosemite National Park", "Rocky Mountain National Park"], 
    "The Great Smoky Mountains"),

    new questionCard("What is the least visited national park?",
    ["Dry Tortugas National Park", "Isle Royale National Park", "North Cascades National Park", "Black Canyon of the Gunnison National Park"], 
    "Isle Royale National Park"),

    new questionCard("What National Park contains the highest peak in North America?",
    ["Grand Teton National Park", "Hawaii Volcanoes National Park", "Mount Rainier National Park", "Denali National Park"], 
    "Denali National Park"),

    new questionCard("Which is the smallest national park site?",
    ["Belmont-Paul Women's Equality National Monument", "Thaddeus Kosciuszko National Memorial", "General Grant National Memorial", "African Burial Ground Monument"], 
    "Thaddeus Kosciuszko National Memorial"),

    new questionCard("Which was the first national park established for the purpose of protecting man-made structures?",
    ["National Mall and Memorial Parks", "New River Gorge", "Mesa Verde Natiaonal Park", "For Caroline National Park"], 
    "Mesa Verde Natiaonal Park"),

    new questionCard("Which national park site contains the most lighthouses?",
    ["Cape Cod National Seashore", "Pt. Reyes Natiaonl Seashores", "Ise Royale National Park", "Apostle Island National Lakeshore"], 
    "Apostle Island National Lakeshore"),
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
        const currentQuestion = card.question;
        questionTitle.innerHTML = currentQuestion
        
        //creates next question button
        nextButton.setAttribute("class", "button-style")
        nextButton.innerText = "Next Question"
        //once pass the first card show back button
        if (activeCard > 0) {
            backButton.setAttribute("class", "button-style")
        }

        const cardAnswerList = card.answerchoice
        //create li list for answer choices
        cardAnswerList.forEach(choice => {
            let answerItem = document.createElement("li")
            answerItem.className = "answers"
                //event click listener for each li answer choice
                answerItem.addEventListener("click", evt => {
                    const userAnswer = evt.target.innerText;
                    //if user answer = right answer then
                    if (card.isAnswerCorrect(userAnswer) === true) {
                        answerItem.classList.add("answer-correct")
                        answerText.classList.add("green")
                        answerText.classList.remove("red")
                        answerText.innerText = "Your Right"
                        score++
                        showScore()
                    } else if (card.isAnswerCorrect(userAnswer) == false) {
                        answerText.classList.add("red")
                        answerText.innerText = "Sorry, Try Again"
                        showScore()
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
    scoreText.style.display = "block";
    scoreText.innerText = `Score: ${score}/${parkCards.length}`
}

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
        //cardContainer.innerText = '';
        cardContainer.innerHTML = "<h3></h3>Thanks for playing!</h3>"
        //cardContainer.innerHTML = `Your Final Score: ${score}/${parkCards.length}`

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


