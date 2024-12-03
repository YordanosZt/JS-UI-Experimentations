const container = document.querySelector(".container");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    container.classList.toggle("active");
});
