import { collection, where, query, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './_config';
import { getData } from './_utils';

const collectionName = "users"
const usersCol = collection(db, collectionName)

const getById = async (userId) => {
    const q = query(usersCol, where("userId", "==", userId));
    return getData(await getDocs(q));
}

const createNew = async ({uid, displayName, photoURL}) => {
    const newUser= {
        uid: uid,
        displayName: displayName,
        photoUrl: photoURL,
        createdAt: Timestamp.now()
    }
    const docRef = await addDoc(usersCol, newUser);
    return {...newUser, id:docRef.id}
}

export {
    getById,
    createNew
}   