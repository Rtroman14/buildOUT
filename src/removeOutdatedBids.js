const moment = require("moment");
const { getWixBids, deleteWixBids } = require("./database/wixDatabase");

module.exports = async (database) => {
    try {
        const today = moment().format("MM/DD/YYYY");

        const allBids = await getWixBids(database);

        for (let bid of allBids) {
            const id = bid._id;
            const rfpDueDate = bid.rfpDueDate.split(" ")[0];

            if (today > rfpDueDate) {
                await deleteWixBids(database, id);
            }
        }
    } catch (error) {
        console.log("ERROR REMOVING BIDS ---", error);
    }
};
