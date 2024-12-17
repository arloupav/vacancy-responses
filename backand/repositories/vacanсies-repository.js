import {vacanciesCollection} from './db.js';
import {convertObjToArrayKeys} from '../utils/helpers.js';

class VacanciesRepository {

    async getVacancies(page, count, searchValue) {
        let filter = {};
        if (searchValue) {
            const vacancy = await vacanciesCollection.findOne(filter);
            const searchKeys = convertObjToArrayKeys(vacancy);
            const searchExpressions = searchKeys.map(key => ({[key]: {$regex: searchValue}}));

            filter = {$or: searchExpressions};
        }

        const skipValue = ((page - 1) * count);

        const vacancies = await vacanciesCollection.find(filter).skip(skipValue).limit(+count).toArray();
        const totalCount = await vacanciesCollection.find(filter).count();
        return {vacancies, totalCount};
    }

    async addNew(newVacancy) {
        return await vacanciesCollection.insertOne(newVacancy);
    }

    async update(modifiedProperty, vacancyId) {
        return await vacanciesCollection.findOneAndUpdate({id: vacancyId},
            {$set: modifiedProperty},
            {returnDocument: 'after'});
    }

    async delete(idList) {
        await vacanciesCollection.deleteMany({id: {$in: idList}});
    }

}

export default new VacanciesRepository();

