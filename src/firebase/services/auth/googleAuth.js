import { auth, googleProvider } from "./../../firebase-config";
import { signInWithPopup } from "firebase/auth";

const handleGoogleSignin = async () => {
  let user;
  await signInWithPopup(auth, googleProvider)
    .then((result) => (user = result.user))
    .catch((error) => console.log(error.message));

  return user;
};

export default handleGoogleSignin;
