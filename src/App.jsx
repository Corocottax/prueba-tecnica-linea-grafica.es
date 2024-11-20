import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Catalogue from "./pages/Catalogue/Catalogue";
import { useEffect } from "react";

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/catalogue");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/catalogue" element={<Catalogue/>}/>
    </Routes>
  )
}

export default App