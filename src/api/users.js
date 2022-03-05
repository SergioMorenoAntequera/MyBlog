import { collection, where, query, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './_config';
import { getData } from '../utils/api';

const collectionName = "users"
const usersCol = collection(db, collectionName)

const getByUid = async (userUid) => {
    const q = query(usersCol, where("uid", "==", userUid));
    return getData(await getDocs(q));
}

const createNew = async ({uid, displayName, photoURL}) => {
    const foundPlayer = await getByUid(uid);
    if(foundPlayer.length) return foundPlayer[0]

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
    getByUid,
    createNew
}   