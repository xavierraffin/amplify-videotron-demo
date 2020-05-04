
export const LANG = {
    FR: 'FR',
    EN: 'EN'
}

export function i18n(term, lang) {
    if (lang === LANG.FR) {
        switch (term) {
            case "Create Account": return "Créer un compte";
            case "Have an account? ": return "Déjà membre? ";
            case "Email": return "Courriel";
            case "Sign in": return "Se connecter";
            case "Login": return "Connexion";
            case "No Account? ": return "Pas de compte? ";
            case "Password": return "Mot de Passe";
            case "Reset Password": return "Réinitialiser le mot de passe";
            case "Forgot your password? ": return "Mot de passe oublié? ";
            case "Username": return "Nom utilisateur";
            case "Create account": return "Créer un compte";
            case "This is private content": return "Ceci est du contenu privé";
            case "You are not logged in": return "Vous n'êtes pas connecté";
            case "HOME": return "ACCUEIL";
            case "CUSTOMER CENTER": return "ESPACE CLIENT";
            case "Choose the internet network that trims out the fuss.": return "Vous êtes à un cheveu d’un réseau Internet fiable et sans tracas.";
            default: return term;
        }
    } else return term;
}