const joinForm = document.querySelector(".contact-form form");
const wrapperAlert = document.querySelector(".wrapper-alert");
const contactForm = document.querySelector(".contact-form");

joinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(joinForm);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  const name = data["first-name"] || "";
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];

  storedData.push(data);

  localStorage.setItem("formData", JSON.stringify(storedData));

  joinForm.reset();

  contactForm.style.display = "none";
  wrapperAlert.querySelector("h3").textContent = name;
  wrapperAlert.style.display = "block";

  setTimeout(() => {
    wrapperAlert.style.display = "none";
    contactForm.style.display = "block";
  }, 1500);
});

const nameInput = document.querySelector('input[name="first-name"]');

nameInput.addEventListener("input", function () {
  let value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
  this.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});

const lastnameInput = document.querySelector('input[name="last-name"]');

lastnameInput.addEventListener("input", function () {
  let value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
  this.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});

const telInput = document.querySelector('input[name="phone"]');

telInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

const emailInput = document.querySelector('input[name="email"]');

emailInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^@]*@com\.ua/g, "");
});

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
