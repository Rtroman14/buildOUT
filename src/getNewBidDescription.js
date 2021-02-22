module.exports = async (page) => {
    try {
        let description = await page.evaluate(() => {
            const desc = document.querySelector(
                "#main form > div.row.mt-25 > section.col-sm-8.mb-45 > div:nth-child(3) > div > div"
            ).innerText;

            return desc;
        });

        return description;
    } catch (error) {
        console.log("GETNEWBIDDESCRIPTION ERROR ---", error);
    }
};
