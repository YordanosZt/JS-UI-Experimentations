const cursorEl = document.querySelector(".cursor-follow");
const h1 = document.querySelector("h1");

document.addEventListener("mousemove", (e) => {
    cursorEl.style.left = `${e.pageX}px`;
    cursorEl.style.top = `${e.pageY}px`;
    cursorEl.style.display = "block";
});

document.addEventListener("mouseleave", () => {
    cursorEl.style.display = "none";
});

h1.addEventListener("mousemove", () => {
    cursorEl.classList.add("active")
});
h1.addEventListener("mouseleave", mouseStop)

function mouseStop() {
    cursorEl.classList.remove("active")
}