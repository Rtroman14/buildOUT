const axios = require("axios");

const wixDatabase = "https://www.buildoutcalifornia.org/_functions/rfpData";

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

            console.log(`Status text: ${res.statusText}`);

            if (res.statusText === "Created") {
                console.log("Posted new bid to Wix Corvid");
            } else {
                console.log("Couldn't post new bid to Wix Corvid");
            }
        } catch (error) {
            console.log("ERROR POSTING WIX DATABASE ---", error);
        }
    },

    async deleteWixBids(id) {
        try {
            const bidUrl = `${wixDatabase}/${id}`;

            await axios.delete(bidUrl);

            console.log("Deleted bid");
        } catch (error) {
            console.log("ERROR DELETING WIX DATABASE BID ---", error);
        }
    },
};
