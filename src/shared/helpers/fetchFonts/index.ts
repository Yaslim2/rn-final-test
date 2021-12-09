import * as Font from "expo-font";
import {
  PoppinsItalicBold,
  PoppinsBold,
  PoppinsItalicLight,
  PoppinsItalicRegular,
  PoppinsLight,
  PoppinsRegular,
  RobotoBold,
  RobotoItalicBold,
  RobotoItalicLight,
  RobotoItalicRegular,
  RobotoLight,
  RobotoRegular,
} from "@shared/themes/index";

const fetchFonts = () => {
  return Font.loadAsync({
    [PoppinsItalicBold]: require("../../../assets/fonts/Poppins-BoldItalic.ttf"),
    [PoppinsBold]: require("../../../assets/fonts/Poppins-Bold.ttf"),
    [PoppinsItalicRegular]: require("../../../assets/fonts/Poppins-Italic.ttf"),
    [PoppinsRegular]: require("../../../assets/fonts/Poppins-Regular.ttf"),
    [PoppinsItalicLight]: require("../../../assets/fonts/Poppins-LightItalic.ttf"),
    [PoppinsLight]: require("../../../assets/fonts/Poppins-Light.ttf"),
    [RobotoItalicBold]: require("../../../assets/fonts/Roboto-BoldItalic.ttf"),
    [RobotoBold]: require("../../../assets/fonts/Roboto-Bold.ttf"),
    [RobotoItalicRegular]: require("../../../assets/fonts/Roboto-Italic.ttf"),
    [RobotoRegular]: require("../../../assets/fonts/Roboto-Regular.ttf"),
    [RobotoItalicLight]: require("../../../assets/fonts/Roboto-LightItalic.ttf"),
    [RobotoLight]: require("../../../assets/fonts/Roboto-Light.ttf"),
  });
};

export default fetchFonts;
