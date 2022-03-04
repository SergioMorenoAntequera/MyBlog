import { getFirestore, collection, where, query, getDocs, orderBy, limit, addDoc, Timestamp } from 'firebase/firestore';

const db = getFirestore();
const collectionName = "posts"

const postsCol = collection(db, collectionName)

const getRecent = async (limitAmt = 25) => {
    const q = query(postsCol, orderBy("createdAt", "desc"), limit(limitAmt));
    return getData(q)
}

const getByUser = async (userId) => {
    const q = query(collection(db, collectionName), where("userId", "==", userId));
    return getData(q)
}

const createNew = async (userId, body) => {
    const newPost = {
        userId: userId,
        body: body,
        createdAt: Timestamp.now()
    }
    const docRef = await addDoc(collection(db, collectionName), newPost);
    return {...newPost, id:docRef.id}
}

const getData = async (query) => {
    const querySnapshot = await getDocs(query);
    const data = []; // Cant do a map
    querySnapshot.forEach((doc) => {
        data.push( {id:doc.id, ...doc.data()} );
    });
    return data
} 

export {
    getRecent,
    getByUser,
    createNew
}   