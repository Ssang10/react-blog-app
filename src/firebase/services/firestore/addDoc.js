import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";

const handleAddDoc = async (title, postText) => {
  try {
    await addDoc(collection(db, "posts"), {
      title,
      postText,
      author: {
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        id: auth.currentUser.uid,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default handleAddDoc;
