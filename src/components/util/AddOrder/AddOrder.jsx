import { addDoc, collection, getFirestore } from 'firebase/firestore'

export const AddOrder = async (order) => {
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    return await addDoc(queryCollection, order)
}
