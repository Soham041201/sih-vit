import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const PostData = async (data,docName, callback) => {

  await setDoc(doc(db, `${docName}`, `${data.email}`), data)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default  PostData;