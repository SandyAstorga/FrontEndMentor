let plusElements = document.getElementsByClassName('plus');
let minusElements = document.getElementsByClassName('minus');
let answerElements = document.getElementsByClassName('container-answer')
console.log(answerElements)


for (let i = 0; i < plusElements.length; i++) {
    let plus = plusElements[i];
    let minus = minusElements[i];
    let answer = answerElements[i]

    plus.addEventListener('click', () => {
        plus.style.display = 'none';
        answer.style.display = 'flex'
        minus.style.display = 'flex';
    });

    minus.addEventListener('click', () => {
        minus.style.display = 'none';
        answer.style.display = 'none'
        plus.style.display = 'flex';
    });
}
