import { doc, setDoc, getDoc, addDoc, updateDoc, CollectionReference, WithFieldValue, DocumentReference, UpdateData } from "firebase/firestore"; 
import { db } from "../../../firebase";

type PathProps = {
    path1: string;
    path2: string;
    data: any;
}

const fireStore = {
    get: (path1: string, path2: string ) => fireStoreApi.get(doc(db, path1, path2)),
    post: (path1: string, path2: string ) => fireStoreApi.get(doc(db, path1, path2)),
    put: (path1: string, path2: string, data: any) => fireStoreApi.put(doc(db, path1, path2), data),
    // update: ({path1, path2}: PathProps) => fireStoreApi.get(doc(db, path1, path2)),
}

const fireStoreApi = {
    get: <T>(reference: DocumentReference) => getDoc(reference),
    post: <T>(reference: CollectionReference, data: WithFieldValue) => addDoc(reference, data),
    put: <T>(reference: DocumentReference, data: WithFieldValue) => setDoc(reference, data),
    // update: <T>(reference: CollectionReference, data: UpdateData) => updateDoc(reference, data),
}

export default fireStore;