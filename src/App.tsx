import "./main/css/index.css";

import { Provider } from "react-redux";
import store from "./main/store/store";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NacelleSearch from "./main/components/search/NacelleSearch";
import NacelleNotification from "./main/components/notification/NacelleNotification";

const HomePage = () => (
  <div>
    <h1 className="ml-10 text-1xl font-extrabold text-gray-500">Home</h1>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex gap-6 p-4 bg-gray-100 rounded-lg shadow-md mb-10">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 transition duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="text-blue-600 hover:text-blue-800 transition duration-200 font-medium"
          >
            Search
          </Link>
          <Link
            to="/notification"
            className="text-blue-600 hover:text-blue-800 transition duration-200 font-medium"
          >
            Notifications
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notification" element={<NacelleNotification />} />
          <Route
            path="/search"
            element={
              <NacelleSearch onSearch={() => {}} placeholder={"Search..."} />
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
