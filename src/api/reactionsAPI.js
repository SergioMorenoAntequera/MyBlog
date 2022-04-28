import { collection, where, query, getDocs, Timestamp, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from './_config';
import { getData } from '../utils/api';
import { v4 as uuid } from 'uuid';

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
    const newReactionId = uuid()
    setDoc(doc(db, collectionName, newReactionId), newReaction);
    return {...newReaction, id:newReactionId}
}

const deleteReaction = async (reactionId) => {
    return await deleteDoc(doc(reactionsCol, reactionId));
}

const remove = async (id) => {
    await deleteDoc(doc(db, collectionName, id));
}

const getByPost = async (postId) => {
    const q = query(reactionsCol, where("attachedTo", "==", postId));
    return getData(await getDocs(q));
}

const ReactionsAPI = {
    getByPost,
    remove,
    createNew,
    deleteReaction
}
export default ReactionsAPI;