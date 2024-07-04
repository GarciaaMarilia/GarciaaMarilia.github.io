function changeLanguage(language) {
    document.documentElement.lang = language;
    if (language === 'en') {
        document.querySelector('h2').textContent = 'Hello, visitor! 👋';
        document.querySelector('p').textContent = 'My name is Yuri, Front-end Developer';
        document.querySelectorAll('nav a')[0].textContent = 'Home';
        document.querySelectorAll('nav a')[1].textContent = 'About';
        document.querySelectorAll('nav a')[2].textContent = 'Projects';
        document.querySelectorAll('nav a')[3].textContent = 'Contact';
    } else if (language === 'fr') {
        document.querySelector('h2').textContent = 'Bonjour, visiteur! 👋';
        document.querySelector('p').textContent = 'Je m\'appelle Yuri, Développeur Front-end';
        document.querySelectorAll('nav a')[0].textContent = 'Accueil';
        document.querySelectorAll('nav a')[1].textContent = 'À propos';
        document.querySelectorAll('nav a')[2].textContent = 'Projets';
        document.querySelectorAll('nav a')[3].textContent = 'Contact';
    } else {
        document.querySelector('h2').textContent = 'Olá, visitante! 👋';
        document.querySelector('p').textContent = 'Meu nome é Yuri, Desenvolvedor Front-end';
        document.querySelectorAll('nav a')[0].textContent = 'Início';
        document.querySelectorAll('nav a')[1].textContent = 'Sobre';
        document.querySelectorAll('nav a')[2].textContent = 'Projetos';
        document.querySelectorAll('nav a')[3].textContent = 'Contato';
    }
}