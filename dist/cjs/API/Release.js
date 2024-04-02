"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.release = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const shared_js_1 = require("../util/shared.js");
/**
 * Get list of released hentai.
 *
 * @param {number} [page=1] - Page number to be shown. Default is `1`.
 * @returns {Promise<HentaiRelease[]>} Array object of latest release.
 */
const release = async (page = 1) => {
    const res = await axios_1.default.get(shared_js_1.baseUrl + shared_js_1.endpoints.latest.replace('__PAGE', page.toString()), shared_js_1.header);
    const $ = (0, cheerio_1.load)(res.data);
    const array = [];
    $('div.result div.top').each((_i, e) => {
        const img = $(e).find('div.limitnjg > img').attr('src');
        const title = $(e).find('h2 > a').text();
        const url = $(e).find('h2 > a').attr('href');
        const sinopsis = $(e).find('.desc p').first().text();
        const genre = $(e).find('.desc b:contains("Genre")').next().text();
        const durasi = $(e).find('.desc b:contains("Duration")').next().text();
        
        array.push({
            img,
            title,
            sinopsis,
            genre,
            durasi,
            url
        });
    });
    return array;
};
exports.release = release;

//YANG COMOT UDA GW RECODE GW SUMPAHIN MATI
//THANKS SlavyanDesu untuk base nya gw recode ulang, yng comot tanpa credit gw sama  SlavyanDesu gw [Kyouka] sumpahin mati anjing

