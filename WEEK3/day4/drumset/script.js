// Fonction pour jouer le son
function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.wav`);
    audio.currentTime = 0; // Réinitialise le son pour pouvoir le rejouer immédiatement
    audio.play();
}

// Gestion des clics sur les boutons
document.querySelectorAll('.drum-pad').forEach(pad => {
    pad.addEventListener('click', function() {
        const sound = this.getAttribute('data-sound');
        playSound(sound);
        this.classList.add('active');
        setTimeout(() => this.classList.remove('active'), 100);
    });
});

// Gestion des touches du clavier
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);
    
    if (pad) {
        const sound = pad.getAttribute('data-sound');
        playSound(sound);
        pad.classList.add('active');
        setTimeout(() => pad.classList.remove('active'), 100);
    }
}); 