import { collection, where, query, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './_config';
import { getData } from '../utils/api';

const collectionName = "reactions"
const reactionsCol = collection(db, collectionName)

const createNew = async ({userUid, type, attachedTo, attachedToType}) => {
    const newReaction = {
        userUid: userUid,
        type: type,
        attachedTo: attachedTo,
        attachedToType: attachedToType,
        createdAt: Timestamp.now()
    }
    const docRef = await addDoc(reactionsCol, newReaction);
    return {...newReaction, id:docRef.id}
}

const getByPost = async (postId) => {
    const q = query(reactionsCol, where("attachedTo", "==", postId));
    return getData(await getDocs(q));
}

export {
    getByPost,
    createNew
}   