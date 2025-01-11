import "./App.css";

import { Provider } from "react-redux";
import store from "./main/store/store";
import ExampleComponent from "./main/temp/ExampleComponent";

function App() {
  return (
    <Provider store={store}>
      <>
        <ExampleComponent />
      </>
    </Provider>
  );
}

export default App;
