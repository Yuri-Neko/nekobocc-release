"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const shared_js_1 = require("../util/shared.js");
/**
 * Get search result.
 *
 * @param {string} query - A search query.
 * @returns {Promise<HentaiRelease[]>} Array object of search result.
 */
const search = async (query) => {
    const res = await axios_1.default.get(shared_js_1.baseUrl + shared_js_1.endpoints.search.replace('__QUERY', encodeURIComponent(query)), shared_js_1.header);
    const $ = (0, cheerio_1.load)(res.data);
    const array = [];
    $('div.result div.top').each((_i, e) => {
        const img = $(e).find('div.limitnjg > img').attr('src');
        const title = $(e).find('h2').text();
        const url = $(e).find('h2 > a').attr('href');
        array.push({
            img,
            title,
            url
        });
    });
    return array;
};
exports.search = search;
