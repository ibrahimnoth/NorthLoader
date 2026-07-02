const search = document.getElementById("search");

if (search) {
    search.addEventListener("input", function () {

        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const title = card.querySelector(".title").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}
