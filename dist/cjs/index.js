"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./API/index.js");
const shared_js_1 = require("./util/shared.js");
class NekoBocc {
    /**
     * Get list of released hentai.
     *
     * @param {string} [page=1] - Page number to be shown. Default is `1`.
     * @returns {Promise<HentaiRelease[]>} Array object of latest release.
     */
    release(page) {
        return (0, index_js_1.release)(page);
    }
    latest(page) {
        return (0, index_js_1.latest)(page);
    }
    /**
     * Get search result.
     *
     * @param {string} query - A search query.
     * @returns {Promise<HentaiRelease[]>} Array object of search result.
     */
    search(query) {
        if (!query || (0, shared_js_1.valid)(query)) {
            throw Error('Please provide a valid search query!');
        }
        else {
            return (0, index_js_1.search)(query);
        }
    }
    /**
     * Get metadata of episode or hentai page from a valid URL.
     *
     * @param {string} url - Nekopoi episode or hentai page URL.
     * @returns {Promise<HentaiMetadata | EpisodeMetadata>} Object of episode or hentai metadata.
     */
    get(url) {
        if (!url || !(0, shared_js_1.valid)(url)) {
            throw Error('Please provide a valid URL!');
        }
        else {
            return (0, index_js_1.get)(url);
        }
    }
    /**
     * Get random hentai or episode page.
     *
     * @returns {Promise<HentaiMetadata | EpisodeMetadata>} Object of episode or hentai metadata.
     */
    random() {
        return (0, index_js_1.random)();
    }
}
exports.default = NekoBocc;
