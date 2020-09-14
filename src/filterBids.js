// Find urlLinks that are in scrapedBids but not in wixBids
module.exports = (scrapedBids, wixBids) => {
    return scrapedBids.filter((scrapedBid) => {
        return !wixBids.some((wixBid) => {
            return scrapedBid.urlLink == wixBid.urlLink;
        });
    });
};
