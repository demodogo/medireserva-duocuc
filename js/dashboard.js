


document.addEventListener('DOMContentLoaded', () => {
    const localStorageRole = localStorage.getItem('role');

    const titleEl = document.getElementById('dashboardTitle');
    const subtitleEl = document.getElementById('dashboardSubtitle');

    const patientOverviewCards = document.getElementById('patientOverviewCards');
    const patientQuickActions = document.getElementById('patientQuickActions');
    const patientUpcomingApp = document.getElementById('patientUpcomingAppointments');

    const doctorOverviewCards = document.getElementById('doctorOverviewCards');
    const doctorQuickActions = document.getElementById('doctorQuickActions');
    const doctorUpcomingApp = document.getElementById('doctorUpcomingAppointments');


    if (localStorageRole === 'patient') {
        titleEl.textContent = 'Bienvenido, Paciente 👋';
        subtitleEl.textContent = 'Aquí puedes revisar tus próximas horas, reservar una nueva o actualizar tu información.'
        toggleSection(doctorOverviewCards, false);
        toggleSection(doctorQuickActions, false);
        toggleSection(doctorUpcomingApp, false);

        toggleSection(patientOverviewCards, true);
        toggleSection(patientQuickActions, true);
        toggleSection(patientUpcomingApp, true);

    } else if (localStorageRole === 'admin') {
        titleEl.textContent = 'Bienvenido, Doctor 👋';
        subtitleEl.textContent = 'Aquí puedes revisar tus próximas horas o actualizar tu información.'
        toggleSection(patientOverviewCards, false);
        toggleSection(patientQuickActions, false);
        toggleSection(patientUpcomingApp, false);

        toggleSection(doctorOverviewCards, true);
        toggleSection(doctorQuickActions, true);
        toggleSection(doctorUpcomingApp, true);
    }
});