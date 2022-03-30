const axios = require("axios")

module.exports = {
    async getCityDataByZipCode(zipCode) {
        let res = await axios.get("https://api.zippopotam.us/us/" + zipCode);

        return res.data;
    },
}