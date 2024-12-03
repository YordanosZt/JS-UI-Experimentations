let checkBox = '<input type="checkbox" class="checkbox">';

function createCheckboxes() {
    document.body.innerHTML += checkBox;
}

for (let index = 0; index < 4000; index++) {
    createCheckboxes();
}

let checkBoxEls = document.querySelectorAll(".checkbox");

checkBoxEls.forEach((el) => {
    el.addEventListener("mouseover", () => {
        el.setAttribute("checked", true);
    });
});
