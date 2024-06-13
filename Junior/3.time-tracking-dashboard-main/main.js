let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');
let containerDaily = document.querySelectorAll('.daily');
let containerWeekly = document.querySelectorAll('.weekly');
let containerMonthly = document.querySelectorAll('.monthly');

const hideElements = (elements) => {
    elements.forEach(element => {
        element.style.display = 'none';
    });
};

const showElements = (elements) => {
    elements.forEach(element => {
        element.style.display = 'block';
    });
};


daily.addEventListener('click', function() {
    hideElements(containerWeekly);
    hideElements(containerMonthly);
    showElements(containerDaily);

    daily.style.color = "white";
    weekly.style.color = "";
    monthly.style.color = "";
});


weekly.addEventListener('click', function() {
    hideElements(containerDaily);
    hideElements(containerMonthly);
    showElements(containerWeekly);

    weekly.style.color = "white";
    daily.style.color = "";
    monthly.style.color = "";
});

monthly.addEventListener('click', function() {
    hideElements(containerDaily);
    hideElements(containerWeekly);
    showElements(containerMonthly);

    monthly.style.color = "white";
    weekly.style.color = "";
    daily.style.color = "";
});
