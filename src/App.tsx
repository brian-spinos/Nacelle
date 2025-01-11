import "./App.css";
import "./main/css/index.css";

import { Provider } from "react-redux";
import store from "./main/store/store";
import ExampleComponent from "./main/temp/ExampleComponent";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Page1 = () => <div>Page1</div>;
const Page2 = () => <div>Page2</div>;
const Page3 = () => (
  <>
    <p>Page3</p>
    <>
      <ExampleComponent />
    </>
    <p className="text-3xl bg-red-50">Hello tailwind</p>
  </>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
