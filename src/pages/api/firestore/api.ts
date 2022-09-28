import { doc, setDoc, getDoc, addDoc, updateDoc, CollectionReference, WithFieldValue, DocumentReference, UpdateData } from "firebase/firestore"; 
import { db } from "../../../firebase";

type PathProps = {
    path1: string,
    path2: string
}

const fireStore = {
    post: ({path1, path2}: PathProps) => fireStoreApi.get(doc(db, path1, path2)),
    put: ({path1, path2}: PathProps) => fireStoreApi.get(doc(db, path1, path2)),
    get: ({path1, path2}: PathProps) => fireStoreApi.get(doc(db, path1, path2)),
    update: ({path1, path2}: PathProps) => fireStoreApi.get(doc(db, path1, path2)),
}

const fireStoreApi = {
    post: <T>(reference: CollectionReference, data: WithFieldValue) => addDoc(reference, data),
    get: <T>(reference: DocumentReference) => getDoc(reference),
    // update: <T>(reference: CollectionReference, data: UpdateData) => updateDoc(reference, data),
    put: <T>(reference: CollectionReference, data: WithFieldValue) => setDoc(reference, data),
}

export default fireStore;