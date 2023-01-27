require("dotenv").config();

const Wix = require("./src/Wix");

(async () => {
    try {
        const bids = await Wix.getWixBids(process.env.DATABASE);
        console.log(bids);
    } catch (error) {
        console.log(error);
    }
})();
