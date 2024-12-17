import express from 'express';

import VacanciesController from '../controllers/vacancies-controller.js';

const router = express.Router();

router.get('/', VacanciesController.getVacancies);
router.post('/', VacanciesController.createNew);
router.put('/', VacanciesController.update);
router.post('/delete', VacanciesController.delete);

export default router;