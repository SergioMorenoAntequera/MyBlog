import { getFirestore, collection, where, query, getDocs, orderBy, limit, addDoc, Timestamp } from 'firebase/firestore';

const db = getFirestore();
const postsCol = collection(db, "posts")

const getRecentPosts = async () => {
    const q = query(postsCol, orderBy("createdAt", "desc"), limit(25));
    const querySnapshot = await getDocs(q);
    const data = []; // Cant do a map
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data
}

const getPostsByUser = async (userId) => {
    const q = query(collection(db, "posts"), where("user", "==", "user1"));
    const querySnapshot = await getDocs(q);
    const data = []; // Cant do a map
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data
}

const createNewPost = async (userId, body) => {
    await addDoc(collection(db, "posts"), {
        userId: userId,
        body: body,
        createdAt: Timestamp.now()
    });
}

export {
    getRecentPosts,
    getPostsByUser,
    createNewPost
}   