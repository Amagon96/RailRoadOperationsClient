import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "welcome": "Welcome to this beautiful project 🥳",
      "create": "Create a new",
      "RECEIVER": "Receiver",
      "receiver": "Receiver",
      "receiver-plural": "Receivers",
      "destination": "Destination",
      "destination-plural": "Destinations",
      "save": "Save",
      "name": "Name",
      "classification": "Classification",
      "create-classification-save-button": "Save",
      "create-destination-name-field": "Destination name",
      "create-destination-classification-field": "Destination classification",
      "create-receiver-name-field": "Receiver name",
      "create-receiver-classification-field": "Receiver name",
      "input-card-train-configuration": "Please enter a train configuration",
      "input-card-train-sort": "Sort",
      "input-label-name": "Name",
      "input-label-destination": "Destination",
      "input-label-receiver": "Receiver",
      "output-card-sorted": "Sorted train",
      "output-label-name": "Name",
      "output-label-destination": "Destination",
      "output-label-receiver": "Receiver",
      "output-label-classification-track": "Classification Track",
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido a este hermoso proyecto",
      "create": "Crear un nuevo",
      "receiver": "Receptor",
      "receiver-plural": "Receptores",
      "destination-plural": "Destinos",
      "DESTINATION": "Destino",
      "destination": "Destino",
      "save": "Guardar",
      "name": "Nombre",
      "classification": "Clasificación",
      "create-classification-save-button": "Guardar",
      "create-destination-name-field": "Nombre del destino",
      "create-destination-classification-field": "Clasificación del destino",
      "create-receiver-name-field": "Nombre del receptor",
      "create-receiver-classification-field": "Clasificación del receptor",
      "input-card-train-configuration": "Por favor proporciona una configuración de tren",
      "input-card-train-sort": "Ordenar",
      "input-label-name": "Nombre",
      "input-label-destination": "Destino",
      "input-label-receiver": "Receptor",
      "output-card-sorted": "Tren ordenado",
      "output-label-name": "Nombre",
      "output-label-destination": "Destino",
      "output-label-receiver": "Receptor",
      "output-label-classification-track": "Carril de Clasificación",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;