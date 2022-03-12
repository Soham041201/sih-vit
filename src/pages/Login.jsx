import GoogleSignIn from "../functions/authProviders/googleSign";
import PostData from "../functions/dataBase/postData";
import UploadImage from "../functions/dataBase/uploadImage";
import GetData from "../functions/dataBase/getData";


function Login() {
  return (
    <>

      <button
        onClick={() =>
          GoogleSignIn((user) => {
            console.log(user);
          })
        }
      >
        Google login
      </button>
      <button
        onClick={async () =>
          await PostData(
            {
              firstName: "Soham",
              lastName: "Sattigeri",
              prnNo: 12010235,
              email: "sattigeri.soham@gmail.com",
            },
            "register",
            (data) => {
              console.log(data);
            }
          )
        }
      >
        Send to firestore
      </button>

      <button
        onClick={async () =>
          await GetData("sattigeri.soham@gmail.com", "register", (data) => {
            console.log(data);
          })
        }
      >
        get from firestore
      </button>

      <input
        type="file"
        onChange={(e) =>
          UploadImage(
            e,
            e.target.files[0],
            `${e.target.files[0].name}`,
            (url) => {
              console.log(url);
            }
          )
        }
      />
    </>
  );
}

export default Login;
