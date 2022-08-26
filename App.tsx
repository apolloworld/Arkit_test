import { Provider as ReduxProvider } from "react-redux";
import { RootNavigator } from "./src/Navigator/RootNavigator";
import { store } from "./src/store/initStore";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
}
