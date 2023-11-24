
let numberContainer = document.querySelector('.rating');
let rateNumber = document.querySelector('#number');
let submit = document.querySelector('#submit');
let sectionOne = document.querySelector('#one');
let sectionTwo = document.querySelector('#two');

numberContainer.addEventListener('click', (e)=>{
  let numberSelected = e.target.innerText;
  rateNumber.innerText = numberSelected

  if(numberSelected > 0 || numberSelected <= 5){
    submit.addEventListener('click', () => {
        sectionOne.style.display = 'none';
        sectionTwo.style.display = 'block';
    });
  };
});
