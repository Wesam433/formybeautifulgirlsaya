function yesClicked() {
    launchConfetti();
    createHeartExplosion();

    setTimeout(() => {
        alert("GUYS SHE SAID YES LETSGOOOOOOOOOOOOOO!! (ty lil bro) 😔");
    }, 600);
}

/* Confetti */
function launchConfetti() {
    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}

/* Hearts */
function createHeartExplosion() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️😳😮";
        heart.style.left = 50 + (Math.random() * 50 - 20) + "vw";
        heart.style.fontSize = 20 + Math.random() * 20 + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 90000);
    }
}
function moveNo(btn) {
  const popup = document.getElementById("cutePopup");

  const messages = [
    "Bitch!",
    "MOVE YOUR FATASS FINGER",
    "NO",
    "FUCK YOU",
    "UGH"
  ];

  popup.textContent =
    messages[Math.floor(Math.random() * messages.length)];

  // Position popup near button
  const rect = btn.getBoundingClientRect();
  popup.style.left = rect.left + rect.width / 2 + "px";
  popup.style.top = rect.top - 10 + "px";

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);

  // Move the button
  const x = Math.random() * 200 - 200;
  const y = Math.random() * 200 - 200;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}



