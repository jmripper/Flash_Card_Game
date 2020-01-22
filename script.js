class questionCard {
    constructor(question,answerChoice,choiceImages,rightAnswer,rightAnswerInfo) {
        this.question = question
        this.answerChoice = answerChoice
        this.choiceImages = choiceImages
        this.rightAnswer = rightAnswer
        this.rightAnswerInfo = rightAnswerInfo   
    }

    isAnswerCorrect(clickedAnswer) {
        if (clickedAnswer === this.rightAnswer) {
            return true
        } else {
            return false;}
    }
}

const parkCards = [
    new questionCard (
        "What state contains the most national parks?",
        ["Alaska", "Colorado", "Utah", "California"], 
        ['images/alaskaflag.png','images/coloradoflag.png','images/utahflag.png','images/californiaflag.png'],
        "California", 
        "With the creation of Pinnacles National Park in 2013, California broke its 8-8 tie with Alaska to become the state with the most national parks. In addition to its nine national parks, California also maintains over 20 National Park System-administered areas including multiple National Monuments, National Historic Trails, National Historic Sites and more."),

    new questionCard (
        "What was the first National Park?",
        ["Dealth Valley National Park", "Yosemite National Park", "Acadia National Park", "Yellowstone National Park"],
        ['images/dealthvalley.png', 'images/yosemite.png', 'images/acadia.png', 'images/yellowstone.png'],
        "Yellowstone National Park", 
        "Yellowstone National Park, located in Wyoming, Montana and Idaho, was signed into law by President Ulysses S. Grant in 1872, becoming the first national park in America and in the world."),

    new questionCard (
        "What national park is home to the longest cave system in the world?",
        ["Canyonlands National Park", "Carlsbad Caverns National Park",  "Mammoth Cave National Park", "Great Basin National Park"],
        ['images/canyonlands.png', 'images/carlsbadcaverns.png', 'images/mammoth.png', 'images/greatbasin.png'],
        "Mammoth Cave National Park",  
        "Mammoth Cave National Park in Kentucky is home to the world's longest known cave system, which measures more than 400 miles long. The park offers a variety of guided cave tours – including a ranger-led nature trek for kids – as well as camping, horseback riding, biking and other activities to explore the beauty of Kentucky's Green River Valley."),

    new questionCard (
        "What national park is home to the world's largest tree by volume?",
        ["Red Wood National Park", "Joshua Tree National Park", "California's Sequoia National Park", "Everglades National Park"], 
        ['images/redwoodpark.png', 'images/joshuatreepark.png', 'images/sequoia.png', 'images/evergladespark.png' ],
        "California's Sequoia National Park", 
        "The General Sherman Tree located in California's Sequoia National Park is the largest tree by volume in the world. This massive tree measures a whopping 275 feet tall and 25 feet wide, resulting in a trunk volume of 52,513 cubic feet. It is also one of the oldest trees on the planet with an estimated age of 2,300-2,700 years old."),

    new questionCard(
        "What is the most visited national park?",
        ["The Great Smoky Mountains", "The Grand Canyon", "Yosemite National Park", "Rocky Mountain National Park"], 
        ['images/smokeymountains.png', 'images/grandcanyon.png', 'images/yosemitepark2.png', 'images/rockymountainnationalpark.png'],
        "The Great Smoky Mountains", 
        "In 2015 alone, parks across the U.S. drew more than 307.2 million visits. That's almost one visit per every person in America! Of these visits, over 10 million of them were to The Great Smoky Mountains – almost twice as much as the 5.5 million visits to the second most popular park, The Grand Canyon."),

    new questionCard (
        "What is the least visited national park?",
        ["Dry Tortugas National Park", "Isle Royale National Park", "North Cascades National Park", "Black Canyon of the Gunnison National Park"], 
        ['images/dryTortugas.png', 'images/isleroyal.png', 'images/northcascade.png', 'images/blackcanyon.png' ],
        "Isle Royale National Park", 
        "According to the National Park Service Visitor Statistics, Michigan's Isle Royale National Park saw only 18,684 recreational visits in 2015. This is due largely to the fact that the remote park is accessible only by boat or seaplane."),

    new questionCard (
        "What National Park contains the highest peak in North America?",
        ["Grand Teton National Park", "Hawaii Volcanoes National Park", "Mount Rainier National Park", "Denali National Park"], 
        ['images/grandteton2.png', 'images/hawaiivolcanoe.png', 'images/mountrainer.png', 'images/denali.png'], 
        "Denali National Park", 
        "Formerly known as Mount McKinley, Denali is the tallest mountain in North America with a peak elevation of 20,310 feet."),

    new questionCard (
        "Which is the smallest national park site?",
        ["Belmont-Paul Women's Equality National Monument", "Thaddeus Kosciuszko National Memorial", "General Grant National Memorial", "African Burial Ground Monument"], 
        ['images/belmontpaul.png', 'images/thaddeus.png', 'images/generalgrant.png', 'images/africanburialground.png'],
        "Thaddeus Kosciuszko National Memorial", 
        "The smallest site in the National Park System, the Thaddeus Kościuszko National Memorial in downtown Philadelphia, honors a Polish freedom fighter who helped American colonists during the Revolutionary War and preserves the sweeping history of his life in only about 80 square meters of space."),

    new questionCard (
        "Which was the first national park established for the purpose of protecting man-made structures?",
        ["National Mall and Memorial Parks", "New River Gorge National Park", "Mesa Verde National Park", "Fort Caroline National Park"], 
        ['images/mallpark.png', 'images/newrivergorge.png', 'images/mesaverde.png', 'images/fortcaroline.png'],
        "Mesa Verde National Park", 
        "In June 1906 President Theodore Roosevelt signed the bill that established Mesa Verde National Park in southwestern Colorado to protect Ancestral Puebloan archaeological sites."),

    new questionCard (
        "Which national park site contains the most lighthouses?", 
        ["Cape Cod National Seashore", "Pt. Reyes National Seashores", "Isle Royale National Park", "Apostle Island National Lakeshore"], 
        ['images/capecodenationalseashore.png', 'images/pointreyes.png','images/isleroyale2.png', 'images/apostleislands.png'], 
        "Apostle Island National Lakeshore", 
        "Nine of the 50 lighthouses cared for by the National Park Service are located within Apostle Islands National Lakeshore in Wisconsin, making it the national park site with the most lighthouses. All of them were built in the 19th century, and some are still in service today.")
]

const questionTitle = document.querySelector(".question-title")
const answerChoices = document.querySelector(".answer-choices")
const buttonContainer = document.querySelector(".button-container")
const nextButton = document.querySelector("#next-question-button")
const backButton = document.getElementById("prev-question-button")
const answerList = document.querySelectorAll(".answers")
const answerItem = Array.from(answerList);
const classAnswerList = document.querySelector(".answer-list")
const answerText = document.querySelector(".answer-text")
const showDescription = document.querySelector(".description")
const answerContainer = document.querySelector(".answer-container")
const descriptionTitle = document.querySelector(".answer-title")
const scoreText = document.querySelector("#score");
const questionContainer = document.querySelector("#questions")
const endPage = document.querySelector("#end-page")
const endPageText = document.querySelector(".end-tag-text")
const tryAgainButton = document.querySelector(".try-again-btn")
const playButton = document.querySelector(".wel-btn")
const cardContainer = document.querySelector(".card-container")
const welcomeContainer = document.querySelector(".welcome-container")

let activeCard = 0
let score = 0
let currentQuestion = parkCards[activeCard]

function welcomeScreen(){
    playButton.addEventListener("click", evt => {
        evt.preventDefault();
        welcomeContainer.style.display = "none"
        cardContainer.style.display = "block"

    })
}

function displayQuestionCard(){
    const card = parkCards[activeCard]
    const answerChoices = card.answerChoice
    const imageChoices = card.choiceImages

    questionTitle.innerText = card.question;
    //display score card
    scoreText.innerText = `Score: ${score}/${parkCards.length}`

    for (let i = 0; i < answerItem.length; i++) {
        const answerChoice = answerItem[i];
        answerChoice.innerHTML = answerChoices[i]

        let image = document.createElement('img')
        image.src
        image.className = "sizing"
        image.setAttribute('src', imageChoices[i])
        answerChoice.appendChild(image);    
    }
}

function checkAnswer() {
    answerItem.forEach(choice => { 
        choice.addEventListener("click", evt => {
            evt.preventDefault();
            nextButton.style.display = "block"

            for (let j = 0; j < answerItem.length; j++) {
                answerItem[j].style.pointerEvents = "none"
            }

            if (choice.innerText == parkCards[activeCard].rightAnswer) {
                score++
                choice.classList.add("answer-correct")
                choice.classList.add("green")
                choice.classList.remove("answers")
                descriptionTitle.innerText = "Correct! Your Right"
                answerContainer.style.display = "block"
                answerContainer.style.border = "1px solid #3c763d"

                showDescription.innerText = parkCards[activeCard].rightAnswerInfo
            } else {
                choice.classList.remove("answers")
                choice.classList.add("answer-wrong")
                answerContainer.style.display = "block"
                answerContainer.style.border = "1px solid red"
                descriptionTitle.innerText = `Incorrect. The correct answer is ${parkCards[activeCard].rightAnswer}.`
                showDescription.innerText = parkCards[activeCard].rightAnswerInfo
            }
        })

    })
}

function nextButtonFunction() {
    nextButton.addEventListener("click", evt => {
        evt.preventDefault();
        activeCard++
        for (let j = 0; j < answerItem.length; j++) {
            answerItem[j].style.pointerEvents = "auto"
            answerItem[j].className = 'answers'
        }
        answerContainer.style.display = "none"
        
        if (activeCard === parkCards.length) {
            endGame();
        } else { 
            displayQuestionCard();
        }
    })
}

function endGame() {
    if (activeCard === parkCards.length) {
        questionContainer.innerHTML = ''
         let h2 = document.createElement("h2")
         h2.innerHTML = "Thanks for playing!"
         endPageText.appendChild(h2);
         endPage.insertBefore(h2, endPageText)

         endPageText.innerHTML = `Your Final Score:<br><span class='final-score'>${score}/${parkCards.length}</span>`

         tryAgainButton.style.display = "block"
         scoreText.style.display = "none"         
    }
}

function playAgain() {
    tryAgainButton.addEventListener("click", (e) => {
        console.log("clicked")
        window.location.reload();
    })
}

welcomeScreen();
displayQuestionCard();
checkAnswer();
nextButtonFunction();
endGame();
playAgain();