const submit = document.getElementById('submit');
const sent = document.getElementById('sent-message');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const generalRadio = document.getElementById('general-radio');
const supportRadio = document.getElementById('support-radio');
const generalCheck = document.getElementById('general-check');
const supportCheck = document.getElementById('support-check');
const enquiry = document.getElementById('enquiry');
const request = document.getElementById('request');
const consentCheck = document.getElementById('consent-checkbox');
const imageCheck = document.getElementById('image-check');

const errorFirstName = document.getElementById('error-first-name');
const errorLastName = document.getElementById('error-last-name');
const errorEmail = document.getElementById('error-email');
const errorValidEmail = document.getElementById('error-valid-email');
const errorRadioCheck = document.getElementById('error-radio-check');
const errorMessage = document.getElementById('error-message');
const errorConsent = document.getElementById('error-checkbox');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submit.addEventListener('click', function() {
    let isValid = true;

    if (firstName.value === '') {
        errorFirstName.style.display = 'flex';
        firstName.style.borderColor = 'hsl(0, 66%, 54%)';
        isValid = false;
    } else {
        errorFirstName.style.display = 'none';
        firstName.style.borderColor = '';
    }

    if (lastName.value === '') {
        errorLastName.style.display = 'flex';
        lastName.style.borderColor = 'hsl(0, 66%, 54%)';
        isValid = false;
    } else {
        errorLastName.style.display = 'none';
        lastName.style.borderColor = '';
    }

    if (email.value === '') {
        errorEmail.style.display = 'flex';
        email.style.borderColor = 'hsl(0, 66%, 54%)';
        isValid = false;
    } else if (!emailRegex.test(email.value)){
        errorValidEmail.style.display = 'flex'
        errorEmail.style.display = 'none';
        email.style.borderColor = '';
        isValid = false
    } else {
        errorEmail.style.display = 'none';
        errorValidEmail.style.display = 'none'
        email.style.borderColor = '';
    }

    if (message.value === '') {
        errorMessage.style.display = 'flex';
        message.style.borderColor = 'hsl(0, 66%, 54%)';
        isValid = false;
    } else {
        errorMessage.style.display = 'none';
        message.style.borderColor = '';
    }

    if (!generalRadio.checked && !supportRadio.checked) {
        errorRadioCheck.style.display = 'block';
        isValid = false;
    } else {
        errorRadioCheck.style.display = 'none';
    }

    if (!consentCheck.checked){
        errorConsent.style.display = 'block';
        isValid = false
    } else {
        errorConsent.style.display = 'none';
    }

    if (isValid) {
        sent.style.display = 'block';

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        message.value = '';

        generalRadio.checked = false;
        supportRadio.checked = false;
        consentCheck.checked = false;
        generalCheck.style.display = 'none';
        supportCheck.style.display = 'none';
        imageCheck.style.display = 'none';
        enquiry.style.background = '';
        enquiry.style.borderColor = 'var(--Grey500medium)';
        request.style.background = '';
        request.style.borderColor = 'var(--Grey500medium)';
    } else {
        sent.style.display = 'none';
    }
});

generalRadio.addEventListener('click', function() {
    generalCheck.style.display = 'block';
    enquiry.style.background = '#E0F1E7';
    enquiry.style.borderColor = '#063F36';
    supportCheck.style.display = 'none';
    supportRadio.checked = false;
    request.style.background = '';
    request.style.borderColor = 'var(--Grey500medium)';
    errorRadioCheck.style.display = 'none';
});

supportRadio.addEventListener('click', function() {
    supportCheck.style.display = 'block';
    request.style.background = '#E0F1E7';
    request.style.borderColor = '#063F36';
    generalCheck.style.display = 'none';
    generalRadio.checked = false;
    enquiry.style.background = '';
    enquiry.style.borderColor = 'var(--Grey500medium)';
    errorRadioCheck.style.display = 'none';
});

consentCheck.addEventListener('click', function() {

    if (consentCheck.checked) {
        imageCheck.style.display = 'block';
    } else {
        imageCheck.style.display = 'none';
    }
});

