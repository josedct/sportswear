import { doc, getFirestore } from 'firebase/firestore'

export const GetItem = (id) => {
  const db = getFirestore()
  const queryData = doc(db, 'products', id )
  return queryData
}
