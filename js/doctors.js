document.addEventListener("DOMContentLoaded", () => {
    const doctors = [
        { name: "Dra. Sofía Pérez", specialty: "Cardiología", rating: 4.8 },
        { name: "Dr. Ricardo López", specialty: "Medicina General", rating: 4.5 },
        { name: "Dra. Camila Silva", specialty: "Dermatología", rating: 4.7 },
        { name: "Dr. José Fernández", specialty: "Neurología", rating: 4.6 },
    ];

    const doctorsList = document.getElementById("doctorsList");
    const doctorSelect = document.getElementById("doctorSelect");

    doctors.forEach((doc) => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-3";

        col.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body text-center">
          <img src="https://placecats.com/300/200" alt="${doc.name}" class="rounded-circle mb-3" width="80" height="80">
          <h5 class="card-title mb-1">${doc.name}</h5>
          <p class="text-muted small mb-2">${doc.specialty}</p>
          <p class="text-warning mb-2">⭐ ${doc.rating}</p>
        </div>
      </div>
    `;
        doctorsList.appendChild(col);

        const option = document.createElement("option");
        option.value = doc.name;
        option.textContent = `${doc.name} - ${doc.specialty}`;
        doctorSelect.appendChild(option);
    });

    const form = document.getElementById("appointmentForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        const fields = ["doctorSelect", "appointmentDate", "appointmentTime", "appointmentReason"];
        fields.forEach((id) => {
            const input = document.getElementById(id);
            if (!input.value.trim()) {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
                isValid = false;
            } else {
                input.classList.add("is-valid");
                input.classList.remove("is-invalid");
            }
        });

        const dateInput = document.getElementById("appointmentDate");
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // limpiar horas

        if (selectedDate < today) {
            dateInput.classList.add("is-invalid");
            dateInput.classList.remove("is-valid");
            isValid = false;
        }

        if (!isValid) return;

        alert("Hora reservada con éxito");
        form.reset();
        fields.forEach((id) => document.getElementById(id).classList.remove("is-valid"));
    });
});
