document.addEventListener( 'DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('emailRegister');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('passwordRegister');
    const confirmPasswordInput = document.getElementById('passwordConfirm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        if (fullNameInput.value.trim().length < 3) {
            fullNameInput.classList.add('is-invalid');
            fullNameInput.classList.remove('is-valid');
            isValid = false;
        } else {
            fullNameInput.classList.add('is-valid');
            fullNameInput.classList.remove('is-invalid');
        }

        if (!isValidEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
            isValid = false;
        } else {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
        }

        if (!isValidPhoneNumber(phoneInput.value)) {
            phoneInput.classList.add('is-invalid');
            phoneInput.classList.remove('is-valid');
            isValid = false;
        } else {
            phoneInput.classList.add('is-valid');
            phoneInput.classList.remove('is-invalid');
        }

        if (!isStrongPassword(passwordInput.value)) {
            passwordInput.classList.add('is-invalid');
            passwordInput.classList.remove('is-valid');
            isValid = false;
        } else {
            passwordInput.classList.add('is-valid');
            passwordInput.classList.remove('is-invalid');
        }

        if (confirmPasswordInput.value === '' || passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.classList.add('is-invalid');
            confirmPasswordInput.classList.remove('is-valid');
            isValid = false;
        } else {
            confirmPasswordInput.classList.add('is-valid');
            confirmPasswordInput.classList.remove('is-invalid');
        }
        const user = {
            email: emailInput.value,
            password: passwordInput.value,
            fullName: fullNameInput.value,
            phone: phoneInput.value,
        }
        if (isValid) {
            alert('Registro exitoso');
            form.reset();
        }

        [fullNameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput].forEach(input => { input.classList.remove('is-valid')})
    })
})