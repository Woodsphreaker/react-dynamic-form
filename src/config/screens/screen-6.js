import * as Yup from "yup";

const FORM_STRUCTURE = [
  {
    inputType: "inputText",
    name: "cpf",
    label: "Informe seu CPF",
    displayRule: (formState) => true,
  },
  {
    inputType: "dropdown",
    name: "maritalStatus",
    label: "Estado Civil",
    options: [
      {
        label: "Selecione",
        value: "",
      },
      {
        label: "Casado",
        value: "ca",
      },
      {
        label: "Solteiro",
        value: "so",
      },
      {
        label: "Separado",
        value: "se",
      },
    ],
    displayRule: (formState) => true,
  },
  {
    inputType: "inputText",
    name: "spouse",
    label: "Nome do Conjuje",
    displayRule: ({ maritalStatus }) => {
      if (maritalStatus === "ca") {
        return true;
      }
    },
  },
];

const VALIDATION_SCHEMA = Yup.object().shape();

const INITIAL_FORM_DATA = {};

const prevScreenAction = (formState) => {
  return {
    prevScreen: "S5",
    prevRoute: "/screen5",
  };
};

const nextScreenAction = (formState) => {
  return {
    nextScreen: "S1",
    nextRoute: "/screen1",
    endFlow: true,
  };
};

const SCREEN = {
  name: "S6",
  title: "Dados do Usuário",
  subTitle: "Screen 6",
  prevScreenAction,
  nextScreenAction,
  form: FORM_STRUCTURE,
  initialFormValues: INITIAL_FORM_DATA,
  validationSchema: VALIDATION_SCHEMA,
};

export default SCREEN;
