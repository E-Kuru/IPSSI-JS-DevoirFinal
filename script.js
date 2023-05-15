// Le code a été fait à deux en LiveSharing / PerProgramming, on a eu des problèmes avec gitHub c'est pourquoi tout le code a été push principalement à travers mon compte gitHub E-Kuru 😁.

// Question 1 

// Reponse de la question 1 

const answerQ1 = 'elon musk'; 

const question1 = document.getElementById('question1')

// Question 2 

const question2 = document.getElementById('question-2')

const answerQ2 = '1914 - 1918'

const chooseAnswerQ2 = ["1914 - 1918", "1920 - 1925", "1940 - 1945", "1939 - 1945"]

const shuffledQ2 = chooseAnswerQ2.sort(() => 0.5 - Math.random());

var childQ2 = '<option value="0">Any</option>'

// Initialize le Random de la question 2 

for(let i = 1; i < shuffledQ2.length + 1; i++){
    childQ2 += `<option value="${i}">${shuffledQ2[i - 1]}</option>`
}
question2.innerHTML = childQ2

// Question 3 

const answerQ3 = 'brendan eich'

const question3 = document.getElementById('question3')

// Question 4 

const question4 = document.getElementById('question4')

const answerQ4 = 2

// Question 5

const question5 = document.getElementById('question5')

const chooseAnswerQ5 = ["13", "16", "15"]

const answerQ5 ='13'

const shuffledQ5 = chooseAnswerQ5.sort(() => 0.5 - Math.random());

var childQ5 = '<option value="0">Any</option>'

for(let i = 1; i < shuffledQ5.length + 1; i++){
    childQ5 += `<option value="${i}">${shuffledQ5[i - 1]}</option>`
}

question5.innerHTML = childQ5

// Question 6 

const answersQ6 ='1'

const question6 = document.getElementById('question6')

// Question 7 

const answerQ7 ='gotham'

const question7 = document.getElementById('question7')

// // Question 8 

const question8 = document.getElementById('question8')

const chooseAnswerQ8 = ["Suisse", "L'Espagne", "L'Allemagne", "Royaume-Unis"];

const answerQ8 = ['Royaume-Unis', 'Suisse']

const shuffledQ8 = chooseAnswerQ8.sort(() => 0.5 - Math.random());

var userAnswer = []

const pushAnswerQ8 = (index) => {
    if(userAnswer.includes(shuffledQ8[index - 1])){
        let newuserAnswer = userAnswer.filter( e => e !== shuffledQ8[index - 1])
        userAnswer = newuserAnswer
    } else {
        userAnswer.push(shuffledQ8[index - 1])
    }
}

var childQ8 = ''

for(let i = 1; i < shuffledQ8.length + 1; i++){
    childQ8 += `
    <div class="form-check">
        <input type="checkbox" class="form-check-input" onclick=pushAnswerQ8("${i}")>
        <label class="form-check-label">${shuffledQ8[i - 1]}</label>
    </div>
  `
}

question8.innerHTML = childQ8

// Fonction du submit permettant la comparaison des réponses 

let score = 0

const submit = (e) => {
    question1.value.toLowerCase() === answerQ1 ? score += 1 : false
    question2[question2.value].innerText === answerQ2 ? score += 1 : false
    question3.value.toLowerCase() === answerQ3 ? score += 1 : false
    Number(question4.value) === answerQ4 ? score += 1 : false
    question5[question5.value].innerText === answerQ5 ? score += 1 : false
    question6.value === answersQ6? score += 1 : false
    question7.value.toLowerCase() === answerQ7 ? score += 1 : false
    userAnswer.sort().toString() === answerQ8.toString() ? score += 1 : false

    alert(`Bravo vous avez ${score} points !`)
}

// Timer 

const timer = document.getElementById('timer')

let time = 300

const setTimer = () => {
    timer.innerHTML = `${time} s`
    time--
    if(time === 0){
        alert("T'as perdu !")
        reset()
    }
}

setInterval(setTimer, 1000)

// Reset du Quizz

const reset = () => {
    location.reload()
}

// Indices 

// Tableau d'indices 

const allHints = [
        "Il a récemment acheter twitter :) !",
        "Ce n'est pas 1939 - 1945",
        "Il est le co-foundateur de Firefox.",
        "Sais-tu ce qu'est un framework ? 🤔",
        "Ce n'est pas 12.",
        "Pas d'indices pour cette question 😋",
        "Connais-tu Batman ?",
        "Le drapeau forme une croix !"
]

const hintAnswer = (i) => {
    const textHint =  document.getElementById(`hintText${i}`)

    textHint.innerHTML = allHints[i - 1]
}

const hideHint = (i) => {
    const textHint =  document.getElementById(`hintText${i}`)
    
    textHint.innerHTML = ''

}
