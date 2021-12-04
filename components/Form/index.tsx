import React, { useState } from "react";
import {
  FormContainer,
  Input,
  TextInputArea,
  ForgotPasswordButton,
  ForgotPasswordText,
  MainButtonArea,
  FormArea,
} from "./styles";
import { validateForm } from "../../shared/helpers/index";
import { Keyboard } from "react-native";
import MainButton from "../MainButton";
type FieldsType = {
  name?: string;
  email?: string;
  password?: string;
};

const Form: React.FC<{
  onSubmit: (fields: FieldsType) => void;
  onResetPassword?: () => void;
  isSignUp?: boolean;
  isResetPassword?: boolean;
  isNewPassword?: boolean;
}> = (props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isResetPassword, isSignUp, onResetPassword, isNewPassword } = props;
  const handleSubmitForm = () => {
    Keyboard.dismiss();
    if (
      !validateForm({
        isResetPassword,
        isSignUp,
        isSignIn: !!onResetPassword,
        isNewPassword,
        email,
        name,
        password,
      })
    ) {
      return;
    }
    props.onSubmit({ name, email, password });
  };

  let inputs;

  if (props.isNewPassword) {
    inputs = (
      <TextInputArea>
        <Input
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </TextInputArea>
    );
  }

  if (!!props.onResetPassword) {
    inputs = (
      <>
        <TextInputArea>
          <Input
            underlineColorAndroid="transparent"
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </TextInputArea>
        <TextInputArea>
          <Input
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </TextInputArea>
        <ForgotPasswordButton onPress={props.onResetPassword}>
          <ForgotPasswordText>I forget my password</ForgotPasswordText>
        </ForgotPasswordButton>
      </>
    );
  }

  if (props.isResetPassword) {
    inputs = (
      <TextInputArea>
        <Input
          underlineColorAndroid="transparent"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="Email"
        />
      </TextInputArea>
    );
  }

  if (props.isSignUp) {
    inputs = (
      <>
        <TextInputArea>
          <Input
            underlineColorAndroid="transparent"
            placeholder="Name"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
          />
        </TextInputArea>
        <TextInputArea>
          <Input
            underlineColorAndroid="transparent"
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </TextInputArea>
        <TextInputArea>
          <Input
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </TextInputArea>
      </>
    );
  }

  return (
    <>
      <FormArea>
        <FormContainer behavior="padding">
          {inputs}
          <MainButtonArea>
            <MainButton onPress={handleSubmitForm}>
              {props.isSignUp && "Register"}
              {props.isResetPassword && "Send link"}
              {props.onResetPassword && "Log in"}
              {props.isNewPassword && "Change"}
            </MainButton>
          </MainButtonArea>
        </FormContainer>
      </FormArea>
    </>
  );
};

export default Form;
