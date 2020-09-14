const axios = require("axios");

let wixDatabase = "https://www.buildoutcalifornia.org/_functions/rfpData";

module.exports = {
    async getWixBids() {
        try {
            let res = await axios.get(wixDatabase);

            let data = res.data.bids;
            console.log("Queried Wix Corvid");
            return data;
        } catch (error) {
            console.log("ERROR GETTING WIX DATABASE ---", error);
        }
    },

    async postWixBids(newBid) {
        try {
            let res = await axios.post(wixDatabase, newBid);

            console.log(`Status code: ${res.status}`);
            console.log(`Status text: ${res.statusText}`);
        } catch (error) {
            console.log("ERROR POSTING WIX DATABASE ---", error);
        }
    },
};
