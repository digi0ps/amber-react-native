/**
 * @format
 */

import { AppRegistry } from "react-native";
// import App from './App';
import Main from "./src/main.js";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Main);
