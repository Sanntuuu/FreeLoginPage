document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const forgotPassword = document.querySelector('.forgot-password');
    const socialIcons = document.querySelectorAll('.social-icon');
    const signupLink = document.querySelector('.signup-prompt a');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const lang = JSON.parse(localStorage.getItem('currentLang')) || { loginSuccess: "Login successful! Welcome, ", fillFields: "Please fill in all fields." };
        
        // Simple validation or action (for demo purposes)
        if (username && email && password) {
            showAlert(lang.loginSuccess + username);
            loginForm.reset();
        } else {
            showAlert(lang.fillFields);
        }
    });

    forgotPassword.addEventListener('click', () => {
        const lang = JSON.parse(localStorage.getItem('currentLang')) || { passwordRecovery: "Password recovery link would be sent to your email." };
        showAlert(lang.passwordRecovery);
    });

    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            const socialPlatform = icon.querySelector('i').className.split(' ')[1].replace('fa-', '');
            const lang = JSON.parse(localStorage.getItem('currentLang')) || { socialLogin: "Logging in with " };
            showAlert(lang.socialLogin + socialPlatform.charAt(0).toUpperCase() + socialPlatform.slice(1));
        });
    });

    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = JSON.parse(localStorage.getItem('currentLang')) || { signupRedirect: "Redirecting to Sign Up page..." };
        showAlert(lang.signupRedirect);
    });
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        toggleIcon.className = 'fas fa-eye';
    }
}

function showAlert(message) {
    const alertElement = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    alertElement.classList.remove('alert-hidden');
    
    // Auto-hide after 5 seconds if not closed manually
    setTimeout(() => {
        if (!alertElement.classList.contains('alert-hidden')) {
            alertElement.classList.add('alert-hidden');
        }
    }, 5000);
}

function hideAlert() {
    const alertElement = document.getElementById('customAlert');
    alertElement.classList.add('alert-hidden');
}

function toggleTranslator() {
    const translatorPanel = document.getElementById('translatorPanel');
    const translatorIcon = document.getElementById('translatorIcon');
    
    translatorPanel.classList.toggle('collapsed');
    if (translatorPanel.classList.contains('collapsed')) {
        translatorIcon.className = 'fas fa-chevron-right';
    } else {
        translatorIcon.className = 'fas fa-chevron-left';
    }
}

function translatePage() {
    const languageSelect = document.getElementById('languageSelect');
    const selectedLanguage = languageSelect.value;
    showAlert(`Page translated to ${languageSelect.options[languageSelect.selectedIndex].text}`);
    // Translation mappings for different languages
    const translations = {
        en: {
            title: "Sanntuuu_ Login Template",
            subtitle: "A stylish login template by Sanntuuu_",
            username: "Username",
            email: "Email",
            password: "Password",
            remember: "Remember Me",
            forgot: "Forgot Password?",
            login: "Log In",
            orLogin: "Or login with",
            signup: "Don't have an account? Sign Up",
            loginSuccess: "Login successful! Welcome, ",
            fillFields: "Please fill in all fields.",
            passwordRecovery: "Password recovery link would be sent to your email.",
            signupRedirect: "Redirecting to Sign Up page...",
            socialLogin: "Logging in with ",
            translate: "Translate",
            selectLang: "Select Language:",
            note: "Note: This is a demo translation."
        },
        es: {
            title: "Plantilla de Inicio de Sesión Sanntuuu_",
            subtitle: "Una plantilla de inicio de sesión elegante por Sanntuuu_",
            username: "Nombre de usuario",
            email: "Correo electrónico",
            password: "Contraseña",
            remember: "Recuérdame",
            forgot: "¿Olvidaste tu contraseña?",
            login: "Iniciar sesión",
            orLogin: "O inicia sesión con",
            signup: "¿No tienes una cuenta? Regístrate",
            loginSuccess: "¡Inicio de sesión exitoso! Bienvenido, ",
            fillFields: "Por favor, completa todos los campos.",
            passwordRecovery: "Se enviará un enlace de recuperación de contraseña a tu correo.",
            signupRedirect: "Redirigiendo a la página de registro...",
            socialLogin: "Iniciando sesión con ",
            translate: "Traducir",
            selectLang: "Seleccionar idioma:",
            note: "Nota: Esta es una traducción de demostración."
        },
        fr: {
            title: "Modèle de Connexion Sanntuuu_",
            subtitle: "Un modèle de connexion élégant par Sanntuuu_",
            username: "Nom d'utilisateur",
            email: "E-mail",
            password: "Mot de passe",
            remember: "Se souvenir de moi",
            forgot: "Mot de passe oublié ?",
            login: "Se connecter",
            orLogin: "Ou connectez-vous avec",
            signup: "Vous n'avez pas de compte ? Inscrivez-vous",
            loginSuccess: "Connexion réussie ! Bienvenue, ",
            fillFields: "Veuillez remplir tous les champs.",
            passwordRecovery: "Un lien de récupération de mot de passe sera envoyé à votre e-mail.",
            signupRedirect: "Redirection vers la page d'inscription...",
            socialLogin: "Connexion avec ",
            translate: "Traduire",
            selectLang: "Sélectionner la langue :",
            note: "Note : Ceci est une traduction de démonstration."
        },
        de: {
            title: "Sanntuuu_ Anmeldevorlage",
            subtitle: "Eine stilvolle Anmeldevorlage von Sanntuuu_",
            username: "Benutzername",
            email: "E-Mail",
            password: "Passwort",
            remember: "Angemeldet bleiben",
            forgot: "Passwort vergessen?",
            login: "Anmelden",
            orLogin: "Oder melden Sie sich mit",
            signup: "Kein Konto? Registrieren",
            loginSuccess: "Anmeldung erfolgreich! Willkommen, ",
            fillFields: "Bitte füllen Sie alle Felder aus.",
            passwordRecovery: "Ein Link zur Passwortwiederherstellung wird an Ihre E-Mail gesendet.",
            signupRedirect: "Weiterleitung zur Registrierungsseite...",
            socialLogin: "Anmelden mit ",
            translate: "Übersetzen",
            selectLang: "Sprache auswählen:",
            note: "Hinweis: Dies ist eine Demo-Übersetzung."
        }
    };

    const lang = translations[selectedLanguage];
    document.querySelector('h2').textContent = lang.title;
    document.querySelector('.subtitle').textContent = lang.subtitle;
    document.querySelectorAll('.input-group label')[0].childNodes[1].textContent = ' ' + lang.username;
    document.querySelectorAll('.input-group label')[1].childNodes[1].textContent = ' ' + lang.email;
    document.querySelectorAll('.input-group label')[2].childNodes[1].textContent = ' ' + lang.password;
    document.querySelector('.remember-me label').textContent = lang.remember;
    document.querySelector('.forgot-password').textContent = lang.forgot;
    document.querySelector('.login-btn').childNodes[0].textContent = lang.login;
    document.querySelector('.social-login p').textContent = lang.orLogin;
    document.querySelector('.signup-prompt').childNodes[0].textContent = lang.signup.split('Sign Up')[0];
    document.querySelector('.signup-prompt a').textContent = lang.signup.split('Sign Up')[1] || 'Sign Up';
    document.querySelector('.translator-header h3').textContent = lang.translate;
    document.querySelector('.translator-content p').textContent = lang.selectLang;
    document.querySelector('.translator-note').textContent = lang.note;
    // Update placeholder text for inputs
    document.getElementById('username').placeholder = lang.username;
    document.getElementById('email').placeholder = lang.email;
    document.getElementById('password').placeholder = lang.password;
    // Store translations for alerts to use dynamically
    localStorage.setItem('currentLang', JSON.stringify(lang));
}
