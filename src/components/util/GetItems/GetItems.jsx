import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

export const GetItems = async (filter) => {
    const db = getFirestore()
    const queryCollection = collection(db,'products')
    const queryData = (filter === 'all') ? queryCollection : query(queryCollection, where('category','==', filter))
    return await getDocs(queryData)
}
