
const btn = document.querySelector('#btn');
const input = document.querySelector('#email');
const error = document.querySelector('.error');
const message = document.getElementById('message-error')

btn.addEventListener('click', (e)=>{
    const emailValue = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    

    if (emailRegex.test(emailValue)) {
        btn.classList.remove('invalid');
        btn.classList.add('valid');
        error.style.display = 'none';
        message.style.display = 'none';
    } else {
        btn.classList.remove('valid');
        btn.classList.add('invalid');
        error.style.display = 'block';
        message.style.display = 'block';
    }
    
});