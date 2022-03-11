import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./Components/Navbar";

//pages
import Home from "./pages/Home";
import User from "./pages/User";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Forum from "./pages/Forum";
import Forums from "./pages/Forums";

function App() {
  return (
    <>
      <div className="App">
      <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/:userid" element={<User />} />
          <Route path="user/:userid/:productid" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/forums/:forumid" element={<Forum />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
