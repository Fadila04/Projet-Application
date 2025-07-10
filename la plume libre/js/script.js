document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");
  const confirmation = document.querySelector("#confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Vérification simple (peut être enrichie si besoin)
    if (!name || !email || !message) {
      confirmation.textContent = "Merci de remplir tous les champs.";
      confirmation.classList.remove("hidden");
      confirmation.style.color = "red";
      return;
    }

    confirmation.textContent = `Merci pour votre message, ${name} !`;
    confirmation.classList.remove("hidden");
    confirmation.style.color = "#2e6417";

    form.reset(); // Efface le formulaire
  });
});


