import {MongoClient} from 'mongodb';

const url = process.env.MONGO_URL || 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dbName = 'vacancy-responses';
const db = client.db(dbName);
export const vacanciesCollection = db.collection('vacancies');

export const runDb = async () => {
    try {
        await client.connect();
        console.log('Connected successfully ');
    } catch (e) {
        console.log('Connected not successfully');
        await client.close();
    }
};



