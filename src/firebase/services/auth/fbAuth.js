import { auth, fbProvider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";

const handleFBSignin = async () => {
  let user;
  await signInWithPopup(auth, fbProvider)
    .then((result) => (user = result.user))
    .catch((error) => console.log(error.message));

  return user;
};

export default handleFBSignin;
