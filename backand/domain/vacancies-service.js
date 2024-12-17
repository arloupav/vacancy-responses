import uniqid from 'uniqid';

import VacanciesRepository from '../repositories/vacanсies-repository.js';

class VacanciesService {

    async createNew() {
        const newVacancy = {
            id: uniqid(),
            company: '',
            vacancy: '',
            salary: {from: '', to: ''},
            status: '',
            note: ''
        };
        return VacanciesRepository.addNew(newVacancy);
    }

}

export default new VacanciesService();