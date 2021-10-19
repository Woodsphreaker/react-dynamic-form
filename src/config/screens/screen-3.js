import * as Yup from "yup";

const FORM_STRUCTURE = [
  {
    inputType: "inputText",
    name: "celphone",
    label: "Celular"
  },
  {
    inputType: "inputText",
    name: "email",
    label: "E-mail"
  },
  {
    inputType: "inputText",
    name: "email-confirm",
    label: "Confirme o e-mail"
  },
  {
    inputType: "inputText",
    name: "pass",
    label: "Senha"
  },
  {
    inputType: "inputText",
    name: "confirm-pass",
    label: "Confirmar Senha"
  }
];

const VALIDATION_SCHEMA = Yup.object().shape();

const INITIAL_FORM_DATA = {};

const SCREEN = {
  name: "S3",
  title: "Dados do usuário",
  subTitle: "Preencha os campos abaixo",
  prevScreen: "S2",
  nextScreen: "S4",
  prevRoute: "/screen2",
  nextRoute: "/screen4",
  form: FORM_STRUCTURE,
  initialFormValues: INITIAL_FORM_DATA,
  validationSchema: VALIDATION_SCHEMA
};

export default SCREEN;
