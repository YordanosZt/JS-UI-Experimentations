const movementContainer = document.querySelector(".container");

let reversed = false;

document.addEventListener("keypress", (e) => {
    reversed = !reversed;

    movementContainer.style.animationDirection = reversed
        ? "reverse"
        : "normal";
});
