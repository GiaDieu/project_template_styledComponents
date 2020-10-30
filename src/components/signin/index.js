import React from "react";
import {
  FormContainer,
  Icon,
  FormContent,
  FormWrapper,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <FormContainer>
        <FormWrapper>
          <Icon to="/">KAO</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign In</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot your password ?</Text>
            </Form>
          </FormContent>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default SignIn;
