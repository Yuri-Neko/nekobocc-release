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
    
        // Tambahan untuk mendapatkan sinopsis, genre, dan durasi
        const sinopsis = $(e).find('.desc p').first().text().trim() || "Sinopsis tidak tersedia";
        const genre = $(e).find('.desc b:contains("Genre")').next().text().trim() || "Genre tidak tersedia";
        const anime = $(e).find('.desc b:contains("Anime")').next().text().trim() || "Anime tidak tersedia";
        const producers = $(e).find('.desc b:contains("Producers")').next().text().trim() || "Producers tidak tersedia";
        const duration = $(e).find('.desc b:contains("Duration")').next().text().trim() || "Durasi tidak tersedia";
        const size = $(e).find('.desc p:contains("Size")').text().trim() || "Size tidak tersedia";
        const catatan = $(e).find('.desc h3').text().trim() || "Catatan tidak tersedia";
        
        array.push({
            img,
            title,
            url,
            sinopsis,
            genre,
            anime,
            producers,
            duration,
            size,
            catatan
        });
    });
    return array;
};


//YANG COMOT UDA GW RECODE GW SUMPAHIN MATI
//THANKS SlavyanDesu untuk base nya gw recode ulang, yng comot tanpa credit gw sama  SlavyanDesu gw [Kyouka] sumpahin mati anjing
