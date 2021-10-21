import * as Yup from "yup";
import { addCpfCnpjMask } from "../../tools/inputCpfCnpjMasc";

const FORM_STRUCTURE = [
  {
    inputType: "inputText",
    name: "cpf",
    label: "Informe seu CPF",
    placeholder: "000.111.222-33",
    displayRule: (formState) => true,
  },
];

const FIELDS_MASC_RULES = {
  cpf: (value) => addCpfCnpjMask(value),
};

const VALIDATION_SCHEMA = Yup.object().shape();

const INITIAL_FORM_DATA = {};

const prevScreenAction = (formState) => {
  return {
    prevScreen: "/",
    prevRoute: "/",
  };
};

const nextScreenAction = (formState) => {
  return {
    nextScreen: "S2",
    nextRoute: "/screen2",
  };
};

const SCREEN = {
  name: "S1",
  title: "Bem vindo(a)",
  subTitle: "Screen 1",
  prevScreenAction,
  nextScreenAction,
  form: FORM_STRUCTURE,
  fieldsMasc: FIELDS_MASC_RULES,
  initialFormValues: INITIAL_FORM_DATA,
  validationSchema: VALIDATION_SCHEMA,
};

export default SCREEN;
