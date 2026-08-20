/* START BUTTON */
const startButton = document.querySelector(".startButton");

if(startButton) {
    startButton.addEventListener("click", function() {
        window.location.href = "homePage.html";
    });
}

/* HOME PAGE NAVIGATION */
const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

        this.classList.add("active");
    });

});
