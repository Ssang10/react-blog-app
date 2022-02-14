import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";

const handleDeleteDoc = async (id) => {
  await deleteDoc(doc(db, "posts", id));
};

export default handleDeleteDoc;
