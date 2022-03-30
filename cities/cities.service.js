const NotFoundError = require('../common/errors/not-found.error');
const citiesRepository = require('./cities.repository');

module.exports = {
    async getCityByZipCode(zipCode) {
        let data;

        try{
            data = await citiesRepository.getCityDataByZipCode(zipCode);
        } catch (err){
            throw new NotFoundError("No cities found!");
        }

        if (!data) {
            throw new NotFoundError("No cities found!");
        }

        return `${data.places[0]['place name']}, ${data.places[0]['state abbreviation']}, ${data.country}`;
    },
}