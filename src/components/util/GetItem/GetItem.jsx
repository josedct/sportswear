import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const GetItem = async (id) => {
  const db = getFirestore()
  const queryData = doc(db, 'products', id )
  return await getDoc(queryData)
}

