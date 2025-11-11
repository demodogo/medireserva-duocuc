document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');



    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const fullNameInput = document.getElementById('fullNameProfile');
        const emailInput = document.getElementById('emailProfile');
        const phoneInput = document.getElementById('phoneProfile');
        const passwordInput = document.getElementById('newPassword');
        const confirmPasswordInput = document.getElementById('confirmNewPassword');
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

        const isChangingPassword = passwordInput.value.trim() !== '' || confirmPasswordInput.value.trim() !== '';

        if (isChangingPassword) {
            if (!isStrongPassword(passwordInput.value)) {
                passwordInput.classList.add('is-invalid');
                passwordInput.classList.remove('is-valid');
                isValid = false;
            } else {
                passwordInput.classList.add('is-valid');
                passwordInput.classList.remove('is-invalid');
            }

            if (confirmPasswordInput.value !== passwordInput.value) {
                confirmPasswordInput.classList.add('is-invalid');
                confirmPasswordInput.classList.remove('is-valid');
                isValid = false;
            } else {
                confirmPasswordInput.classList.add('is-valid');
                confirmPasswordInput.classList.remove('is-invalid');
            }
        }

        if (!isValid) return;

        alert('Perfil actualizado');
        form.reset();

        [fullNameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput].forEach(input => { input.classList.remove('is-valid')})
    })
})