module.exports = async (page) => {
    try {
        let description = await page.evaluate(() => {
            const desc = document.querySelector("div.panel-body > div > div.col-xs-12 > div")
                .innerText;

            return desc;
        });

        return description;
    } catch (error) {
        console.log("GETNEWBIDDESCRIPTION ERROR ---", error);
    }
};
