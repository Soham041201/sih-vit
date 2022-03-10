import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";


const GetData = async (data,docName, callback) => {
    const docRef =  doc(db, docName, data.email);
    const docSnap = await getDoc(docRef);
    callback(docSnap);
}

export default GetData;