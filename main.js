const questionsObject = [{
    question: "What was the first National Park?",
    choices: {
        correct: "Yellowstone",
        wrong: ["Yosemite", "Death Valley", "Acadia", "Yellowstone"]
  }
    },
    {
        question: "What national park is home to the world's largest tree by volume?",
        choices: {
            correct: "Sequoia",
            wrong: ["Redwood", "Everglades", "Joshua Tree", "Sequoia"]
      }
        },
]

const quiz = function(quiz_name) {
    this.quiz_name
    this.questions = [];
}

function startQuiz() {

    function showQuestions() {

    }

    function showResults() {

    }
}
//class questionCard with properties to ask the question, give answer choices and provide the correct answer
class questionCard {
    constructor(question,answerChoice,rightAnswer) {
        this.question = question
        this.answerchoice = answerChoice
        this.rightAnswer = rightAnswer
    }

    //isAnswerCorrect(clickedAnswer) {
        //if (clickedAnswer === )
    //}
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

console.log(parkCards)

const questionBeingAsked = document.querySelector(".question-asked")
const answerChoices = document.querySelector(".answer-choices")
const buttonContainer = document.querySelector(".button-container")


function displayQuestionCard() {
    for (let i = 0; i < parkCards.length; i++) {
        const currentQuestion = parkCards[i].question;
        console.log(currentQuestion)
        questionBeingAsked.innerHTML = currentQuestion;
    }
}
displayQuestionCard();