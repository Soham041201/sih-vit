import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase";

export const auth = getAuth(app);

const LoginWithEmail = async (email, password, callback) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("isAuth", true);
      const data = JSON.stringify(user);
      localStorage.setItem("user", data);
      callback(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Logout = async () => {
  await signOut(auth)
    .then(() => {
      localStorage.clear();
    })
    .catch((error) => {
      console.log(error);
    });
};

export { LoginWithEmail, Logout };