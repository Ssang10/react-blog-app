import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const handleGetDocs = async () => {
  const documents = await getDocs(collection(db, "posts"));
  return documents.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export default handleGetDocs;
