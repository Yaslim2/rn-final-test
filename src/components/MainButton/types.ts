import { TouchableOpacityProps } from "react-native";

export type MainButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
  isSaveCart?: boolean;
};
