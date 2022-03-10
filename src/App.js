import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import User from "./components/User";
import Login from "./components/Login";
import Product from "./components/Product";
import Forum from "./components/Forum";
import Forums from "./components/Forums";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:userid" element={<User />} />
        <Route path="user/:userid/:productid" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/forums/:forumid" element={<Forum />} />
      </Routes>
    </div>
  );
}

export default App;


