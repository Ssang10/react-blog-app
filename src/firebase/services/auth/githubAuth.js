import { auth, gitHubProvider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";

const handleGitHubSignin = async () => {
  let user;
  await signInWithPopup(auth, gitHubProvider)
    .then((result) => (user = result.user))
    .catch((error) => console.log(error.message));

  return user;
};

export default handleGitHubSignin;
