import axios from 'axios';
import { load } from 'cheerio';
import { baseUrl, endpoints, header } from '../util/shared.js';
/**
 * Get search result.
 *
 * @param {string} query - A search query.
 * @returns {Promise<HentaiRelease[]>} Array object of search result.
 */
export const search = async (query) => {
    const res = await axios.get(baseUrl + endpoints.search.replace('__QUERY', encodeURIComponent(query)), header);
    const $ = load(res.data);
    const array = [];
    $('div.result div.top').each((_i, e) => {
        const img = $(e).find('div.limitnjg > img').attr('src');
        const title = $(e).find('h2 > a').text();
        const url = $(e).find('h2 > a').attr('href');
       
        const desc = $(e).find('.desc').text();
        const sinopsisElement = $(e).find('.desc p:contains("Sinopsis")');
        let sinopsis = "Sinopsis tidak tersedia";
        if (sinopsisElement.length > 0) {
          sinopsis = sinopsisElement.next('p').text().trim();
        }

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
