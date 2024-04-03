"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.latest = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const shared_js_1 = require("../util/shared.js");
/**
 * Get list of released hentai.
 *
 * @param {number} [page=1] - Page number to be shown. Default is `1`.
 * @returns {Promise<NekoPoiLatest[]>} Array object of latest release.
 */
const latest = async (page = 1) => {
    const res = await axios_1.default.get(shared_js_1.baseUrl + shared_js_1.endpoints.last.replace('__PAGE', page.toString()), shared_js_1.header);
    const $ = (0, cheerio_1.load)(res.data);
    const array = [];
    $('.eropost').each((index, element) => {
        const url = $(element).find('.eroinfo h2 a').attr('href');
        const image = $(element).find('.eroimg .limitero img').attr('src');
        const title = $(element).find('.eroinfo h2 a').text();
        const upload = $(element).find('.eroinfo span').first().text();

        array.push({ url, image, title, upload });
    });
    return array;
};
exports.latest = latest;

//YANG COMOT UDA GW RECODE GW SUMPAHIN MATI
//THANKS SlavyanDesu untuk base nya gw recode ulang, yng comot tanpa credit gw sama  SlavyanDesu gw [Kyouka] sumpahin mati anjing

