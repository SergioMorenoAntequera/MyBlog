import { getFirestore, collection, where, query, getDocs, orderBy, limit } from 'firebase/firestore';

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

const usePostsByUser = async () => {
    // const user = useUser()
    const q = query(collection(db, "posts"), where("user", "==", "user1"));
    const result = await getDocs(q);
    return result.map(r => r.data())
}

export {
    getRecentPosts,
    usePostsByUser
}   