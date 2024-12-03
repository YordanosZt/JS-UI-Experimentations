const cardEls = document.querySelectorAll(".card");

cardEls.forEach((card) => {
    card.addEventListener("click", () => {
        cardEls.forEach((card) => {
            card.classList.remove("active");
        });

        card.classList.add("active");
    });
});
