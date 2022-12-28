import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore'

export const GetCategories = async () => {
    const db = getFirestore()
    const queryCollection = query(collection(db,'categories'), orderBy('text', 'desc'))
    return await getDocs(queryCollection)
}

