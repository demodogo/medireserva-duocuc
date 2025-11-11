document.addEventListener('DOMContentLoaded', () =>{
    const localStorageRole = localStorage.getItem('role');
    if (localStorageRole) {
        window.location.href = "dashboard.html";
    } else {
        window.location.href = "login.html";
    }
});