const DashboardButton = document.querySelectorAll(".Navigation-Button");

DashboardButton.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".Navigation-Container").classList.toggle("Hide")
    })
});