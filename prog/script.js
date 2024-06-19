document.getElementById('meuForm').addEventListener('submit', (event) => {
    var submitBtn = document.getElementById('submitBtn');
    var loadingIndicator = document.getElementById('loading');
    
    submitBtn.disabled = true;
    loadingIndicator.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const menuHamburguer = document.getElementById("menuHamburguer");

    menuIcon.addEventListener("click", () => {
        if (menuHamburguer.classList.contains("show")) {
            menuHamburguer.classList.remove("show");
            setTimeout(() => {
                menuHamburguer.style.display = "none";
            }, 300); // Aguarda a transição terminar antes de ocultar o menu
        } else {
            menuHamburguer.style.display = "flex";
            setTimeout(() => {
                menuHamburguer.classList.add("show");
            }, 10); // Adiciona a classe após definir display flex
        }
    });
});

