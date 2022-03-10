import GoogleSignIn from "../functions/authProviders/googleSign";

function Home() {  
  return (
    <>
    <button onClick={()=> GoogleSignIn((user) => {
      console.log(user);
    })}>
      Google login
    </button>
      <h1>Home</h1>
    </>
  );
}

export default Home;
