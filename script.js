window.addEventListener('load', function () {
    // Coloca aquí el código que deseas ejecutar cuando todos los recursos de la página, incluyendo imágenes y hojas de estilo, se hayan cargado completamente.

    const asciiText = document.querySelector('.ascii-text');
    const toggleSoundButton = document.getElementById('toggleSoundButton');
    const audio = document.getElementById('myAudio');
    
    let rotation = 0;
    let soundEnabled = false;

    function rotateText() {

        rotation += 5;
        audio.play();
        asciiText.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(rotateText);
    }

    rotateText();
    
    toggleSoundButton.addEventListener('click', () => {
        if (soundEnabled) {
            // audio.pause(); // Pausa el sonido
            // toggleSoundButton.textContent = 'hace click';
        } else {
            audio.play(); // Reproduce el sonido
            
            toggleSoundButton.textContent = 'Alla le estan Clickeando !!! ';
            this.setTimeout(()=> {
                toggleSoundButton.style.display = 'none';  
            }, 2500)
            // toggleSoundButton.style.display = 'none'; 
        }
        soundEnabled = !soundEnabled; // Alterna el estado del sonido
    });

    
});