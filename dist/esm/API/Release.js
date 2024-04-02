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
        const desc = $(e).find('.desc').text();
        const matchSinopsis = desc.match(/Sinopsis:(.*)Genre:/);
        const sinopsis = matchSinopsis ? matchSinopsis[1].trim() : "Sinopsis tidak tersedia";

        const matchGenre = desc.match(/Genre :(.*)Anime :/);
        const genre = matchGenre ? matchGenre[1].trim() : "Genre tidak tersedia";

        const matchDuration = desc.match(/Duration :(.*)Size/);
        const duration = matchDuration ? matchDuration[1].trim() : "Durasi tidak tersedia";

        const matchProducers = desc.match(/Producers :(.*)Duration/);
        const producers = matchProducers ? matchProducers[1].trim() : "Produser tidak tersedia";
        
        array.push({
            img,
            title,
            url,
            sinopsis,
            genre,
            producers,
            duration
        });
    });
    return array;
};


//YANG COMOT UDA GW RECODE GW SUMPAHIN MATI
//THANKS SlavyanDesu untuk base nya gw recode ulang, yng comot tanpa credit gw sama  SlavyanDesu gw [Kyouka] sumpahin mati anjing
