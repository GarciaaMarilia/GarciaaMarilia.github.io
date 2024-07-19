function changeLanguage(language) {
 document.documentElement.lang = language;
 if (language === "en") {
  document.querySelector("#inicio .section-title").textContent = "Hello!";
  document.querySelector("#inicio .intro-text").textContent =
   "My name is Marília Garcia, Fullstack Developer";
  document.querySelectorAll("nav a")[0].textContent = "Home";
  document.querySelectorAll("nav a")[1].textContent = "About";
  document.querySelectorAll("nav a")[2].textContent = "Projects";
  document.querySelector("#sobre .section-title").textContent = "About";
  document.querySelector("#projetos .section-title").textContent = "Projects";
  document.querySelector("#inicio h1").textContent = "Connect with me:";
 } else if (language === "fr") {
  document.querySelector("#inicio .section-title").textContent = "Bonjour!";
  document.querySelector("#inicio .intro-text").textContent =
   "Je m'appelle Marília Garcia, Développeuse Fullstack";
  document.querySelectorAll("nav a")[0].textContent = "Accueil";
  document.querySelectorAll("nav a")[1].textContent = "À propos";
  document.querySelectorAll("nav a")[2].textContent = "Projets";
  document.querySelector("#sobre .section-title").textContent = "À propos";
  document.querySelector("#projetos .section-title").textContent = "Projets";
  document.querySelector("#inicio h1").textContent = "Connectez-vous avec moi:";
 } else {
  document.querySelector("#inicio .section-title").textContent = "Olá!";
  document.querySelector("#inicio .intro-text").textContent =
   "Meu nome é Marília Garcia, Desenvolvedora Fullstack";
  document.querySelectorAll("nav a")[0].textContent = "Início";
  document.querySelectorAll("nav a")[1].textContent = "Sobre";
  document.querySelectorAll("nav a")[2].textContent = "Projetos";
  document.querySelector("#sobre .section-title").textContent = "Sobre";
  document.querySelector("#projetos .section-title").textContent = "Projetos";
  document.querySelector("#inicio h1").textContent = "Conecte-se comigo:";
 }
}
