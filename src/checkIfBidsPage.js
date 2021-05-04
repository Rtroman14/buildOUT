// navigate to bids
// wait 15 seconds
// check if on bids page
// if on login page, try again 3 times

module.exports = async (page) => {
    try {
        await page.evaluate(() => {
            let title = document.querySelector("h1.text-center").innerText;

            if (title === "Login") {
                location.reload(true);
                console.log("Reloaded page. Was promped to Login");
            }
        });
        let elementAtBottom =
            "#searchForm > div:nth-child(5) > div:nth-child(6) > div > div:nth-child(1) > div";
        await page.waitForSelector(elementAtBottom);
        await page.waitFor(15000);
        console.log("Page loaded...");
    } catch (error) {
        console.log("CHECKIFBIDSPAGE ERROR ---", error);
    }
};
