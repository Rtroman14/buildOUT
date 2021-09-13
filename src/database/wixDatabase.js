require("dotenv").config();

const axios = require("axios");

module.exports = {
    async getWixBids(database) {
        try {
            let res = await axios.get(`${process.env.URL_QUERY}/${database}`);

            let data = res.data.bids;
            console.log("Queried Wix Corvid");
            return data;
        } catch (error) {
            console.log("ERROR GETTING WIX DATABASE ---", error);
            return [];
        }
    },

    async postWixBids(database, newBid) {
        try {
            const res = await axios.post(`${process.env.URL_QUERY}/${database}`, newBid);

            console.log(`Posted new bid to Wix Corvid status: ${res.statusText}`);
        } catch (error) {
            console.log("ERROR POSTING WIX DATABASE ---", error);
        }
    },

    async deleteWixBids(database, id) {
        try {
            const bidUrl = `${process.env.URL_QUERY}/${database}/${id}`;

            let res = await axios.delete(bidUrl);

            console.log(`Deleted outdated bid status: ${res.statusText}`);
        } catch (error) {
            console.log("ERROR DELETING WIX DATABASE BID ---", error);
        }
    },
};
