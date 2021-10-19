import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getScreenConfig from "../../config/screens";
import { getStorage, setStorage } from "../../services/storage";
import { Form } from "../../components/Form";
import FormSelector from "../../components/FormSelector";
import { Container, InfoPannel } from "../../components/common/styles";

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
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    console.log(type);
    setFormState((oldState) => ({ ...oldState, [name]: value }));
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

  const renderForm = () => {
    const { form } = screenConfig;

    if (!form) {
      return null;
    }

    return form.map(({ inputType, label, name, options, displayRule }) => (
      <FormSelector
        key={name}
        inputType={inputType}
        name={name}
        label={label}
        value={formState[name] || ""}
        options={options}
        displayRule={() => displayRule(formState)}
        handleInputChange={handleInputChange}
      />
    ));
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
    const { nextRoute = {} } = nextScreenAction(formState) || {};

    if (!nextRoute) {
      return null;
    }
    return <button onClick={handleSubmit}>Next</button>;
  };

  const endButton = () => {
    const { endFlow } = screenConfig;

    if (!endFlow) {
      return null;
    }
    return <button onClick={finishPage}>Finish</button>;
  };

  const renderFormButtons = ({ buttonType } = {}) => {
    const buttons = {
      next: nextButton,
      prev: prevButton,
      end: endButton
    };
    return buttons[buttonType]();
  };

  return (
    <Form>
      <InfoPannel>
        <h1>{screenConfig.title}</h1>
        <h4>{screenConfig.subTitle}</h4>
      </InfoPannel>
      {renderForm()}
      <div>formValue: {JSON.stringify(formState)}</div>
      <Container>
        {renderFormButtons({ buttonType: "prev" })}
        {renderFormButtons({ buttonType: "next" })}
        {renderFormButtons({ buttonType: "end" })}
      </Container>
    </Form>
  );
}
