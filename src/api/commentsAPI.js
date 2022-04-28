import { collection, where, query, getDocs, addDoc, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from './_config';
import { getData } from '../utils/api';

const collectionName = "comments"
const commentsCol = collection(db, collectionName)

const createNew = async ({body, userUid, attachedTo}) => {
    const newComment = {
        body: body,
        userUid: userUid,
        attachedTo: attachedTo,
        createdAt: Timestamp.now()
    }
    const docRef = await addDoc(commentsCol, newComment);
    return {...newComment, id:docRef.id}
}

const deleteComment = async (commentId) => {
    return await deleteDoc(doc(commentsCol, commentId));
}

const getByPost = async (postId) => {
    const q = query(commentsCol, where("attachedTo", "==", postId));
    return getData(await getDocs(q));
}


const CommentsApi = {
    getByPost,
    createNew,
    deleteComment
}   
export default CommentsApi