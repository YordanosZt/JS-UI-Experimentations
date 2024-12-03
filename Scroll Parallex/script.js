const leftTree = document.querySelector(".tree-left"),
    rightTree = document.querySelector(".tree-right"),
    leftGate = document.querySelector(".gate-left"),
    rightGate = document.querySelector(".gate-right"),
    title = document.querySelector(".title");


window.addEventListener("scroll", () => {
    title.style.marginTop = `${window.scrollY * .7}px`
    leftTree.style.top = `-${window.scrollY * .5}px`
    leftTree.style.left = `-${window.scrollY * .5}px`
    rightTree.style.top = `-${window.scrollY * .5}px`
    rightTree.style.right = `-${window.scrollY * .5}px`
    leftGate.style.left = `${window.scrollY * .4 - 300}px`
    rightGate.style.right = `${window.scrollY * .4 - 300}px`
})