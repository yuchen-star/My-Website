const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(item =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

const card_images = document.querySelectorAll(".card__img");
card_images.forEach(item => {
    item.addEventListener("mouseenter", function () {
        this.classList.toggle("card__img--hover");
    });

    item.addEventListener("mouseleave", function () {
        this.classList.toggle("card__img--hover");
    });
});
