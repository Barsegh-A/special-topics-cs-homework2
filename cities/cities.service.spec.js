const rewire = require("rewire");
const chai = require("chai");
const chaiAsPromise = require("chai-as-promised");
const citiesService = rewire("./cities.service.js");
const NotFoundError = require('../common/errors/not-found.error');

chai.use(chaiAsPromise);
chai.should();

const mockData = {
    "post code": "9412",
    "country": "United States",
    "country abbreviation": "US",
    "places": [
        {
            "place name": "San Francisco",
            "longitude": "-122.4836",
            "state": "California",
            "state abbreviation": "CA",
            "latitude": "37.7593"
        }
    ]
};

const citiesRepository = {
    getCityDataByZipCode: (zipCode) => {
        if (zipCode === "94122") {
            return mockData;
        } else {
            throw new NotFoundError("No cities found");
        }
    },
};

citiesService.__set__("citiesRepository", citiesRepository);


describe("Cities Service", () => {
    it("Returns the result info for 94122 zip code", () => {
        return citiesService
            .getCityByZipCode("94122")
            .should.eventually.equal("San Francisco, CA, United States");
    });

    it("Throws NotFoundError", () => {
        return citiesService
            .getCityByZipCode("941222")
            .should.eventually.be.rejectedWith(NotFoundError);
    });
});
