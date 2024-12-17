import VacanciesService from '../domain/vacancies-service.js';
import VacanciesRepository from '../repositories/vacanсies-repository.js';

class VacanciesController {
    async getVacancies(req, res) {
        const {page, count, search} = req.query;
        try {
            const vacancies = await VacanciesRepository.getVacancies(page, count, search);
            res.status(200).json(vacancies);
        } catch (err) {
            res.sendStatus(404);
        }
    }

    async delete(req, res) {
        const idList = req.body;
        if (!idList || !idList.length) res.sendStatus(400);
        try {
            await VacanciesRepository.delete(idList);
            res.sendStatus(204);
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async createNew(_req, res) {
        try {
            await VacanciesService.createNew();
            res.sendStatus(201);
        } catch (err) {
            res.sendStatus(500);
        }
    }

    async update(req, res) {
        const {modifiedProperty, vacancyId} = req.body;
        if (!modifiedProperty || !vacancyId) res.sendStatus(400);
        try {
            const updateVacancy = await VacanciesRepository.update(modifiedProperty, vacancyId);
            res.status(200).json(updateVacancy);
        } catch (err) {
            res.sendStatus(404);
        }
    }

}

export default new VacanciesController();