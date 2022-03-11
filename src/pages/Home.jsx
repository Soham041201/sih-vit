import React from "react";
import { isAuthenticated } from "../utils/Authenticated";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <h2>{isAuthenticated()}</h2>
    </>
  );
}



export default Home;
