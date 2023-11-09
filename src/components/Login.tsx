import Header from './Header'
import Footer from './Footer'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import img from '../assets/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg'

const Login = () => {
      const auth = getAuth();
  const provider = new GoogleAuthProvider();
    const handleSign = () => {
        signInWithPopup(auth, provider)
    }
  return (
    <div>
      <Header />
      <div className="flex gap-4 justify-center my-36 items-center">
        <img src={img} alt="login" className="w-96" />
        <button
          onClick={handleSign}
          className="my-2 bg-sky-600 py-3 px-8 rounded-full text-white hover:bg-sky-700 cursor-pointer"
        >
          Login as Admin
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Login