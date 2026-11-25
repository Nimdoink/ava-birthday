(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  const backLayer = document.querySelector("#confetti-back");
  const frontLayer = document.querySelector("#confetti-front");
  const colors = ["#e875a2", "#f4a8c4", "#d5ad5c", "#f4d98b", "#fffaf0", "#c95f88"];

  function addConfetti(layer, count) {
    for (let index = 0; index < count; index += 1) {
      const piece = document.createElement("span");
      const isCircle = Math.random() < 0.28;
      piece.className = `confetti-piece${isCircle ? " is-circle" : ""}`;
      piece.style.setProperty("--left", `${Math.random() * 100}%`);
      piece.style.setProperty("--width", `${isCircle ? 6 : 5 + Math.random() * 5}px`);
      piece.style.setProperty("--height", `${isCircle ? 6 : 9 + Math.random() * 8}px`);
      piece.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
      piece.style.setProperty("--fall-time", `${8 + Math.random() * 11}s`);
      piece.style.setProperty("--fall-delay", `${-Math.random() * 19}s`);
      piece.style.setProperty("--drift", `${Math.random() * 140 - 70}px`);
      piece.style.setProperty("--spin", `${Math.random() * 900 - 450}deg`);
      layer.append(piece);
    }
  }

  function addPartyItems(layer, items) {
    items.forEach((item) => {
      const piece = document.createElement("span");
      piece.className = "party-item";
      piece.textContent = item;
      piece.setAttribute("aria-hidden", "true");
      piece.style.setProperty("--left", `${Math.random() * 100}%`);
      piece.style.setProperty("--fall-time", `${13 + Math.random() * 9}s`);
      piece.style.setProperty("--fall-delay", `${-Math.random() * 19}s`);
      piece.style.setProperty("--drift", `${Math.random() * 120 - 60}px`);
      piece.style.setProperty("--spin", `${Math.random() * 100 - 50}deg`);
      layer.append(piece);
    });
  }

  addConfetti(backLayer, 45);
  addConfetti(frontLayer, 75);
  addPartyItems(backLayer, ["🎈", "✨"]);
  addPartyItems(frontLayer, ["🍾", "🥂", "🎉", "🎂", "🎈", "🥂", "✨", "🍾"]);
})();
