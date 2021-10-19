import * as Yup from "yup";

const FORM_STRUCTURE = [
  {
    inputType: "inputText",
    name: "city",
    label: "Cidade"
  },
  {
    inputType: "inputText",
    name: "state",
    label: "Estado"
  },
  {
    inputType: "inputText",
    name: "age",
    label: "Idade"
  }
];

const VALIDATION_SCHEMA = Yup.object().shape();

const INITIAL_FORM_DATA = {};

const SCREEN = {
  name: "S6",
  title: "Campos distintos",
  subTitle: "Preencha os campos abaixo",
  prevScreen: "S5",
  nextScreen: "S7",
  prevRoute: "/screen5",
  nextRoute: null,
  endFlow: true,
  form: FORM_STRUCTURE,
  initialFormValues: INITIAL_FORM_DATA,
  validationSchema: VALIDATION_SCHEMA
};

export default SCREEN;
