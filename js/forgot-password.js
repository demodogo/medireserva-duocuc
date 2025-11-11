document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forgotPasswordForm');
    const emailInput = document.getElementById('emailForgot')

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        if (!isValidEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
            isValid = false;
        } else {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
        }

        if (!isValid) {
            return;
        }

        alert('Si tienes una cuenta, se enviará un enlace de recuperación :)')
        form.reset();

        emailInput.classList.remove('is-valid');


    })
})