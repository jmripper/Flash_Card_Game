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

class questionCard {
    constructor(question,answerChoice,rightAnswer) {
        this.question = question
        this.answerchoice = answerChoice
        this.rightAnswer = rightAnswer
    }
}

const parkCards = [
    new questionCard
]