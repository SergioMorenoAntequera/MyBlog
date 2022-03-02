import { getFirestore, collection, where, query, getDocs, orderBy, limit, addDoc, Timestamp } from 'firebase/firestore';

const db = getFirestore();
const postsCol = collection(db, "posts")

const getRecent = async (limitAmt = 25) => {
    const q = query(postsCol, orderBy("createdAt", "desc"), limit(limitAmt));
    return getData(q)
}

const getByUser = async (userId) => {
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    return getData(q)
}

const createNew = async (userId, body) => {
    await addDoc(collection(db, "posts"), {
        userId: userId,
        body: body,
        createdAt: Timestamp.now()
    });
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