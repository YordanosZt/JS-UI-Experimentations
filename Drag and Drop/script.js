const containerEl01 = document.querySelector(".container01");
const containerEl02 = document.querySelector(".container02");
const lists = document.querySelectorAll(".list");

for (list of lists) {
    list.addEventListener("drag", (e) => {
        let selected = e.target;
        selected.style.opacity = 0;

        containerEl02.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        containerEl02.addEventListener("drop", () => {
            containerEl02.appendChild(selected);
        });

        containerEl01.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        containerEl01.addEventListener("drop", () => {
            containerEl01.appendChild(selected);
        });

        document.body.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        document.body.addEventListener("drop", () => {
            selected.style.opacity = 1;
            selected = null;
        });
    });
}
