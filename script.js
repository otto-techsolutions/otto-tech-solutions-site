// Setează automat anul curent în footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Simulare trimitere formular (fără backend încă)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        statusEl.textContent = "Mulțumim! Mesajul tău a fost înregistrat (demo).";
        statusEl.style.color = "#4ade80";

        // Golește câmpurile
        form.reset();

        // Șterge mesajul după câteva secunde
        setTimeout(() => {
            statusEl.textContent = "";
        }, 4000);
    });
}
