let callToAction = document.querySelectorAll("button")
let eventCard = document.querySelectorAll(".eventCard")
let form = document.querySelector("form")

callToAction.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.location.href = "register.html";
    });
} );

eventCard.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.cssText = "cursor: pointer; background-color: #f5f5f5;";
    });

    card.addEventListener("mouseout", () => {
        card.style.cssText = "";
    });
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Submission Success!");
});