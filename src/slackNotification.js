require("dotenv").config();

const axios = require("axios");

module.exports = async (text) => {
    // notify me about this in Slack
    await axios.post(process.env.TWO_PERCENT_DM, {
        text,
    });
};
