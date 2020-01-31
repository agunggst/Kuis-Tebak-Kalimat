const finalScore = document.getElementById('final_score')

const mostRecentScore = localStorage.getItem('mostRecentScore')

finalScore.innerHTML = mostRecentScore


const sentimen = ["Huuu... Payah!", "Hmm... Lumayan..", "Keren...!"]
if(mostRecentScore>=350){
    var output_kata = sentimen[2]
}else if(mostRecentScore<350 && mostRecentScore>=200){
    var output_kata = sentimen[1]
}else if(mostRecentScore<200){
    var output_kata = sentimen[0]
}

const sentimen_h2 = document.getElementById("sentimen_h2")
sentimen_h2.innerHTML = output_kata