import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageDetector = new LanguageDetector();
//import en from 'http://localhost:3000/locales/en/translation.json';
//import fr from '/locales/fr/translation.json';


const langDetectorOptions = {
  // order and from where user language should be detected
  order: ['querystring', 'cookie', 'localStorage', 'navigator'],

  // keys or params to lookup language from
  lookupCookie: 'langue',
  lookupLocalStorage: 'langue',
  lookupQuerystring: 'langue',
  cookieMinutes: 525600,   // 1 year
  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: true,
    whitelist:['fr','en'],
    detection: langDetectorOptions,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
        wait: true,
        useSuspense: false,
     },
    resources: {
        en: {
            "NavTabs":{
                "Accueil":"Home",
                "Matchs":"Games",
                "Pratiques":"Practices",
                "Nouvelles":"News",
                "Tournoi":"Tournament",
                "Arenas":"Arenas",
                "Inscriptions":"Inscriptions",
                "Contact":"Join Us"
                
            },
            "Inscription":{

                "Identite":"Child's informations",
                "Adresse":"Address",
                "Prenom":"First Name",
                "Nom":"Name",
                "Sexe":"Sex",
                "Telephone":"Telephone",
                "Courriel":"Email",
                "DateDeNaissance":"Birth Date",
                "NoAssMaladie":"Health Insurance #",
                "AdresseNo":"#",
                "Rue":"Street",
                "CodePostal":"Postal Code",
                "Cellulaire":"Cell",
                "PremiereFois":"First subscription in ice hockey",
                "JouerAutreEquipe":"Last team my kid played, it was in another association",
                "Contact":"Contact",
                "Parent":"Parent",
                "NomPere":"Father's Name",
                "TelPere":"Phone (father)",
                "NomMere":"Mother's Name",
                "TelMere":"Phone (mother)",
                "Implique":"I wish to get involved with AHMV",
                "CasUrgence":"In case of Emergency",
                "TelUrgence":"Emergency Phone",
                "NomUrgence":"Name (emergency)",
                "LienUrgence":"Relation",
                "AutresInfos":"Other Infos",
                "Autre":"Other",
                "DerniereEquipe":"Last Team",
                "AnneeDerniereEquipe":"Year",
                "CourrielImpots":"Email for tax receipt",
                "Commentaires":"Comments",
                "Soumettre":"Submit",
                "Confirmer":"Confirm",
                "TitreInscription":"Subscription Form" ,
                "DemandeConfirme":"Thank you for the confidence in us. After you confirm your inscription by click the button below, you will receive a email from us within 24 hours to finalize the process. It is important that if you don't receive that email, contact us at ahmvtornade@hotmail.com or at 514-887-8429 (make sure to note the number!).",
                "DetailErreurs":"We have detected at least one error in your form. Please take note of it and correct before submitting again.",
                "Annuler":"Cancel",
                "Corriger":"Correct",
                "Recommencer":"Reset",
                "ConfirmationInscription":"Inscription Confirmation",
                "UnInstant":"Just a moment...",
                "Garcon": "Boy",
                "Fille": "Girl",
                "InscriptionOK": "Subscription was correctly registered. You can leave page or refresh to subscribe a new member",
                "InscriptionPasOK": "Problem... Please start over or contact us directly at ",

            }
        },
        fr: {
            "NavTabs":{
                "Accueil":"Accueil",
                "Matchs":"Matchs",
                "Pratiques":"Pratiques",
                "Nouvelles":"Nouvelles",
                "Tournoi":"Tournoi",
                "Arenas":"Arénas",
                "Inscriptions":"Inscriptions",
                "Contact":"Contact"
                
            },
            "Inscription":{
                "Identite":"Iformations sur l'enfant",
                "Adresse":"Adresse",
                "Prenom":"Prénom",
                "Nom":"Nom",
                "Sexe":"Sexe",
                "Telephone":"Telephone",
                "Courriel":"Courriel",
                "DateDeNaissance":"Date de naissance",
                "NoAssMaladie":"No assurance maladie",
                "AdresseNo":"Numéro",
                "Rue":"Rue",
                "CodePostal":"CodePostal",
                "Cellulaire":"Cellulaire",
                "PremiereFois":"Première inscription au hockey sur glace",
                "JouerAutreEquipe":"La dernière équipe avec laquelle mon enfant a joué était dans une autre association",
                "Contact":"Contact",
                "Parent":"Parent",
                "NomPere":"Nom du pere",
                "TelPere":"Téléphone (père)",
                "NomMere":"Nom de la mère",
                "TelMere":"Téléphone (mère)",
                "Implique":"Je désire m'impliquer auprès de l'AHMV",
                "CasUrgence":"En cas d'urgence",
                "TelUrgence":"Téléphone urgence",
                "NomUrgence":"Nom (urgence)",
                "LienUrgence":"Lien",
                "AutresInfos":"Autres Infos",
                "Autre":"Autre",
                "DerniereEquipe":"Dernière équipe",
                "AnneeDerniereEquipe":"Année",
                "CourrielImpots":"Courriel pour reçu d'impôts",
                "Commentaires":"Commentaires",
                "Soumettre":"Soumettre",
                "Confirmer":"Confirmer",
                
                "TitreInscription":"Formulaire d'inscription" ,
                "DemandeConfirme":"Merci beaucoup pour votre confiance. Après avoir confirmé votre inscription en cliquant sur le bouton ci-dessous, vous recevrez un courriel dans les 24 heures afin de terminer le processus. Il est important de noter que si vous ne recevez pas ce courriel, nous contacter au ahmvtornade@hotmail.com ou au 514-887-8429 (assurez-vous de noter ce numéro!)",
                "DetailErreurs":"Nous avons décelé au moins une erreur dans votre formulaire. Veuillez en prendre connaissance et corriger avant de soumettre.",
                "Annuler":"Annuler",
                "Corriger":"Corriger",
                "Recommencer":"Recommencer",
                "ConfirmationInscription":"Confirmation de l'inscription",
                "UnInstant":"Un petit instant...",
                "Garcon": "Garçon",
                "Fille": "Fille",
                "InscriptionOK": "L'incription a été correctement effectuée. VOus pouvez quitter ou rafraîchir pour procéder à l'inscription d'un nouveau membre.",
                "InscriptionPasOK": "Problème... veuillez recommmencer ou nous contacter directement au ",

            }
        }
      }

  });


export default i18n;