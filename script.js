document.querySelectorAll(".Navigation-Button").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".Navigation-Container").classList.toggle("active");
    })
})