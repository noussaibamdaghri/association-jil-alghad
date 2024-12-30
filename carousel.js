let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    // Si l'index est supérieur ou égal au nombre de slides, le réinitialiser à 0
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    }
    // Si l'index est inférieur à 0, le réinitialiser au dernier index
    else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }

    // Cacher toutes les images et afficher seulement celle à l'index courant
    slides.forEach((slide, idx) => {
        if (idx === currentSlideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Fonction pour changer de slide
function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// Initialiser le carrousel au premier slide
showSlide(currentSlideIndex);

// Optionnel : Vous pouvez ajouter un timer pour changer les slides automatiquement
// setInterval(() => moveSlide(1), 5000); // Change de slide toutes les 5 secondes
