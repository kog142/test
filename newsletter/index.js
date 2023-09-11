let submit = document.querySelector('.submit');


    submit.addEventListener('click', (event) => {
        const inputData = document.querySelector('.email').value;
        const emailRegex = /@.*\.com|.fr/;
        const error = document.querySelector('.error');
        const email = document.querySelector('.email');
        if (emailRegex.test(inputData)){
            alert('Merci de vous être inscrit a notre newsletter!');
            error.style.display = 'none';
            email.style.border = 'none';
            email.style.color = 'black';
            window.location.href = "validation.html";
            
        } else {
            error.style.display = 'block';
            email.style.border = '1px solid red';
            email.style.color = 'red';
            event.preventDefault();
        }
    });
/*mobile*/

// Détecter la largeur de l'écran
const screenWidth = window.innerWidth || document.documentElement.clientWidth;

// Sélectionner l'image
const myImage = document.querySelector('.img');

if (screenWidth <= 414) {
    // Changer le chemin de l'image si la largeur de l'écran est inférieure ou égale à 768px
    myImage.src = 'assets/images/illustration-sign-up-mobile.svg';
} else {
    // Utilisez l'image par défaut si la condition de la media query n'est pas satisfaite
    myImage.src = 'assets/images/illustration-sign-up-desktop.svg';
}

if (screenWidth <= 540) {
    // Changer le chemin de l'image si la largeur de l'écran est inférieure ou égale à 768px
    myImage.src = 'assets/images/illustration-sign-up-mobile.svg';
} else {
    // Utilisez l'image par défaut si la condition de la media query n'est pas satisfaite
    myImage.src = 'assets/images/illustration-sign-up-desktop.svg';
}

