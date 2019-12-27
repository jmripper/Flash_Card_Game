//class questionCard with properties to ask the question, give answer choices and provide the correct answer
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

//new array with class questionCard and its properties, question, answerChoice, rightAnswer
const parkCardOne = new questionCard [{
    "What state contains the most national parks?",
    ["Alaska", "Colorado", "Utah", "California"], 
    ['images/alaskaflag.png','images/coloradoflag.png','images/utahflag.png','images/californiaflag.png'],
    "California", 
    "With the creation of Pinnacles National Park in 2013, California broke its 8-8 tie with Alaska to become the state with the most national parks. In addition to its nine national parks, California also maintains over 20 National Park System-administered areas including multiple National Monuments, National Historic Trails, National Historic Sites and more."
}];

const parkCardTwo = new questionCard [{
    question: "What was the first National Park?",
    answerChoice: ["Dealth Valley National Park", "Yosemite National Park", "Acadia National Park", "Yellowstone National Park"],
    choiceImages: ['images/utahflag.png'],
    rightAnswer: "Yellowstone National Park", 
    rightAnswerInfo: "Yellowstone National Park, located in Wyoming, Montana and Idaho, was signed into law by President Ulysses S. Grant in 1872, becoming the first national park in America and in the world.")],

    const parkCardThree = new questionCard("What national park is home to the longest cave system in the world?",
    ["Mammoth Cave National Park", "Canyonlands National Park", "Carlsbad Caverns National Park", "Great Basin National Park"], [''],
    "Mammoth Cave National Park", "Mammoth Cave National Park in Kentucky is home to the world's longest known cave system, which measures more than 400 miles long. The park offers a variety of guided cave tours – including a ranger-led nature trek for kids – as well as camping, horseback riding, biking and other activities to explore the beauty of Kentucky's Green River Valley."),

    const parkCardFour = new questionCard("What national park is home to the world's largest tree by volume?",
    ["Red Wood National Park", "Joshua Tree National Park", "California's Sequoia National Park", "Everglades National Park"], [''],
    "California's Sequoia National Park", "The General Sherman Tree located in California's Sequoia National Park is the largest tree by volume in the world. This massive tree measures a whopping 275 feet tall and 25 feet wide, resulting in a trunk volume of 52,513 cubic feet. It is also one of the oldest trees on the planet with an estimated age of 2,300-2,700 years old."),

    const parkCardFive = new questionCard("What is the most visited national park?",
    ["The Great Smoky Mountains", "The Grand Canyon", "Yosemite National Park", "Rocky Mountain National Park"], [''],
    "The Great Smoky Mountains", "In 2015 alone, parks across the U.S. drew more than 307.2 million visits. That's almost one visit per every person in America! Of these visits, over 10 million of them were to The Great Smoky Mountains – almost twice as much as the 5.5 million visits to the second most popular park, The Grand Canyon."),

    const parkCardSix = new questionCard("What is the least visited national park?",
    ["Dry Tortugas National Park", "Isle Royale National Park", "North Cascades National Park", "Black Canyon of the Gunnison National Park"], [''],
    "Isle Royale National Park", "According to the National Park Service Visitor Statistics, Michigan's Isle Royale National Park saw only 18,684 recreational visits in 2015. This is due largely to the fact that the remote park is accessible only by boat or seaplane."),

    const parkCardSeven = new questionCard("What National Park contains the highest peak in North America?",
    ["Grand Teton National Park", "Hawaii Volcanoes National Park", "Mount Rainier National Park", "Denali National Park"], 
    ['/images/Denali.png'], 
    "Denali National Park", "Formerly known as Mount McKinley, Denali is the tallest mountain in North America with a peak elevation of 20,310 feet."),

    const parkCardEight = new questionCard("Which is the smallest national park site?",
    ["Belmont-Paul Women's Equality National Monument", "Thaddeus Kosciuszko National Memorial", "General Grant National Memorial", "African Burial Ground Monument"], [''],
    "Thaddeus Kosciuszko National Memorial", "The smallest site in the National Park System, the Thaddeus Kościuszko National Memorial in downtown Philadelphia, honors a Polish freedom fighter who helped American colonists during the Revolutionary War and preserves the sweeping history of his life in only about 80 square meters of space."),

    const parkCardNine = new questionCard("Which was the first national park established for the purpose of protecting man-made structures?",
    ["National Mall and Memorial Parks", "New River Gorge", "Mesa Verde National Park", "For Caroline National Park"], [''],
    "Mesa Verde National Park", "In June 1906 President Theodore Roosevelt signed the bill that established Mesa Verde National Park in southwestern Colorado to protect Ancestral Puebloan archaeological sites."),

const parkCardTen = new questionCard("Which national park site contains the most lighthouses?", ["Cape Cod National Seashore", "Pt. Reyes Natiaonl Seashores", "Ise Royale National Park", "Apostle Island National Lakeshore"], [''], "Apostle Island National Lakeshore", "Nine of the 50 lighthouses cared for by the National Park Service are located within Apostle Islands National Lakeshore in Wisconsin, making it the national park site with the most lighthouses. All of them were built in the 19th century, and some are still in service today.")

let activeCard = 0
let score = 0
let imageIndex = 0

const questionTitle = document.querySelector(".question-title")
const answerChoices = document.querySelector(".answer-choices")
const buttonContainer = document.querySelector(".button-container")
const nextButton = document.getElementById("next-question-button")
const backButton = document.getElementById("prev-question-button")
const answerList = document.getElementById("answer-list")
const answerText = document.querySelector(".answer-text")
const showDescription = document.querySelector(".description")


function displayQuestionCard() {
        //seperates out each question object from the array of parkCards starting at card 0 in the parkCards array
        const card = parkCards[activeCard]
        const currentQuestion = card.question;
        const cardAnswerList = card.answerchoice
        const imageList = card.choiceImages
        questionTitle.innerHTML = currentQuestion
        //console.log(imageList)

        //creates next question button
        nextButton.setAttribute("class", "button-style")
        nextButton.innerText = "Next Question"
        //once pass the first card show back button
        if (activeCard > 0 && activeCard < 9 ) {
            backButton.setAttribute("class", "button-style")
        } //else {
            //backButton.style.pointerEvents = "none";
        //}

        //for (let i = 0; i < imageList.length; i++) {
           // const singleImage = imageList[i];
            //const imageItem = singleImage[imageIndex]
            //console.log(singleImage)
        
        
        //create li list for each answer choices
        let i
        for (i = 0; i < answerList.length; i++) {
            const choice = answerList[i];

            console.log("he")
            let answerItem = document.createElement("li")
            let answerDescription = card.rightAnswerInfo
            let image = document.createElement('img')
            image.src
            image.className = "sizing"
            answerItem.className = "answers"
            showScore();
            
            //console.log(imageList)

            //console.log(imageList)
            //console.log(answerItem)

            //event click listener for each li answer choice
            checkAnswer();
            
            answerItem.textContent = choice;
            image.setAttribute('src', imageList[i])
            answerItem.appendChild(image);
            answerList.append(answerItem);
        }
    }     
//}
displayQuestionCard();

function showScore() {
    const scoreText = document.getElementById("score");
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
        showDescription.innerText = '';
        showDescription.classList.remove("answer-container")
        answerText.classList.remove("green")
    if (activeCard !== parkCards.length) {
        return displayQuestionCard();
    } else if (activeCard === parkCards.length) {
        const cardContainer = document.querySelector(".card-container")
        cardContainer.innerHTML = `<h2 class='whatever'>Thanks for playing!</h2><div class='end-tag-text'>Your Final Score:<br><span class='final-score'>${score}/${parkCards.length}</span></div><div class='end-btn'><a class='try-again-btn' href='/index.html'>Ready to Try Again?</a></div>`
    }
})

//previous button event click listener
backButton.addEventListener("click", evt => {
    evt.preventDefault();
    answerText.innerText = '';
    showDescription.innerText = '';
    showDescription.classList.remove("answer-container")
    answerText.classList.remove("green")
    activeCard--;
    deleteChild();
    displayQuestionCard();
})

function checkAnswer() {
    answerItem.addEventListener("click", evt => {
        const userAnswer = evt.target.innerText;
        //const li = document.getElementsByName("li")
        //console.log(li)
        //if user answer = right answer then
        if (card.isAnswerCorrect(userAnswer) === true) {
            answerItem.classList.add("answer-correct")
            answerText.classList.add("green")
            answerText.classList.remove("red")
            answerItem.classList.remove("answers")
            answerText.innerText = "Correct! Your Right"
            showDescription.classList.add("answer-container")
            showDescription.innerText = answerDescription
            score++;
        } else if (card.isAnswerCorrect(userAnswer) == false) {
            answerItem.classList.add("answer-wrong")
            answerItem.classList.remove("answers")
        } 
    },{once: true})
};