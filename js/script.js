function changeLanguage(language) {
 document.documentElement.lang = language;
 if (language === "en") {
  document.querySelector("#inicio .section-title").textContent = "Hello!";
  document.querySelector("#inicio .intro-text").textContent =
   "My name is Marília Garcia, Fullstack Developer";
  document.querySelectorAll("nav a")[0].textContent = "Home";
  document.querySelectorAll("nav a")[1].textContent = "About";
  document.querySelectorAll("nav a")[2].textContent = "Projects";
  document.querySelectorAll("#sobre .section-title").textContent = "About";
  document.querySelectorAll("#projetos .section-title").textContent = "Projects";
  document.querySelectorAll("#inicio h1").textContent = "Connect with me:";
  document.querySelectorAll("#sobre p").textContent =
   "Fullstack Developer with 3 years of experience proficient in React.js, React Native and Node.js. I build reusable parts for websites and mobile applications and make them work well on different devices.";
 } else if (language === "fr") {
  document.querySelector("#inicio .section-title").textContent = "Bonjour!";
  document.querySelector("#inicio .intro-text").textContent =
   "Je m'appelle Marília Garcia, Développeuse Fullstack";
  document.querySelectorAll("nav a")[0].textContent = "Accueil";
  document.querySelectorAll("nav a")[1].textContent = "À propos";
  document.querySelectorAll("nav a")[2].textContent = "Projets";
  document.querySelectorAll("#sobre .section-title").textContent = "À propos";
  document.querySelectorAll("#projetos .section-title").textContent = "Projets";
  document.querySelectorAll("#inicio h1").textContent = "Connectez-vous avec moi:";
  document.querySelectorAll("#sobre p").textContent =
   "Développeuse Fullstack avec 3 ans d'expérience, compétente en React.js, React Native et Node.js. Je construis des composants réutilisables pour des sites web et des applications mobiles, et je veille à ce qu'ils fonctionnent bien sur différents appareils.";
 } else {
  document.querySelector("#inicio .section-title").textContent = "Olá!";
  document.querySelector("#inicio .intro-text").textContent =
   "Meu nome é Marília Garcia, Desenvolvedora Fullstack";
  document.querySelectorAll("nav a")[0].textContent = "Início";
  document.querySelectorAll("nav a")[1].textContent = "Sobre";
  document.querySelectorAll("nav a")[2].textContent = "Projetos";
  document.querySelectorAll("#sobre .section-title").textContent = "Sobre";
  document.querySelectorAll("#projetos .section-title").textContent = "Projetos";
  document.querySelectorAll("#inicio h1").textContent = "Conecte-se comigo:";
  document.querySelectorAll("#sobre p").textContent =
   "Desenvolvedora Fullstack com 3 anos de experiência, proficiente em React.js, React Native e Node.js. Construo partes reutilizáveis para sites e aplicativos móveis e garanto que funcionem bem em diferentes dispositivos.";
 }
}
