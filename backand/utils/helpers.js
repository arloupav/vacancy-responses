export const convertObjToArrayKeys = obj => {
    const arr = [];

    for (let key in obj) {
        if (key !== 'id' && key !== '_id') {
            if (typeof obj[key] === 'object') {
                for (let deepKey in obj[key]) {
                    arr.push(key + '.' + deepKey);
                }
            } else {
                arr.push(key);
            }
        }
    }
    return arr;
};