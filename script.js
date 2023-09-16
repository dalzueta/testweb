const asciiText = document.querySelector('.ascii-text');

let rotation = 0;

function rotateText() {
    rotation += 5;
    asciiText.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotateText);
}

rotateText();
