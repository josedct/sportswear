import {collection, getFirestore, query, where} from 'firebase/firestore'

export const GetItems = (filter) => {
    const db = getFirestore()
    const queryCollection = collection(db,'products')
    const queryData = (filter === 'all') ? queryCollection : query(queryCollection, where('CATEGORIA','==', filter))
    return queryData
}
