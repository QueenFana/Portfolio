//menu
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    menu.classList.toggle('active');
});
 
//Textes
const texts = [ "Web Developper ", "Mobile Developper ", "Graphiste "]; // Liste des noms
let index = 0; // Index du texte actuel
let charIndex = 0; // Position du caractère actuel dans le texte
let isDeleting = false; // Indicateur d'effacement
const typingSpeed = 100; // Vitesse de frappe
const deletingSpeed = 50; // Vitesse d'effacement
const pause = 1500; // Pause avant de changer de texte
const textElement = document.getElementById("text");

function typeWriter() {
    const currentText = texts[index]; // Texte actuel

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--); // Efface
    } else {
        textElement.textContent = currentText.substring(0, charIndex++); // Écrit
    }

    // Si le texte est totalement écrit
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true; // Passe en mode effacement
        setTimeout(typeWriter, pause); // Pause avant d'effacer
    }
    // Si le texte est totalement effacé
    else if (isDeleting && charIndex === 0) {
        isDeleting = false; // Passe en mode écriture
        index = (index + 1) % texts.length; // Passe au texte suivant
        setTimeout(typeWriter, 300); // Petite pause avant de réécrire
    } else {
        // Continue à écrire ou à effacer
        setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Démarrer l'animation
typeWriter();


