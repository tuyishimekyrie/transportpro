// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import {
//   setPersistence,
//   signInWithRedirect,
//   inMemoryPersistence,
// } from "firebase/auth";
// import app from "../firebase";
// import {  useEffect, useState } from "react";

// interface Props {
//   uid: string;
//   displayName: string | null;
//   email: string | null;
//   photoURL: string | null;
// }

// const Main = () => {
//   const provider = new GoogleAuthProvider();
//   const [login, setLogin] = useState<Props>();
//     const auth = getAuth(app);
//     // useEffect(() => {
//     //     onAuthStateChanged(auth)
//     // },[])

//   const handleLogin =  () => {
//     // console.log('login',provider)
//     // const { user } = await signInWithPopup(auth, provider);
//     // const { uid, displayName, email, photoURL } = user;
//     // setLogin({ uid, displayName, email, photoURL });
//     // console.log(displayName);
//   setPersistence(auth, inMemoryPersistence)
//      .then(() => {
//        const provider = new GoogleAuthProvider();
//        // In memory persistence will be applied to the signed in Google user
//        // even though the persistence was set to 'none' and a page redirect
//        // occurred.
//        return signInWithPopup(auth, provider);
//     //   setLogin({ uid, displayName, email, photoURL });
//      })
//      .catch((error) => {
//        // Handle Errors here.
//     //    const errorCode = error.code;
//     //    const errorMessage = error.message;
//      });
//     };
//     useEffect(() => {
//           var unsubscribe = onAuthStateChanged((firebaseUser) => {
//         unsubscribe();
//     })
//   return (
//     <div>
//       <div>
//         {login?.displayName}
//         {/* <img src={login?.photoURL} alt="img"  className="w-10 rounded-full"/>{" "} */}
//       </div>
//       <button
//         className="bg-teal-500 py-3 px-6 rounded-full hover:bg-emerald-400"
//         onClick={handleLogin}
//       >
//         Sign up
//       </button>
//     </div>
//   );
// };

// export default Main;
