function adjustline() {
  const h2 = document.querySelector("h2");
  const line = document.querySelector(".line");
  const middleDot = line.children[1];

  const h2Width = h2.offsetWidth;
  const middleDotWidth = middleDot.offsetWidth;

  const sideLineWidth = (h2Width - middleDotWidth) / 2;

  line.children[0].style.width = `${sideLineWidth}px`;
  line.children[2].style.width = `${sideLineWidth}px`;
}

window.addEventListener("load", adjustline);
