import { Switch } from "@chakra-ui/react";
import useThemeContext from "../hooks/useThemeContext";

export default function ChakraSwitch() {
  const { handleTheme } = useThemeContext();
  return <Switch size="md" id="isChecked" onChange={handleTheme} />;
}
