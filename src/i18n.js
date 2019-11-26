
export const LANG = {
    FR: 'English',
    EN: 'Français'
}

export function i18n(term, lang) {
    if(lang == LANG.FR) {
        switch(term) {
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
            case "GET A SAMSUNG TABLET AS A GIFT with the purchase of a selected Samsung device at $01 and a 24-month subscription to a Zen plan": return "OBTENEZ UNE TABLETTE SAMSUNG EN CADEAU avec un appareil mobile Samsung sélectionné à 0 $1 et un abonnement de 24 mois à un forfait Zen";
            default: return term;
        }
      } else return term;
}