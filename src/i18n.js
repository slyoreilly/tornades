import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageDetector = new LanguageDetector();
//import en from 'http://localhost:3000/locales/en/translation.json';
//import fr from '/locales/fr/translation.json';


const langDetectorOptions = {
  // order and from where user language should be detected
  order: ['cookie', 'localStorage', 'navigator'],

  // keys or params to lookup language from
  lookupCookie: 'langue',
  lookupLocalStorage: 'langue',

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'fr',
    debug: true,
    whitelist:['fr','en'],
    detection: langDetectorOptions,

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

                "Identite":"Identity",
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
                "Contact":"Contact",
                "NomPere":"Father's Name",
                "TelPere":"Phone (father)",
                "NomMere":"Mother's Name",
                "TelMere":"Phone (mother)",
                "TelUrgence":"Emergency Phone",
                "NomUrgence":"Name (emergency)",
                "LienUrgence":"Relation",
                "AutresInfos":"Other Infos",
                "DerniereEquipe":"Last Team",
                "AnneeDerniereEquipe":"Year",
                "CourrielImpots":"Email for tax receipt",
                "Commentaires":"Comments",
                "Soumettre":"Submit",
                "TitreInscription":"Inscription Form" ,
                "DemandeConfirme":"Thank you for the confidence in us. After you confirm your inscription by click the button below, you will receive a email from us within 24 hours to finalize the process. It is important that if you don't receive that email, contact us at ahmvtornade@hotmail.com or at 514-887-8429 (make sure to note the number!).",
                "DetailErreurs":"We have detected at least one error in your form. Please take note of it and correct before submitting again.",
                "Annuler":"Cancel",
                "Corriger":"Correct",
                "Recommencer":"Reset",
                "ConfirmationInscription":"Inscription Confirmation",
                "UnInstant":"Just a moment...",

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
                "Identite":"Identité",
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
                "Contact":"Contact",
                "NomPere":"Nom du pere",
                "TelPere":"Téléphone (père)",
                "NomMere":"Nom de la mère",
                "TelMere":"Téléphone (mère)",
                "TelUrgence":"Téléphone urgence",
                "NomUrgence":"Nom (urgence)",
                "LienUrgence":"Lien",
                "AutresInfos":"Autres Infos",
                "DerniereEquipe":"Dernière équipe",
                "AnneeDerniereEquipe":"Année",
                "CourrielImpots":"Courriel pour reçu d'impôts",
                "Commentaires":"Commentaires",
                "Soumettre":"Soumettre",
                "TitreInscription":"Formulaire d'inscription" ,
                "DemandeConfirme":"Merci beaucoup pour votre confiance. Après avoir confirmé votre inscription en cliquant sur le bouton ci-dessous, vous recevrez un courriel dans les 24 heures afin de terminer le processus. Il est important de noter que si vous ne recevez pas ce courriel, nous contacter au ahmvtornade@hotmail.com ou au 514-887-8429 (assurez-vous de noter ce numéro!)",
                "DetailErreurs":"Nous avons décelé au moins une erreur dans votre formulaire. Veuillez en prendre connaissance et corriger avant de soumettre.",
                "Annuler":"Annuler",
                "Corriger":"Corriger",
                "Recommencer":"Recommencer",
                "ConfirmationInscription":"Confirmation de l'inscription",
                "UnInstant":"Un petit instant...",
                

            }
        }
      }

  });


export default i18n;