const sentence_data = [
    "Ka__rrus_k adalah kata pa____rome",
    "Be__kit _akit ke h_lu Beren_ng rena__ ke _epian",
    "R_za arap Okt__ian ga_ers gante__ id__an",
    "Tut__ial c_ra m__buat __deo tu__rial",
    "Game i_i ti__k jelas, j_ngan dimai_kan",
    "Ha__tiv8 cod__g Bootc_mp",
    "K_lo mau ng__awak jan_an garing",
    "Emp_t s__at lima se_purna",
    `fo_(l_t i=0; i&ltar__y.leng_h; i+_)`,
    "Sa_YesT__ode",
    "Yang ini soal bonus hehe",
    " "
]

const answerKey = [
    "Kasurrusak adalah kata palindrome",
    "Berakit rakit ke hulu Berenang renang ke tepian",
    "Reza arap Oktavian gamers ganteng idaman",
    "Tutorial cara membuat video tutorial",
    "Game ini tidak jelas, jangan dimainkan",
    "Hacktiv8 coding Bootcamp",
    "Kalo mau ngelawak jangan garing",
    "Empat sehat lima sempurna",
    `for(let i=0; i<array.length; i++)`,
    "SayYesToCode",
    "Yang ini soal bonus hehe",
    " "
]

var total_quest = 5
var score = 0
const questionTime = 45
var reward_max = 100

function isIn(arr, number){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==number){
            return true
        }
    }
    return false
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var randQuest = []
for(let i=0; i<total_quest; i++){
    let randNum = getRandomInt(sentence_data.length-1)
    if(isIn(randQuest, randNum)){
        i--
    }else{
        randQuest.push(randNum)
    }
}
console.log(randQuest)

let quest = []
for (let i = 0; i < randQuest.length; i++) {
    for (let j = 0; j < sentence_data.length; j++) {
        if (j == randQuest[i]) {
            quest.push(sentence_data[j])
        }
    }
}
let answer = []
for (let i = 0; i < randQuest.length; i++) {
    for (let j = 0; j < answerKey.length; j++) {
        if (j == randQuest[i]) {
            answer.push(answerKey[j])
        }
    }
}

function timerGenerator(){

    var timer_limit = questionTime
    var iteration = 0
    var question_id = document.getElementById("question_")
    var current_question = quest[iteration]
    var current_answer = answer[iteration]
    question_id.innerHTML = current_question
    var total_quest_id = document.getElementById("total_quest")
    total_quest_id.innerHTML = "1/5"
    var user_score = document.getElementById("score_value")

    let intervalID = setInterval( function(){
        timer_limit--
        reward_max--
        if(timer_limit>=0){
            let timer_id = document.getElementById("timer_count")
            timer_id.innerHTML = timer_limit
        }
        if(timer_limit<0){
            timer_limit = questionTime+1
            iteration++
            console.log(iteration+1, total_quest)
            if(iteration+1>total_quest){
                clearInterval(intervalID)
                localStorage.setItem('mostRecentScore', score)
                return window.location.assign('end_game.html')
            }
            current_question = quest[iteration]
            current_answer = answer[iteration]
            question_id.innerHTML = current_question
            user_score.innerHTML = score
            total_quest_id.innerHTML = `${iteration+1}/${total_quest}`
        }
        
    }, 1000 )

    var submit_answer_id = document.forms["submit_answer"]
    submit_answer_id.addEventListener("submit", function (e){
        e.preventDefault()
        var user_answer = submit_answer_id.querySelector('input[type="text"]').value
        if(user_answer.toLowerCase() == current_answer.toLowerCase()){
            score += reward_max
        }
        submit_answer_id.querySelector('input[type="text"]').value = ''
        timer_limit = questionTime+1
        iteration++
        console.log(iteration, total_quest)
        if(iteration+1>total_quest){
            clearInterval(intervalID)
            localStorage.setItem('mostRecentScore', score)
            return window.location.assign('end_game.html')
        }
        current_question = quest[iteration]
        current_answer = answer[iteration]
        question_id.innerHTML = current_question
        user_score.innerHTML = score
        total_quest_id.innerHTML = `${iteration+1}/${total_quest}`
        reward_max = 100
    })
}

timerGenerator()

// const form_ = document.forms["submit_answer"]
// form_.addEventListener('submit', function (e){
// 	e.preventDefault()
// 	const value = form_.querySelector('input[type="text"]').value
// 	console.log(value)
// })

// function questionGenerator(total_quest){
//     if(total_quest==1){
//         return 0
//     }else{
//         console.log("masuk")
//         let question_id = document.getElementById("question_")
//         question_id.innerHTML = `"${sentence_data[randQuest[total_quest]]}"`
//         timerGenerator()
//         return questionGenerator(total_quest-1)
//     }
// }

 // submit_button_id.addEventListener("submit", function (e){
    //     console.log("masuk")
    //     e.preventDefault()
    //     clearInterval(intervalID)
    //     timer_limit = 21
    //     iteration++
    //     question_id.innerHTML = sentence_data[randQuest[iteration]]
    //     total_quest_id.innerHTML = `${iteration+1}/5`
    // })

// questionGenerator(total_quest)