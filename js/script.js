function changeLanguage(language) {
 document.documentElement.lang = language;
 if (language === "en") {
  document.querySelector("h2").textContent = "Hello!";
  document.querySelector("p").textContent =
   "My name is Marília Garcia, Fullstack Developer";
  document.querySelectorAll("nav a")[0].textContent = "Home";
  document.querySelectorAll("nav a")[1].textContent = "About";
  document.querySelectorAll("nav a")[2].textContent = "Projects";
 } else if (language === "fr") {
  document.querySelector("h2").textContent = "Bonjour!";
  document.querySelector("p").textContent =
   "Je m'appelle Marília Garcia, Développeuse Fullstack";
  document.querySelectorAll("nav a")[0].textContent = "Accueil";
  document.querySelectorAll("nav a")[1].textContent = "À propos";
  document.querySelectorAll("nav a")[2].textContent = "Projets";
 } else {
  document.querySelector("h2").textContent = "Olá!";
  document.querySelector("p").textContent =
   "Meu nome é Marília Garcia, Desenvolvedora Fullstack";
  document.querySelectorAll("nav a")[0].textContent = "Início";
  document.querySelectorAll("nav a")[1].textContent = "Sobre";
  document.querySelectorAll("nav a")[2].textContent = "Projetos";
 }
}
