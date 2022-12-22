import { collection, getFirestore, orderBy, query } from "firebase/firestore"

export const GetCategories = () => {
    const db = getFirestore()
    const queryCollection = query(collection(db,'categories'), orderBy("text", "desc"))
    return queryCollection
}