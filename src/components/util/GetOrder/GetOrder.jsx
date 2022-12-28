import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const GetOrder = async (id) => {
    const db = getFirestore()
    const queryData = doc(db, 'orders', id)
    return await getDoc(queryData)
}
