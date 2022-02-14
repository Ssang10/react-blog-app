import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const logout = async () => {
  let signedOut;
  await signOut(auth)
    .then(() => (signedOut = true))
    .catch((error) => console.log(error.message));

  return signedOut;
};

export default logout;
