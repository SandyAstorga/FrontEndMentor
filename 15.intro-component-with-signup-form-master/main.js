document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        function validateField(inputId, regex, placeholderText) {
            const input = document.getElementById(inputId);
            const value = input.value.trim();
            const alert = document.querySelector(`#${inputId}`).parentNode.querySelector('.alert');
            const error = document.querySelector(`#${inputId}`).parentNode.querySelector('.error');

            if (!regex.test(value)) {
                alert.style.display = 'flex';
                error.style.display = 'flex';
                input.placeholder = placeholderText;
                input.classList.add('error-text');
                return false; 
            } else {
                alert.style.display = 'none';
                error.style.display = 'none';
                input.classList.remove('error-text');
                return true;
            }
        }

        // Validate first name
        const firstNameValid = validateField('first', /^[a-zA-Z\s]+$/, '');
        // Validate last name
        const lastNameValid = validateField('last', /^[a-zA-Z\s]+$/, '');
        // Validate email
        const emailValid = validateField('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email@example.com');
        // Validate password
        const passwordValid = validateField('password', /.+/, '');

        // If all fields are valid, you can submit the form
        if (firstNameValid && lastNameValid && emailValid && passwordValid) {
            Swal.fire({
                icon: 'success',
                title: 'Form submitted successfully!',
                showConfirmButton: true,
            }).then(() => {
                form.submit();
            });
        }
    });
});
