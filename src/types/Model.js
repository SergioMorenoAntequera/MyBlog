import { v4 as uuid } from 'uuid';

export default class Model {

    id = ""

    constructor() {
        this.id = uuid()
    }
}