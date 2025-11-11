document.addEventListener("DOMContentLoaded", () => {
    const localStorageRole = localStorage.getItem('role');

    const title = document.getElementById("appointmentsTitle");
    const patientSection = document.getElementById("patientAppointments");
    const doctorSection = document.getElementById("doctorAppointments");

    if (localStorageRole === "admin") {
        title.textContent = "Reservas de pacientes";
        patientSection.classList.add("d-none");
        doctorSection.classList.remove("d-none");
    } else {
        title.textContent = "Mis reservas";
        patientSection.classList.remove("d-none");
        doctorSection.classList.add("d-none");
    }
});
