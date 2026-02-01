const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const title = document.getElementById("title");
const question = document.getElementById("question");
const message = document.getElementById("message");
const image = document.getElementById("hero-img");

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

// NO CLICK
noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.textContent =
    "oh ante nuvvu NO nokkithey silent ga untanu ani anukunnava 🤨";
});

// YES CLICK
yesBtn.addEventListener("click", () => {
  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  title.textContent = "Yeeeesss 💕";
  question.textContent = "See you on the 14th, Princess 😌";
  message.textContent =
    "NO tap chesi untey nee pani aipoyedhi 😤👊🏻";
  message.classList.remove("hidden");

  image.src = "images/dance.gif";

  launchHearts();
});

// HEART CONFETTI
function launchHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "22px";
    heart.style.animation = "floatUp 2.5s ease forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2500);
  }
}
