import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import store from "./redux/store";
import { Provider } from "react-redux";
import { registerRootComponent } from "expo";
import Navigator from "./components/Navigator";

/* This is the root component for your app.
 * The Provider component makes the redux store available for nested child components.
 * PaperProvider allows us to apply theme to nested child components.
 * Navigator (a react-navigation component) contains the main app screens, manages the navigation tree, and contains the navigation state.
 */
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </Provider>
    );
  }
}

// This method to change app entry point, as per the expo documentation here https://docs.expo.io/versions/latest/sdk/register-root-component/
registerRootComponent(App);
