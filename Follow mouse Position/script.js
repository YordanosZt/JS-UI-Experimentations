const cursor = document.querySelector(".cursor");
let timeout;

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.display = "block";

    function mouseStop() {
        cursor.style.display = "none";
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStop, 1000);
});

document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
});
