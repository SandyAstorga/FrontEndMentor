const arrowSubmit = document.getElementById('arrow');
const emptyError = document.querySelectorAll('#empty-error');
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const totalYears = document.getElementById('y');
const totalMonths = document.getElementById('m');
const totalDays = document.getElementById('d');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');

arrowSubmit.addEventListener('click', function () {
    let enteredDay = inputDay.value;
    let enteredMonth = inputMonth.value;
    let enteredYear = inputYear.value;

    let dateActually = new Date();
    let day = dateActually.getDate();
    let month = dateActually.getMonth() + 1; 
    let year = dateActually.getFullYear();
    let maxDay = new Date(enteredYear, enteredMonth, 0).getDate();
    isValidDate = enteredDay >= 1 && enteredDay <= maxDay;


    if (enteredDay === '' || enteredMonth === '' || enteredYear === '') {
        emptyError.forEach(empty => {
            empty.style.display = 'flex';
            empty.innerHTML = 'This field is required';
        });
        labels.forEach(label => {
            label.style.color = 'hsl(0, 100%, 67%)';
        });
        inputs.forEach(input => {
            input.style.borderColor = 'hsl(0, 100%, 67%)';
        });
    } else if (enteredYear > year ||  enteredYear <= 0 || enteredMonth < 1 || enteredMonth > 12 || enteredDay < 1 || enteredDay > 31 || !isValidDate) {
        emptyError.forEach(empty => {
            empty.style.display = 'flex';
            empty.innerHTML = 'Must be a valid date';
        });
        labels.forEach(label => {
            label.style.color = 'hsl(0, 100%, 67%)';
        });
        inputs.forEach(input => {
            input.style.borderColor = 'hsl(0, 100%, 67%)';
        });
    } else {
        emptyError.forEach(empty => {
            empty.style.display = 'none';
        });
        labels.forEach(label => {
            label.style.color = 'hsl(0, 1%, 44%)';
        });
        inputs.forEach(input => {
            input.style.borderColor = 'hsl(259, 100%, 65%)';
        });

        let differenceYears = year - enteredYear;
        let differenceMonths = month - enteredMonth;
        if (differenceMonths < 0) {
            differenceYears -= 1;
            differenceMonths += 12;
        }

        let differenceDays = day - enteredDay;
        if (differenceDays < 0) {
            differenceMonths -= 1;
            let lastMonth = new Date(year, month - 1, 0); 
            differenceDays += lastMonth.getDate();
        }

        totalYears.innerHTML = differenceYears;
        totalMonths.innerHTML = differenceMonths;
        totalDays.innerHTML = differenceDays;
    }
});
