require("dotenv").config();

const axios = require("axios");

module.exports = async (username, text) => {
    let payload = {
        text,
        username,
        icon_emoji: ":warning:",
        unfurl_links: true,
        channel: "#error-alerts",
    };

    try {
        await axios.post(process.env.SLACK_CHANNELS, payload);
    } catch (error) {
        console.log("slackNotification() --", error);
    }
};
