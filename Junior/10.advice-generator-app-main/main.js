
const idAdvice = document.getElementById('id-advice');
const advice = document.getElementById('advice');
const diceRandom = document.getElementById('icon')

let usedIds = new Set();

const randomAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(json => {
            const adviceId = json.slip.id

            if(usedIds.has(adviceId)){
                randomAdvice()
            } else {
                console.log(json)
                idAdvice.innerHTML = adviceId
                advice.innerHTML = `"${json.slip.advice}"`
                usedIds.add(adviceId)
            }
        })
        .catch(error => alert('Error! Advice not found', error))
    }
    
    diceRandom.addEventListener('click', randomAdvice);
