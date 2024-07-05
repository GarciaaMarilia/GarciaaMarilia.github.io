function changeLanguage(language) {
 document.documentElement.lang = language;
 if (language === "en") {
  document.querySelector("h2").textContent = "Hello, visitor! 👋";
  document.querySelector("p").textContent =
   "My name is Marília Garcia, Front-end Developer";
  document.querySelectorAll("nav a")[0].textContent = "Home";
  document.querySelectorAll("nav a")[1].textContent = "About";
  document.querySelectorAll("nav a")[2].textContent = "Projects";
  document.querySelectorAll("nav a")[3].textContent = "Contact";
 } else if (language === "fr") {
  document.querySelector("h2").textContent = "Bonjour, visiteur! 👋";
  document.querySelector("p").textContent =
   "Je m'appelle Marília Garcia, Développeur Front-end";
  document.querySelectorAll("nav a")[0].textContent = "Accueil";
  document.querySelectorAll("nav a")[1].textContent = "À propos";
  document.querySelectorAll("nav a")[2].textContent = "Projets";
  document.querySelectorAll("nav a")[3].textContent = "Contact";
 } else {
  document.querySelector("h2").textContent = "Olá, visitante! 👋";
  document.querySelector("p").textContent =
   "Meu nome é Marília Garcia, Desenvolvedor Front-end";
  document.querySelectorAll("nav a")[0].textContent = "Início";
  document.querySelectorAll("nav a")[1].textContent = "Sobre";
  document.querySelectorAll("nav a")[2].textContent = "Projetos";
  document.querySelectorAll("nav a")[3].textContent = "Contato";
 }
}

const toggleSwitch = document.querySelector(
 '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
 document.documentElement.setAttribute("data-theme", currentTheme);

 if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleSwitch.checked = true;
 }
}

function switchTheme(e) {
 if (e.target.checked) {
  document.documentElement.setAttribute("data-theme", "dark");
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
 } else {
  document.documentElement.setAttribute("data-theme", "light");
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
 }
}

toggleSwitch.addEventListener("change", switchTheme, false);
