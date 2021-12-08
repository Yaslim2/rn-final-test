import { DrawerScreenProps } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import { RootAppDrawerNavigator } from "../../routes/App";
import { Ionicons } from "@expo/vector-icons";
import { secondaryGrey } from "../../shared/themes";
import { Container, AccountText } from "./styles";
import { asyncUpdateAccount } from "../../store/slices/authSlice";
import Form from "../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { handleErrors } from "../../shared/helpers";

const Account = (
  props: DrawerScreenProps<RootAppDrawerNavigator, "Account">
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.user!.token);

  const handleUpdate = async (fields: { name?: string; email?: string }) => {
    try {
      setIsLoading(true);
      await dispatch(asyncUpdateAccount(token, fields.name!, fields.email!));
      setIsLoading(false);
      props.navigation.navigate("Bets");
    } catch (e: any) {
      setIsLoading(false);
      handleErrors("Credentials error", e.message, true);
    }
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
    });
  }, []);

  return (
    <Container>
      <Ionicons name="person-circle-outline" size={80} color={secondaryGrey} />
      <AccountText>Account</AccountText>
      <Form loading={isLoading} isUpdateAccount onSubmit={handleUpdate} />
    </Container>
  );
};

export default Account;
