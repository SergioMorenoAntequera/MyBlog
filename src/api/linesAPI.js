import { collection, where, query, getDocs, Timestamp, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from './_config';
import { v4 as uuid } from 'uuid';
import { getData } from 'utils/api';
import Line from 'types/lineTypes';

const collectionName = "lines"
const linesCol = collection(db, collectionName)

const createNew = async (newLine) => {
    setDoc(doc(db, collectionName, newLine.id), {...newLine});
    return newLine
}

const remove = async (reactionId) => {
    return deleteDoc(doc(linesCol, reactionId));
}

const getByPost = async (postId) => {
    const q = query(linesCol, where("post", "==", postId));
    return getData(await getDocs(q));
}

const LinesAPI = {
    getByPost,
    createNew,
    remove
}
export default LinesAPI;