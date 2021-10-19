import React from "react";

import { Container, Content } from "./styles";

export const Form = ({ initialState, onSubmit, children }) => {
  return (
    <Container>
      <Content>
        {/* <form onSubmit={(event) => wrapperSubmit(onSubmit, event)}>
          {initialState ? populateForm(initialState, children) : children}
        </form> */}
        <form>{children}</form>
      </Content>
    </Container>
  );
};
