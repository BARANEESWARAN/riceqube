import "./App.css";
import Template from "./components/templates/HomeTemplate/Template";
import HomePage from "./components/pages/HomePage/homePage";
import Login from "./components/pages/LoginPage/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginTemplate from "./components/templates/LoginTemplate/LoginTemplate";
import Redirect from "./components/pages/404 -Page/redirect";
import CcrSubmit from "./components/pages/Ccr-Submit/CcrSubmit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginTemplate>
                <Login />
              </LoginTemplate>
            }
          ></Route>

          <Route
            path="/homepage"
            element={
              <Template>
                <HomePage />
              </Template>
            }
          />
          <Route
            path="/ccr-submit"
            element={
              <Template>
                <CcrSubmit/>
              </Template>
            }
          />
          <Route
            path="*"
            element={
              <Template>
                <Redirect/>
              </Template>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
