import { Alert } from "react-native";

const handleErrors = (title: string, text: string, ...args: boolean[]) => {
  const conditionFailed = args.find((condition) => condition === true);
  if (conditionFailed) {
    Alert.alert(title, text, [
      {
        text: "Ok",
      },
    ]);
    return true;
  }
  return false;
};

export default handleErrors;
