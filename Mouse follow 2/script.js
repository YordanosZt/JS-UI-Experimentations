const cursorEl = document.querySelector(".cursor");
const hoverEls = [
    ...document.querySelectorAll("img"),
    ...document.querySelectorAll("h1"),
];

document.addEventListener("mousemove", (e) => {
    cursorEl.style.opacity = "1";

    let x = e.clientX;
    let y = e.clientY;

    setTimeout(() => {
        cursorEl.style.top = `${y}px`;
        cursorEl.style.left = `${x}px`;
    }, 70);
});

document.onmouseleave = () => {
    cursorEl.style.opacity = "0";
};

hoverEls.forEach((el) => {
    el.addEventListener("mouseover", () => {
        cursorEl.classList.add("interact");
    });

    el.addEventListener("mouseout", () => {
        cursorEl.classList.remove("interact");
    });
});
