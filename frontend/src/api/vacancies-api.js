export const vacanciesAPI = {
    // baseURL: 'http://localhost:5000/api/vacancies',
    baseURL: 'vr-backand-production.up.railway.app/api/vacancies',

    async getVacancies(currentPage, currentCount, searchQuery) {
        const url = `?page=${currentPage}&count=${currentCount}&search=${searchQuery}`;
        return await fetch(this.baseURL + url);
    },

    async removeVacancies(idList) {
        return await fetch(`${this.baseURL}/delete`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(idList)
            });
    },

    async createNewVacancy() {
        return await fetch(this.baseURL, {method: 'POST'});
    },

    async updateVacancy(modifiedProperty, vacancyId) {
        console.log(modifiedProperty);
        return await fetch(this.baseURL,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({modifiedProperty, vacancyId})
            }
        );
    },

};


