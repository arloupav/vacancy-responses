export const vacanciesAPI = {
    baseURL: 'http://localhost:5000/api/vacancies',
    //'https://vacancy-ww2c.onrender.com/api/vacancies',

    async getVacancies(currentPage, currentCount, searchQuery) {
        const url = `?page=${currentPage}&count=${currentCount}&search=${searchQuery}`;
        return await fetch(this.baseURL + url);
    },

    async getFoundedVacancies(searchValue) {
        return await fetch(this.baseURL + `/search?query=${searchValue}`);
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


