document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        const emailValue = emailInput.value;

        if (!isValidEmail(emailValue)) {
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
            isValid = false;
        } else {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
        }

        const passwordValue = passwordInput.value

        if (!isValidPassword(passwordValue)) {
            passwordInput.classList.add('is-invalid');
            passwordInput.classList.remove('is-valid');
            isValid = false;
        } else {
            passwordInput.classList.add('is-valid');
            passwordInput.classList.remove('is-invalid');
        }

        if (isValid) {
            alert('Login exitoso');

            emailInput.classList.remove('is-valid');
            passwordInput.classList.remove('is-valid');

            const selectedRoleInput = document.querySelector('input[name="role"]:checked');
            const selectedRoleValue = selectedRoleInput ? selectedRoleInput.value : 'patient';

            localStorage.setItem('role', selectedRoleValue);
            form.reset();
            window.location.href = "dashboard.html";
        }
    })
})