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
import { ActivityIndicator, Keyboard } from "react-native";
import MainButton from "../MainButton";
import { defaultOrange, primaryGrey } from "../../shared/themes";
type FieldsType = {
  name?: string;
  email?: string;
  password?: string;
};

const Form: React.FC<{
  onSubmit: (fields: FieldsType) => Promise<void>;
  onResetPassword?: () => void;
  isSignUp?: boolean;
  isResetPassword?: boolean;
  isNewPassword?: boolean;
  isUpdateAccount?: boolean;
  loading: boolean;
}> = (props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const {
    isResetPassword,
    isSignUp,
    onResetPassword,
    isNewPassword,
    isUpdateAccount,
  } = props;
  const handleSubmitForm = async () => {
    Keyboard.dismiss();
    if (
      !validateForm({
        isResetPassword,
        isSignUp,
        isSignIn: !!onResetPassword,
        isNewPassword,
        isUpdateAccount,
        email,
        name,
        password,
      })
    ) {
      return;
    }

    await props.onSubmit({ name, email, password });
    if (props.isUpdateAccount) {
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  let inputs;

  if (props.isUpdateAccount) {
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
      </>
    );
  }

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
            <MainButton isLoading={props.loading} onPress={handleSubmitForm}>
              {props.loading ? (
                <ActivityIndicator color={defaultOrange} size={"large"} />
              ) : (
                (props.isSignUp && "Register") ||
                (props.isResetPassword && "Send link") ||
                (props.onResetPassword && "Log in") ||
                (props.isNewPassword && "Change") ||
                (props.isUpdateAccount && "Update")
              )}
            </MainButton>
          </MainButtonArea>
        </FormContainer>
      </FormArea>
    </>
  );
};

export default Form;
