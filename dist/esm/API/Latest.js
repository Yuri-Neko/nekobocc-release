import axios from 'axios';
import { load } from 'cheerio';
import { baseUrl, endpoints, header } from '../util/shared.js';
/**
 * Get list of released hentai.
 *
 * @param {number} [page=1] - Page number to be shown. Default is `1`.
 * @returns {Promise<NekoPoiLatest[]>} Array object of latest release.
 */
export const latest = async (page = 1) => {
    const res = await axios.get(baseUrl + endpoints.last.replace('__PAGE', page.toString()), header);
    const $ = load(res.data);
    const array = [];
    $('.eropost').each((index, element) => {
        const url = $(element).find('.eroinfo h2 a').attr('href');
        const image = $(element).find('.eroimg .limitero img').attr('src');
        const title = $(element).find('.eroinfo h2 a').text();

        array.push({ url, image, title });
    });
    return array;
};


//YANG COMOT UDA GW RECODE GW SUMPAHIN MATI
//THANKS SlavyanDesu untuk base nya gw recode ulang, yng comot tanpa credit gw sama  SlavyanDesu gw [Kyouka] sumpahin mati anjing
