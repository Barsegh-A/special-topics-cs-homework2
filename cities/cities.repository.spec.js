const axios = require("axios");
const sinon = require("sinon");
const { getCityDataByZipCode } = require("./cities.repository");

describe("Testing cities.repository file", function () {
    describe("Testing getCityDataByZipCode function", function () {
        it("Checks that axios.get() is called just once.", async () => {
            const stub = sinon
                .stub(axios, "get")
                .callsFake(() => Promise.resolve("succes"));

            await getCityDataByZipCode(94122);
            sinon.assert.calledOnce(stub);
        });
    });

});