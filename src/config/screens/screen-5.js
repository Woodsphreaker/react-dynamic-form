import * as Yup from "yup";

const FORM_STRUCTURE = [
  {
    inputType: "inputText",
    name: "motherName",
    label: "Nome da Mãe"
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
    ]
  },
  {
    inputType: "inputText",
    name: "nationality",
    label: "Nacionalidade"
  },
  {
    inputType: "inputText",
    name: "nationality2",
    label: "Qualquer Coisa"
  }
];

const VALIDATION_SCHEMA = Yup.object().shape();

const INITIAL_FORM_DATA = {
  maritalStatus: "so"
};

const SCREEN = {
  name: "S5",
  title: "Dados do usuário",
  subTitle: "Quase lá",
  prevScreen: "S4",
  nextScreen: "S6",
  prevRoute: "/screen4",
  nextRoute: "/screen6",
  form: FORM_STRUCTURE,
  initialFormValues: INITIAL_FORM_DATA,
  validationSchema: VALIDATION_SCHEMA
};

export default SCREEN;
