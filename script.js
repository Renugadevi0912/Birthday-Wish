
// GET SURPRISE BUTTON AND MESSAGE

const surpriseBtn = document.getElementById("surpriseBtn");

const surpriseMessage = document.getElementById("surpriseMessage");

// OPEN BIRTHDAY SURPRISE

surpriseBtn.addEventListener("click", function () {

    surpriseMessage.classList.toggle("show");

    if (surpriseMessage.classList.contains("show")) {

        surpriseBtn.textContent = "Surprise Opened! 💗";

        createHearts();

    } else {

        surpriseBtn.textContent = "Open Your Surprise 💗";

    }

});

// PHOTO GALLERY LIGHTBOX

const photos = document.querySelectorAll(
    ".polaroid img, .photo-frame img"
);

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

// OPEN PHOTO

photos.forEach(function (photo) {

    photo.addEventListener("click", function () {

        lightboxImage.src = photo.src;

        lightbox.classList.add("active");

    });

});

// CLOSE PHOTO

closeLightbox.addEventListener("click", function () {

    lightbox.classList.remove("active");

});

// CLOSE WHEN CLICKING OUTSIDE PHOTO

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

// CLOSE WITH ESCAPE KEY

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});

// FLOATING HEART ANIMATION

function createHearts() {

    const emojis = ["💗", "💕", "💖", "🌸", "✨"];

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.top = "-30px";

        heart.style.fontSize = "25px";

        heart.style.zIndex = "200";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration = 2500 + Math.random() * 2500;

        const animation = heart.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translateY(110vh) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        animation.onfinish = function () {

            heart.remove();

        };

    }

// BIRTHDAY CAKE CUTTING EFFECT

const cutCakeBtn = document.getElementById("cutCakeBtn");
const cakeContainer = document.querySelector(".cake-container");
const cakeMessage = document.getElementById("cakeMessage");
const cakeConfetti = document.getElementById("cakeConfetti");

cutCakeBtn.addEventListener("click", function () {

    // Start cake cutting
    cakeContainer.classList.add("cut");

    // Change button
    cutCakeBtn.textContent = "Cake Cut Successfully! 💗";
    cutCakeBtn.disabled = true;

    // Show birthday message
    setTimeout(() => {
        cakeMessage.textContent =
            "Happy Birthday D! My Forever 🎂💗 Make a beautiful wish!";

        cakeMessage.classList.add("show");
    }, 800);

    // Create confetti
    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti-piece");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor = [
            "#ff69a6",
            "#ffd700",
            "#c084fc",
            "#ff9ebc",
            "#ffffff"
        ][Math.floor(Math.random() * 5)];

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        cakeConfetti.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4500);
    }

});


}