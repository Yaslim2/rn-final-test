import { TouchableOpacityProps } from "react-native";

export type ActiveStyleProps = {
  isActive?: boolean;
  activeColor?: string;
};

export type FilterButtonProps = TouchableOpacityProps & {
  isActive?: boolean;
  color: string;
};
