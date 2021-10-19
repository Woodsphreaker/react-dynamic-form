import * as Yup from "yup";

const FORM_STRUCTURE = [
  {
    inputType: "inputText",
    name: "cpf",
    label: "Informe seu CPF",
    displayRule: (formState) => true
  },
  {
    inputType: "dropdown",
    name: "maritalStatus",
    label: "Estado Civil",
    options: [
      {
        label: "Selecione",
        value: ""
      },
      {
        label: "Casado",
        value: "ca"
      },
      {
        label: "Solteiro",
        value: "so"
      },
      {
        label: "Separado",
        value: "se"
      }
    ],
    displayRule: (formState) => true
  },
  {
    inputType: "inputText",
    name: "spouse",
    label: "Nome do Conjuje",
    displayRule: ({ maritalStatus }) => {
      if (maritalStatus === "ca") {
        return true;
      }
    }
  }
];

const VALIDATION_SCHEMA = Yup.object().shape();

const INITIAL_FORM_DATA = {};

const prevScreenAction = (formState) => {
  return {
    prevScreen: "/",
    prevRoute: "/"
  };
};

const nextScreenAction = (formState) => {
  return {
    nextScreen: "S2",
    nextRoute: "/screen2"
  };
};

const SCREEN = {
  name: "S1",
  title: "Bem vindo(a)",
  subTitle: "Dados iniciais",
  prevScreenAction,
  nextScreenAction,
  form: FORM_STRUCTURE,
  initialFormValues: INITIAL_FORM_DATA,
  validationSchema: VALIDATION_SCHEMA
};

export default SCREEN;
