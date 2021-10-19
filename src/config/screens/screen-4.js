import * as Yup from "yup";

const FORM_STRUCTURE = [
  {
    inputType: "inputText",
    name: "1",
    label: ""
  },
  {
    inputType: "inputText",
    name: "2",
    label: ""
  },
  {
    inputType: "inputText",
    name: "3",
    label: ""
  },
  {
    inputType: "inputText",
    name: "4",
    label: ""
  }
];

const VALIDATION_SCHEMA = Yup.object().shape();

const INITIAL_FORM_DATA = {};

const SCREEN = {
  name: "S4",
  title: "Confirmar E-mail",
  subTitle: "Preencha os campos abaixo",
  prevScreen: "S3",
  nextScreen: "S5",
  prevRoute: "/screen3",
  nextRoute: "/screen5",
  form: FORM_STRUCTURE,
  initialFormValues: INITIAL_FORM_DATA,
  validationSchema: VALIDATION_SCHEMA
};

export default SCREEN;
