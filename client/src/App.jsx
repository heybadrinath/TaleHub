import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import AllRoutes from "./AllRoutes";
import Login from "./components/login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <BrowserRouter>
      {!isLogin && (
        <div className="appJSX">
          {!isLogin && <NavBar />}
          {!isLogin && <AllRoutes onLoginClick={handleLoginClick} />}
        </div>
      )}
      {isLogin && <Login onLoginClick={handleLoginClick}/>}
    </BrowserRouter>
  );
}

export default App;
