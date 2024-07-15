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


document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            menu.classList.add('solid');
        } else {
            menu.classList.remove('solid');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            menu.classList.add('solid');
            menu.classList.remove('transparent');
        } else {
            menu.classList.add('transparent');
            menu.classList.remove('solid');
        }
    });
});



 //PROJETOS

function netflix() {
    window.open('https://grodrigues10.github.io/Filmes-React-JS/', '_blank'); 
  }

function viaCep(){
    window.open('https://grodrigues10.github.io/Projeto-Busca-CEP-ReactJS/', '_blank')
}

function jogoDaVelha(){
    window.open('https://grodrigues10.github.io/Projeto-Jogo-Da-Velha/', 'blank')
}

function snake(){
    window.open('https://grodrigues10.github.io/Projeto-Snake/', 'blank');
}

function clima(){
    window.open('https://grodrigues10.github.io/Projeto-Clima/', 'blank');
}

function starwars(){
    window.open('https://grodrigues10.github.io/Projeto-Star-Wars-Quiz/', 'blank')
}



// Introduzindo Descrição nos Projetos:





