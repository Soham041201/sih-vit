import React from "react";
import { useParams } from "react-router-dom";
import { authentication } from "../firebase/firebase";

export default function UserProfile() {
  const { userid } = useParams();

  function tokenanddata() {
    authentication.onAuthStateChanged(async (user) => {
      if (user) {
        let token = await user.getIdToken();
        // console.log(token)
        fetch("http://127.0.0.1:8000/useapi/allprofiles/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
          });
      }
    });
  }

  return (
    <div className="topDesc">
      <p>{userid}</p>
      <button onClick={tokenanddata}>Feth Details</button>
    </div>
  );
}
