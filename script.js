// Floating bubbles generator 💖
for (let i = 0; i < 20; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * 100 + "%";
  const size = Math.random() * 40 + 10 + "px";
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.body.appendChild(bubble);
}

// Fade-in animation for links ✨
window.addEventListener("load", () => {
  const links = document.querySelectorAll(".link");
  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
    }, index * 150);
  });
});
