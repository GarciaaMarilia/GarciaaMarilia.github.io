document.addEventListener("DOMContentLoaded", () => {
 function changeLanguage(language) {
  document.documentElement.lang = language;

  const translations = {
   en: {
    inicioSectionTitle: "Hello!",
    introText: "My name is Marília Garcia, Fullstack Developer",
    nav: ["Home", "About", "Projects"],
    sobreSectionTitle: "About",
    projetosSectionTitle: "Projects",
    connectText: "Connect with me:",
    sobreText:
     "Fullstack Developer with 3 years of experience proficient in React.js, React Native and Node.js. I build reusable parts for websites and mobile applications and make them work well on different devices.",
   },
   fr: {
    inicioSectionTitle: "Bonjour!",
    introText: "Je m'appelle Marília Garcia, Développeuse Fullstack",
    nav: ["Accueil", "À propos", "Projets"],
    sobreSectionTitle: "À propos",
    projetosSectionTitle: "Projets",
    connectText: "Connectez-vous avec moi:",
    sobreText:
     "Développeuse Fullstack avec 3 ans d'expérience, compétente en React.js, React Native et Node.js. Je construis des composants réutilisables pour des sites web et des applications mobiles, et je veille à ce qu'ils fonctionnent bien sur différents appareils.",
   }
  };

  const selectedLanguage = translations[language];

  // Update section titles and text
  document.querySelector("#inicio .section-title").textContent =
   selectedLanguage.inicioSectionTitle;
  document.querySelector("#inicio .intro-text").textContent =
   selectedLanguage.introText;
  document.querySelector("#sobre .section-title").textContent =
   selectedLanguage.sobreSectionTitle;
  document.querySelector("#projetos .section-title").textContent =
   selectedLanguage.projetosSectionTitle;
  document.querySelector("#inicio strong").textContent =
   selectedLanguage.connectText;
  document.querySelector("#sobre p").textContent = selectedLanguage.sobreText;

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link, index) => {
   link.textContent = selectedLanguage.nav[index];
  });
 }

 changeLanguage("fr");

 document
  .querySelector('.language-switcher [lang="en"]')
  .addEventListener("click", () => changeLanguage("en"));
 document
  .querySelector('.language-switcher [lang="fr"]')
  .addEventListener("click", () => changeLanguage("fr"));
});
