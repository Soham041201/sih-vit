import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase/firebase";

const GoogleSignIn = async (callback) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("isAuth", true);
      const data = JSON.stringify(user);
      localStorage.setItem("user", data);
      callback(user)
    })
    .catch((error) => {
      console.log(error)
    });
};

export default GoogleSignIn;