import {app} from './app.js';
import {runDb} from './repositories/db.js';

const port = process.env.PORT || 5000;

const startApp = async () => {
    await runDb();
    app.listen(port,() => console.log(`сервер запущен на порту ${port}`));
};

await startApp();


