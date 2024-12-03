const menuEls = document.querySelectorAll(".nav-bar li");
const contentEls = document.querySelectorAll(".content");

const handleMenuClick = (idx) => {
    menuEls.forEach((el) => {
        el.classList.remove("active");
    });

    contentEls.forEach((el) => {
        el.classList.remove("active");
    });

    menuEls[idx].classList.add("active");
    contentEls[idx].classList.add("active");
};

menuEls.forEach((el, idx) => {
    el.addEventListener("click", () => {
        handleMenuClick(idx);
    });
});
