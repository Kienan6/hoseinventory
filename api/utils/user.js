const bcryptjs = require('bcryptjs');

export default function comparePass(password, hash){
    return bcryptjs.compare(password, hash); //returns a promise
}

