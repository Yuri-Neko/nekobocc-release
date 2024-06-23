"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const shared_js_1 = require("../util/shared.js");

/**
 * Get metadata of episode, hentai, or JAV page from a valid URL.
 *
 * @param {string} url - Nekopoi episode, hentai, or JAV page URL.
 * @returns {Promise<HentaiMetadata | EpisodeMetadata | JavMetadata>} Object of episode, hentai, or JAV metadata.
 */
const get = async (url) => {
    const res = await axios_1.default.get(url, shared_js_1.header);
    const $ = cheerio_1.load(res.data);

    const extractCommonFields = () => {
        const title = $('h1[style="line-height: 20px;font-size: 15px;width: 100%;float:none"]').text().trim() || '';
        const viewsAndDate = $('p[style="font-size: 13px;line-height: 14px;margin: 3px 0px;"]').text().trim() || '';
        const [views, date] = viewsAndDate.split(' / ').map(item => item.trim());
        const img = $('div.thm img').attr('src') || '';
        return { title, views, date, img };
    };

    const extractDownloadLinks = () => {
        const downloadLinks = [];
        $('div.liner').each((_i, e) => {
            const quality = $(e).find('div.name').text().trim();
            const links = [];
            $(e).find('a').each((_j, link) => {
                links.push($(link).attr('href').trim());
            });
            downloadLinks.push({ quality, links });
        });
        return downloadLinks;
    };

    if (url.includes("/jav-")) {
        const { title, views, date, img } = extractCommonFields();
        const producers = $('p:contains("Producers")').text().replace('Producers : ', '').trim() || '';
        const artist = $('p:contains("Artist")').text().replace('Artist : ', '').trim() || '';
        const genre = $('p:contains("Genre")').text().replace('Genre :', '').trim() || '';
        const duration = $('p:contains("Duration")').text().replace('Duration :', '').trim() || '';
        const downloadLinks = extractDownloadLinks();

        return { title, views, date, img, producers, artist, genre, duration, downloadLinks };
    }

    if (url.includes("/3d-")) {
        const { title, views, date, img } = extractCommonFields();
        const parody = $('p:contains("Parody")').text().replace('Parody : ', '').trim() || '';
        const producers = $('p:contains("Producers")').text().replace('Producers :', '').trim() || '';
        const duration = $('p:contains("Duration")').text().replace('Duration : ', '').trim() || '';
        const sizes = $('p:contains("Size")').text().replace('Size : ', '').trim() || '';
        const downloadLinks = extractDownloadLinks();

        return { title, views, date, img, parody, producers, duration, sizes, downloadLinks };
    }

    if (url.includes("/pv-")) {
        const { title, views, date, img } = extractCommonFields();
        const synopsis = $('div.konten h2').text().trim() || '';
        const details = $('div.konten h3').text().trim() || '';
        const downloadLinks = extractDownloadLinks();

        return { title, views, date, img, synopsis, details, downloadLinks };
    }

    if (url.includes("/l2d-")) {
        const { title, views, date, img } = extractCommonFields();
        const producer = $('p:contains("Producer")').text().replace('Producer : ', '').trim() || '';
        const artist = $('p:contains("Artis")').text().replace('Artis : ', '').trim() || '';
        const genre = $('p:contains("Genre")').text().replace('Genre :', '').trim() || '';
        const duration = $('p:contains("Durasi")').text().replace('Durasi :', '').trim() || '';
        const sizes = $('p:contains("Ukuran")').text().replace('Ukuran :', '').trim() || '';
        const downloadLinks = extractDownloadLinks();

        return { title, views, date, img, producer, artist, genre, duration, sizes, downloadLinks };
    }

    if (url.includes('/hentai/')) {
        const img = $('div.imgdesc').find('img').attr('src') || '';
        const title = $('title').text().trim() || '';
        const synopsis = $('span.desc').find('p').text().trim() || '';
        const views = Number($('div.tabs.tab2').last().text().split(' ')[0]) || 0;
        const episodeUrls = [];
        $('div.episodelist > ul > li').each((_i, e) => {
            episodeUrls.push($(e).find('a').attr('href').trim());
        });
        const episode = episodeUrls.length;
        const infoArray = [];
        $('div.listinfo li').each((_i, e) => {
            infoArray.push($(e).text().trim());
        });

        const [japanese, category, , status, aired, producer, genre, duration, scoreText] = infoArray.map(text => text.split(': ').pop());
        const score = Number(scoreText) || 0;

        return { img, title, synopsis, views, japanese, category, episode, status, aired, producer, genre, duration, score, url: episodeUrls };
    } else {
        const { title, views, date, img } = extractCommonFields();
        const synopsis = $('div.konten p').eq(1).text().trim() || '';
        const genre = $('div.konten p').eq(2).text().replace('Genre : ', '').trim() || '';
        const producers = $('div.konten p').eq(3).text().replace('Producers : ', '').trim() || '';
        const duration = $('div.konten p').eq(4).text().replace('Duration : ', '').trim() || '';
        const downloadLinks = extractDownloadLinks();

        return { title, views, date, img, synopsis, genre, producers, duration, downloadLinks };
    }
};
exports.get = get;
