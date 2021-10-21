import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getScreenConfig from "../../config/screens";
import { getStorage, setStorage } from "../../services/storage";
import { Form } from "../../components/Form";
import { Container, InfoPanel } from "../../components/common/styles";
import { FormCore } from "../../components/FormCore";

export default function () {
  const [formState, setFormState] = useState({});
  const [screenConfig, setScreenConfig] = useState({});
  const history = useHistory();

  const gotoPage = ({ page }) => {
    history.push(page);
  };

  const prevPage = (event) => {
    event.preventDefault();
    const { prevScreenAction = () => {} } = screenConfig;
    const { prevScreen, prevRoute } = prevScreenAction(formState) || {};

    if (prevRoute) {
      setStorage({ key: "screen", value: prevScreen });
      gotoPage({ page: prevRoute });
    }
  };

  const nextPage = () => {
    const { nextScreenAction = () => {} } = screenConfig;
    const { nextScreen, nextRoute } = nextScreenAction(formState) || {};

    if (nextRoute) {
      setStorage({ key: "screen", value: nextScreen });
      gotoPage({ page: nextRoute });
    }
  };

  const finishPage = (event) => {
    event.preventDefault();
    alert("This flow is end");
    nextPage();
  };

  const prevButton = () => {
    const { prevScreenAction = () => {} } = screenConfig;
    const { prevRoute } = prevScreenAction(formState) || {};

    if (!prevRoute) {
      return null;
    }
    return <button onClick={prevPage}>Prev</button>;
  };

  const nextButton = () => {
    const { nextScreenAction = () => {} } = screenConfig;
    const { nextRoute, endFlow } = nextScreenAction(formState) || {};

    if (endFlow) {
      return null;
    }

    if (!nextRoute) {
      return null;
    }

    return <button onClick={handleSubmit}>Next</button>;
  };

  const endButton = () => {
    const { nextScreenAction = () => {} } = screenConfig;
    const { endFlow } = nextScreenAction(formState) || {};

    if (endFlow) {
      return <button onClick={finishPage}>Finish</button>;
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const { fieldsMasc = {} } = screenConfig;
    const { [name]: inputMasc = (inputValue) => inputValue } = fieldsMasc;

    // console.log(type);
    setFormState((oldState) => ({ ...oldState, [name]: inputMasc(value) }));
  };

  const formValidate = async () => {
    const { validationSchema } = screenConfig;
    await validationSchema.validate(formState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await formValidate();
      nextPage();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const currentScreen = getStorage({ key: "screen" }) || "S1";
    const screenData = getScreenConfig({ screen: currentScreen });
    setScreenConfig(screenData);
  }, []);

  useEffect(() => {
    const getFormInfo = async () => {
      const { initialFormValues } = screenConfig;
      if (initialFormValues) {
        setFormState(initialFormValues);
      }
    };
    getFormInfo();
  }, [screenConfig]);

  const renderFormButtons = ({ buttonType } = {}) => {
    const buttons = {
      next: nextButton,
      prev: prevButton,
      end: endButton,
    };
    return buttons[buttonType]();
  };

  const renderForm = () => {
    const { form } = screenConfig;

    if (!form) {
      return null;
    }

    return (
      <>
        <FormCore
          formData={form}
          formState={formState}
          handleInputChange={handleInputChange}
        />
        <Container>
          {renderFormButtons({ buttonType: "prev" })}
          {renderFormButtons({ buttonType: "next" })}
          {renderFormButtons({ buttonType: "end" })}
        </Container>
      </>
    );
  };

  return (
    <Form>
      <InfoPanel>
        <h1>{screenConfig.title}</h1>
        <h4>{screenConfig.subTitle}</h4>
      </InfoPanel>
      {renderForm()}

      <div>formValue: {JSON.stringify(formState)}</div>
    </Form>
  );
}
