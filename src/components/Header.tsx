import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

// import { useEffect, useState } from "react";
// interface Props {
//   displayName: string | null;
//   email: string;
//   photoURL: string;
// }

const Header = () => {
  // const [users, setUsers] = useState<Props[]>([]);

  // .then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  //  const credential = GoogleAuthProvider.credentialFromResult(result);
  //  const token = credential.accessToken;
  // The signed-in user info.
  // const user: = result.user;
  // setUsers(user);
  // console.log(user);
  // console.log( users);
  // ...
  // });
  //  .catch((error) => {
  // Handle Errors here.
  //  const errorCode = error.code;
  //  const errorMessage = error.message;
  // The email of the user's account used.
  // const email = error.customData.email;
  // The AuthCredential type that was used.
  //  const credential = GoogleAuthProvider.credentialFromError(error);
  //  console.log(errorCode, errorMessage);
  // ...
  //  });
  // console.log('clicked')
  // };
  //  useEffect(() => {
  //    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //      setUsers(currentUser);
  //    });
  //    return () => {
  //      unsubscribe();
  //    };
  //  }, []);
  return (
    <div className="px-4 py-2 flex-col   sm:flex sm:flex-row sm:justify-between  border-b-2 border-slate-300 ">
      <div className="logo">
        <img src={logo} alt="logo" className="w-10 rounded-lg" />
      </div>
      <ul className="flex flex-wrap items-center gap-3">
        <li className="text-xs sm:text-xl hover:text-sky-500">
          <NavLink
            to="/HomePage"
            className={({ isActive }) =>
              isActive ? "text-sky-500 font-bold border-b-2 border-sky-400" : ""
            }
          >
            Home
          </NavLink>
        </li>{" "}
        <li className="text-xs sm:text-xl hover:text-sky-500">
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-sky-500 font-bold border-b-2 border-sky-400" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li className="text-xs sm:text-xl hover:text-sky-500">
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive ? "text-sky-500 font-bold border-b-2 border-sky-400" : ""
            }
          >
            Services
          </NavLink>
        </li>
        <li className="text-xs sm:text-xl hover:text-sky-500 ">
          <NavLink
            to="/cars"
            className={({ isActive }) =>
              isActive ? "text-sky-500 font-bold border-b-2 border-sky-400" : ""
            }
          >
            Cars
          </NavLink>
        </li>
        <li className="text-xs sm:text-xl hover:text-sky-500 ">
          <NavLink
            to="/Airplanes"
            className={({ isActive }) =>
              isActive ? "text-sky-500 font-bold border-b-2 border-sky-400" : ""
            }
          >
            Airplanes
          </NavLink>
        </li>
        <li className="text-xs sm:text-xl hover:text-sky-500 ">
          <NavLink
            to="/Boats"
            className={({ isActive }) =>
              isActive ? "text-sky-500 font-bold border-b-2 border-sky-400" : ""
            }
          >
            Boats
          </NavLink>
        </li>
        <li className="text-xs sm:text-xl hover:text-sky-500 ">
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-sky-500 font-bold border-b-2 border-sky-400" : ""
            }
          >
            Contact US
          </NavLink>
        </li>
        <li className="text-xs sm:text-xl hover:text-sky-500 ">
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive ? "text-sky-500 font-bold border-b-2 border-sky-400" : ""
            }
          >
            {" "}
             Admin
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
