import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase-config";

const createAccount = async (name, email, password) => {
  let user;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => console.log(error.message));

  await updateProfile(auth.currentUser, {
    displayName: name,
  });

  return user;
};

const loginEmailPassword = async (email, password) => {
  let user;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch(() => alert("Wrong Email or Password"));

  return user;
};

export { createAccount, loginEmailPassword };
