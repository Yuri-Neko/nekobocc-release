import axios from 'axios';
import { load } from 'cheerio';
import { baseUrl, endpoints, header } from '../util/shared.js';
/**
 * Get list of released hentai.
 *
 * @param {number} [page=1] - Page number to be shown. Default is `1`.
 * @returns {Promise<HentaiRelease[]>} Array object of latest release.
 */
export const release = async (page = 1) => {
    const res = await axios.get(baseUrl + endpoints.latest.replace('__PAGE', page.toString()), header);
    const $ = load(res.data);
    const array = [];
    $('div.result div.top').each((_i, e) => {
        const img = $(e).find('div.limitnjg > img').attr('src');
        const title = $(e).find('h2 > a').text();
        const url = $(e).find('h2 > a').attr('href');
        const sinopsis = $(e).find('.desc p').first().text();
        const genre = $(e).find('.desc b:contains("Genre")').next().text();
        const durasi = $(e).find('.desc b:contains("Duration")').next().text();
        const description = $(e).find('.desc').text();
        
        array.push({
            img,
            title,
            sinopsis,
            genre,
            durasi,
            url,
            description
        });
    });
    return array;
};


//YANG COMOT UDA GW RECODE GW SUMPAHIN MATI
//THANKS SlavyanDesu untuk base nya gw recode ulang, yng comot tanpa credit gw sama  SlavyanDesu gw [Kyouka] sumpahin mati anjing
