import { collection, where, query, getDocs, orderBy, limit, addDoc, Timestamp, documentId, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { db } from './_config';
import { getData } from '../utils/api';
import CommentsApi from './commentsAPI';
import ReactionsAPI from './reactionsAPI';
import { PostStatus } from 'types/postTypes';

const collectionName = "posts"
const postsCol = collection(db, collectionName)

const createNew = async (userId, {body, title}) => {
    const newPost = {
        status: PostStatus.DRAFT,
        userId: userId,
        title: title,
        body: body,
        createdAt: Timestamp.now()
    }
    const docRef = await addDoc(postsCol, newPost);
    return {...newPost, id:docRef.id}
}

const updatePost = async (post) => {
    const docRef = await setDoc(doc(db, collectionName, post.id), post);
    return post
}

const deletePost = async (postId) => {
    await deleteDoc(doc(postsCol, postId));
    
    const comments = await CommentsApi.getByPost(postId)
    comments.forEach(comment => CommentsApi.deleteComment(comment.id))

    const reactions = await ReactionsAPI.getByPost(postId)
    reactions.forEach(reaction => ReactionsAPI.deleteReaction(reaction.id))
}

const getRecent = async (limitAmt = 25) => {
    const q = query(postsCol, 
        where("status", "==", PostStatus.PUBLIC), 
        orderBy("createdAt"), 
        limit(limitAmt)
    );
    return getData(await getDocs(q))
}

const getByUser = async (userId) => {
    const q = query(postsCol, where("userId", "==", userId), orderBy("createdAt"));
    return getData(await getDocs(q))
}

const getById = async (postId) => {
    const q = query(postsCol, where(documentId(), '==', postId));
    return getData(await getDocs(q))
}

export {
    getRecent,
    getByUser,
    getById,
    createNew,
    deletePost,
    updatePost
}   