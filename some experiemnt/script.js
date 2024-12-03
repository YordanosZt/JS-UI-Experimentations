const container = document.querySelector(".container");

// let characters =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321";
let characters = "01"

function randomText() {
    let i = 0;
    let textContent = "";

    while (i < 1148) {
        i++;
        textContent +=
            characters[Math.floor(Math.random() * characters.length)];
    }

    container.textContent = textContent;
}

randomText();

container.addEventListener("mousemove", e => {
    randomText();

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = container.offsetLeft + container.clientWidth / 4;
    const centerY = container.offsetTop + container.clientHeight / 6;

    const moveX = (centerX - mouseX);
    const moveY = (centerY - mouseY);

    container.style = `-webkit-mask-position: ${-moveX}px ${-moveY}px;`;
    
});
