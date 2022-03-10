import { getAuth } from "firebase/auth";
import app from "./firebase/firebase";

const RegisterUsingEmailAndPassword = async (email, password, callback) => {
  const auth = getAuth(app);
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      localStorage.setItem("isAuth", true);
      const data = JSON.stringify(user);
      localStorage.setItem("user", data);
      callback(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default RegisterUsingEmailAndPassword;