

const getData = async (querySnapshot) => {
    const data = []; // Cant do a map
    querySnapshot.forEach((doc) => {
        data.push( {id:doc.id, ...doc.data()} );
    });
    return data
} 

export {
    getData
}