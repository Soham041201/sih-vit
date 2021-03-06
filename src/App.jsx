import { Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import User from "./pages/User";
import Login from "./pages/Login";
// import Product from "./pages/Product";
import Forum from "./pages/Forum";
import Forums from "./pages/Forums";
import Nav from "./Components/Nav/Nav";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./chakra-theme/theme";
import Business from "./pages/Business";
import Problems from "./pages/Problems";
import Jobs from "./pages/Jobs";
import Notification from "./Components/Notification/Notification";

const App = () => {
  return (
    <Box>
      <ChakraProvider theme={theme}>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="user/:userid" element={<User />} />
            <Route path="user/business" element={<Business />} />
            {/* <Route path="user/:userid/:productid" element={<Product />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/noti" element={<Notification />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/forums/:forumid" element={<Forum />} />
          </Routes>
        </div>
      </ChakraProvider>
    </Box>
  );
};

export default App;
