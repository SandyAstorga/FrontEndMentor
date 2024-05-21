
let notice = document.getElementById('notice');
let email = document.getElementById('email');
let error = document.getElementById('error');


function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

notice.onclick = function (event) {
    event.preventDefault();
    let val = email.value;

    if (validarEmail(val)) {
        error.style.display = 'none';
        email.style.borderColor = "hsl(223, 87%, 63%)";

        swal("Good job!", "Your subscription has been sent!", "success");
        email.value = "";

    } else {

        email.style.borderColor = "hsl(354, 100%, 66%)";
        error.style.display = 'block'
    }
}