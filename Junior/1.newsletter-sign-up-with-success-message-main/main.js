document.addEventListener("DOMContentLoaded", function() {

    const emailInput = document.getElementById("emailInput");
    const emailSpan = document.getElementById("emailSpan");
    const emailError = document.getElementById("emailError");
    const emailSuccess = document.getElementById("emailSuccess");
    const suscribeForm = document.getElementById("suscribeForm");
    const backForm = document.getElementById("backForm");

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    emailInput.addEventListener("input", function() {
        const email = emailInput.value.trim();
        emailSpan.textContent = email; 

        if (validarEmail(email)) {
            emailInput.style.borderColor = "";
            emailError.style.display = 'none';
        } else {
            emailInput.style.borderColor = "hsl(4, 100%, 67%)";
            emailError.style.display = 'flex';
        }
    });

    suscribeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (validarEmail(email)) {
            emailSuccess.style.display = 'flex';
            suscribeForm.style.display = 'none';
            emailInput.value = ""
        } else {
            emailInput.style.borderColor = "hsl(4, 100%, 67%)";
            emailError.style.display = 'block';
        }
    });

    backForm.addEventListener("click", function() {
        emailSuccess.style.display = 'none';
        suscribeForm.style.display = 'flex';
    });

});
