function isValidEmail(value) {
    value = value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

function isValidPassword(value) {
    value = value.trim();
    return value.length >= 6;
}

function isValidPhoneNumber(value) {
    value = value.trim();
    const onlyDigits = /^\d+$/;
    return onlyDigits.test(value) && value.length >= 8;
}

function isStrongPassword(value) {
    const password = value.trim();

    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    return (
        hasMinLength &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSymbol
    );
}

const logoutButton = document.getElementById('logoutButton');

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('role');
        window.location.href = 'login.html';
    })
}


function toggleSection(sectionEl, shouldShow) {
    if (!sectionEl) return;
    if (shouldShow) {
        sectionEl.classList.remove('d-none');
    } else {
        sectionEl.classList.add('d-none');
    }
}