// Question 1 

// Reponse de la question 1 

const answerQ1 = 'elon musk'; 

const question1 = document.getElementById('question1')

// Question 2 

const question2 = document.getElementById('question-2')

const answerQ2 = '1914 - 1918'

const chooseAnswerQ2 = ["1914 - 1918", "1920 - 1925", "1940 - 1945", "1939 - 1945"]

const shuffledArray = chooseAnswerQ2.sort(() => 0.5 - Math.random());

var child = '<option value="0">Any</option>'

// Initialize le Random de la question 2 

for(let i = 1; i < shuffledArray.length + 1; i++){
    child += `<option value="${i}">${shuffledArray[i - 1]}</option>`
}
question2.innerHTML = child

// Question 3 

const answerQ3 = 'brendan eich'

const question3 = document.getElementById('question3')

// Question 4 

const question4 = document.getElementById('question4')

const answerQ4 = 2


// Fonction du submit permettant la comparaison des réponses 

let score = 0

const submit = (e) => {
    console.log(question1.value.toLowerCase() === answerQ1);
    console.log(question2[question2.value].innerText === answerQ2);
    console.log(question3.value.toLowerCase() === answerQ3);
    console.log(Number(question4.value) === answerQ4);
}

const reset = () => {
    location.reload()
}
