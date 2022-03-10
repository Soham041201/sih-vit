import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadImage = (e,file,fileName,callback)=>{
    e.preventDefault();
    const refer = ref(storage, `/images/${fileName}`);
    uploadBytes(refer, file)
      .then((snapshot) => {
        console.log("File Uploaded");
      })
      .then(() => {
        getDownloadURL(ref(storage, `images/${fileName}`)).then((url) => {
          callback(url);
        });
      });
}
export default UploadImage;