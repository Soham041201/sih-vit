import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const GetData = async (email, collectionName, callback) => {
  const docRef = doc(db, collectionName, email);
  const docSnap = await getDoc(docRef);
  callback(docSnap);
};

export default GetData;
