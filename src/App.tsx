import "./App.css";
import "./main/css/index.css";

import { Provider } from "react-redux";
import store from "./main/store/store";
import ExampleComponent from "./main/temp/ExampleComponent";

function App() {
  return (
    <Provider store={store}>
      <>
        <ExampleComponent />
      </>

      <p className="text-3xl bg-red-50">Hello tailwind</p>
    </Provider>
  );
}

export default App;
