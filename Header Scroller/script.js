const boxEls = document.querySelectorAll(".box");

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;

    boxEls[1].style.width = `${mouseX}px`;
});
