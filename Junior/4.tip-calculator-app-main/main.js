let bill = document.getElementById('bill');
let person = document.getElementById('person');
let percentButtons = document.querySelectorAll('.percent');
let amount = document.getElementById('amount');
let total = document.getElementById('total');
let reset = document.getElementById('reset');
let custom = document.getElementById('custom');
let inputCustom = document.getElementById('input-custom');
let error =  document.getElementById('error');


let tipPercent = 0;
const originalButtonStyles = [];
let lastActiveButton = null;

function activateButton(button) {
    button.style.backgroundColor = 'hsl(185, 41%, 84%)';
    button.style.color = 'hsl(183, 100%, 15%)';
    lastActiveButton = button;
};

function restoreButtonState(button, originalStyles) {
    button.style.backgroundColor = originalStyles.backgroundColor;
    button.style.color = originalStyles.color;
};

percentButtons.forEach(button => {
    const originalStyles = {
        backgroundColor: button.style.backgroundColor,
        color: button.style.color
    };

    originalButtonStyles.push(originalStyles);

    button.addEventListener('click', () => {
        if (lastActiveButton && lastActiveButton !== button) {
            restoreButtonState(lastActiveButton, originalButtonStyles[percentButtons.indexOf(lastActiveButton)]);
        }
        
        activateButton(button);

        lastActiveButton = button;

        tipPercent = parseFloat(button.textContent) / 100;
        calculateTip();
    });
});

custom.addEventListener('click', () => {
    inputCustom.style.display = 'block';
    inputCustom.addEventListener('input', () => {
        tipPercent = parseFloat(inputCustom.value) / 100 || 0;
        calculateTip();
    });
});

reset.addEventListener('click', () => {
    bill.value = '';
    person.value = '';
    tipPercent = 0;
    inputCustom.value = '';
    inputCustom.style.display = 'none';
    amount.textContent = '$0.00';
    total.textContent = '$0.00';

    percentButtons.forEach((button, index) => {
        restoreButtonState(button, originalButtonStyles[index]);
    });

    lastActiveButton = null;
});

bill.addEventListener('input', calculateTip);
person.addEventListener('input', calculateTip);

function calculateTip() {
    const billValue = parseFloat(bill.value) || 0;
    const personValue = parseInt(person.value) || 0;
    
    if (personValue === 0 && billValue > 0) {
        error.style.display = 'block';
        person.style.border = '1px solid red';
    } else {
        error.style.display = 'none';
        if (billValue > 0 && personValue > 0) {
            const tipAmount = (billValue * tipPercent) / personValue;
            const totalAmount = (billValue + (billValue * tipPercent)) / personValue;
            amount.textContent = `$${tipAmount.toFixed(2)}`;
            total.textContent = `$${totalAmount.toFixed(2)}`;
            person.style.border = '';
        } else {
            amount.textContent = '$0.00';
            total.textContent = '$0.00';
        };
    };
};

