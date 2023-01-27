require("dotenv").config();

const axios = require("axios");

const moment = require("moment");

class Wix {
    async getWixBids(database) {
        try {
            let res = await axios.get(`${process.env.URL_QUERY}/${database}`, {
                headers: {
                    auth: process.env.WIX_API,
                },
            });

            let data = res.data.bids;
            console.log("Queried Wix Corvid");
            return data;
        } catch (error) {
            console.log("ERROR GETTING WIX DATABASE ---", error);
            return [];
        }
    }

    async postWixBids(database, newBid) {
        try {
            const res = await axios.post(`${process.env.URL_QUERY}/${database}`, newBid, {
                headers: {
                    auth: process.env.WIX_API,
                },
            });

            console.log(`Posted new bid to Wix Corvid status: ${res.statusText}`);
        } catch (error) {
            console.log("ERROR POSTING WIX DATABASE ---", error);
            return false;
        }
    }

    async deleteWixBids(database, id) {
        try {
            const bidUrl = `${process.env.URL_QUERY}/${database}/${id}`;

            let res = await axios.delete(bidUrl, {
                headers: {
                    auth: process.env.WIX_API,
                },
            });

            console.log(`Deleted outdated bid status: ${res.statusText}`);
        } catch (error) {
            console.log("ERROR DELETING WIX DATABASE BID ---", error);
        }
    }

    async removeOutdatedBids(database) {
        try {
            const today = moment().format("MM/DD/YYYY");

            const allBids = await this.getWixBids(database);

            for (let bid of allBids) {
                const id = bid._id;
                const rfpDueDate = bid.rfpDueDate.split(" ")[0];

                if (today > rfpDueDate) {
                    await this.deleteWixBids(database, id);
                }
            }
        } catch (error) {
            console.log("ERROR REMOVING BIDS ---", error);
        }
    }
}

module.exports = new Wix();
