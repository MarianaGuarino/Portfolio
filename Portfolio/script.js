document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const menuIcon = document.getElementById("menuIcon");
    const menuNav = document.getElementById("menuNav");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
            contactForm.reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    menuIcon.addEventListener("click", function() {
        menuNav.classList.toggle("menu-shown");
    });
});
