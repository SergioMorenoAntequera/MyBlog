import { Timestamp } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';

export default class Model {

    id = ""
    createdAt = new Timestamp()

    constructor() {
        this.id = uuid()
        this.createdAt = Timestamp.now()
    }
}