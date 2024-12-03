const card = document.querySelector(".card");
const hoverableEl = document.querySelectorAll(".hoverable");

card.addEventListener("mousemove", (e) => {
    let x = (innerWidth / 2 - e.pageX) / 10;
    let y = (innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;

    hoverableEl[0].style.transform = `translate3d(0, 0, 200px)`;
    hoverableEl[1].style.transform = `translate3d(0, 0, 170px)`;
});

card.addEventListener("mouseout", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    hoverableEl[0].style.transform = `translate3d(0, 0, 0)`;
    hoverableEl[1].style.transform = `translate3d(0, 0, 0)`;
});
