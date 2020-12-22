const axios = require("axios");

module.exports = async (text) => {
    // notify me about this in Slack
    await axios.post(
        "https://hooks.slack.com/services/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",
        {
            text,
        }
    );
};
