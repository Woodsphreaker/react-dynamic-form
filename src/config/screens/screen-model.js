import * as Yup from "yup";

const FORM_STRUCTURE = [
  {
    inputType: "inputText",
    name: "name",
    label: "Nome"
  },
  {
    inputType: "inputText",
    name: "adress",
    label: "Endeço"
  },
  {
    inputType: "dropdown",
    name: "job",
    label: "Cargo",
    options: [
      {
        label: "Select your job",
        value: ""
      },
      {
        label: "Job 1",
        value: "J1"
      },
      {
        label: "Job 2",
        value: "J2"
      },
      {
        label: "Job 3",
        value: "J3"
      }
    ]
  },
  {
    inputType: "textarea",
    name: "description",
    label: "Descrição"
  },
  {
    inputType: "radio",
    name: "sex",
    label: "Sexo",
    options: [
      {
        label: "Male",
        value: "M"
      },
      {
        label: "Female",
        value: "F"
      },
      {
        label: "Trans",
        value: "T"
      }
    ]
  }
];

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("The field name is required"),
  adress: Yup.string().required("The field adress is required")
});

const INITIAL_FORM_DATA = {
  name: "Carlo Enrico",
  adress: "Rua da rua, 123",
  job: "J3",
  description: "lorem ipsum dolor site amet",
  sex: "M"
};

const SCREEN = {
  name: "S1",
  title: "Screen 1",
  subTitle: "User Data",
  prevScreen: "/",
  nextScreen: "S2",
  prevRoute: "/",
  nextRoute: "/screen2",
  form: FORM_STRUCTURE,
  initialFormValues: INITIAL_FORM_DATA,
  validationSchema: VALIDATION_SCHEMA
};

export default SCREEN;
