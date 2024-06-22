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
    const $ = (0, cheerio_1.load)(res.data);

    // Check if the URL includes "jav-cosplay-" and scrape the required data
    if (url.includes("/jav-")) {
        const title = $('h1[style="line-height: 20px;font-size: 15px;width: 100%;float:none"]').text();
        const viewsAndDate = $('p[style="font-size: 13px;line-height: 14px;margin: 3px 0px;"]').text();
        const img = $('div.thm img').attr('src');
        const producers = $('p:contains("Producers")').text().replace('Producers : ', '');
        const artist = $('p:contains("Artist")').text().replace('Artist : ', '');
        const genre = $('p:contains("Genre")').text().replace('Genre :', '').trim();
        const duration = $('p:contains("Duration")').text().replace('Duration :', '').trim();
        const downloadLinks = [];
        $('div.liner').each((_i, e) => {
            const quality = $(e).find('div.name').text();
            const links = [];
            $(e).find('a').each((_j, link) => {
                links.push($(link).attr('href'));
            });
            downloadLinks.push({ quality, links });
        });

        const result = {
            title: title,
            viewsAndDate: viewsAndDate,
            img: img,
            producers: producers,
            artist: artist,
            genre: genre,
            duration: duration,
            downloadLinks: downloadLinks
        };

        return result;
    }

    // Check if the URL includes "/3d-" and scrape the required data
    if (url.includes("/3d-")) {
        const title = $('h1[style="line-height: 20px;font-size: 15px;width: 100%;float:none"]').text();
        const viewsAndDate = $('p[style="font-size: 13px;line-height: 14px;margin: 3px 0px;"]').text();
        const img = $('div.thm img').attr('src');
        const parody = $('p:contains("Parody")').text().replace('Parody : ', '');
        const producers = $('p:contains("Producers")').text().replace('Producers :', '').trim();
        const duration = $('p:contains("Duration")').text().replace('Duration : ', '').trim();
        const sizes = $('p:contains("Size")').text().replace('Size : ', '').trim();
        const downloadLinks = [];
        $('div.liner').each((_i, e) => {
            const quality = $(e).find('div.name').text();
            const links = [];
            $(e).find('a').each((_j, link) => {
                links.push($(link).attr('href'));
            });
            downloadLinks.push({ quality, links });
        });

        const result = {
            title: title,
            viewsAndDate: viewsAndDate,
            img: img,
            parody: parody,
            producers: producers,
            duration: duration,
            sizes: sizes,
            downloadLinks: downloadLinks
        };

        return result;
    }

    // Check if the URL includes "/pv-" and scrape the required data
    if (url.includes("/pv-")) {
        const title = $('h1[style="line-height: 20px;font-size: 15px;width: 100%;float:none"]').text();
        const viewsAndDate = $('p[style="font-size: 13px;line-height: 14px;margin: 3px 0px;"]').text();
        const img = $('div.thm img').attr('src');
        const synopsis = $('div.konten h2').text();
        const details = $('div.konten h3').text();
        const downloadLinks = [];
        $('div.liner').each((_i, e) => {
            const quality = $(e).find('div.name').text();
            const links = [];
            $(e).find('a').each((_j, link) => {
                links.push($(link).attr('href'));
            });
            downloadLinks.push({ quality, links });
        });

        const result = {
            title: title,
            viewsAndDate: viewsAndDate,
            img: img,
            synopsis: synopsis,
            details: details,
            downloadLinks: downloadLinks
        };

        return result;
    }

    // Original scraping logic for other URLs
    if (url.includes('/hentai/')) {
        const img = $('div.imgdesc').find('img').attr('src');
        const title = $('title').text();
        const synopsis = $('span.desc').find('p').text();
        const views = Number($('div.tabs.tab2').last().text().split(' ')[0]);
        const url = [];
        let episode;
        $('div.episodelist > ul > li').each((_i, e) => {
            url.push($(e).find('a').attr('href'));
            episode = url.length;
        });
        const array = [];
        $('div.listinfo li').each((_i, e) => {
            array.push({ text: $(e).text() });
        });
        const result = {
            img: img,
            title: title,
            synopsis: synopsis,
            views: views,
            japanese: array[0].text.split(' ')[1],
            category: array[1].text.split(' ')[1],
            episode: episode,
            status: array[3].text.split(' ')[1],
            aired: array[4].text.replace('Tayang: ', ''),
            producer: array[5].text.replace('Produser: ', ''),
            genre: array[6].text.replace('Genres: ', ''),
            duration: array[7].text.replace('Durasi: ', ''),
            score: Number(array[8].text.replace('Skor: ', '')),
            url: url
        };
        return result;
    } else {
        const img = $('div.thm').find('img').attr('src');
        const title = $('title').text();
        const quality = [];
        const download = [];
        const array = [];
        $('div.liner').each((_i, e) => {
            quality.push($(e).find('div.name').text());
            download.push({ 
                quality: $(e).find('div.name').text(), 
                url: $(e).find('a').last().attr('href')
            });
        });
        $('div.konten p').each((_i, e) => {
            array.push({ text: $(e).text() });
        });
        const result = {
            img: img,
            title: title,
            synopsis: array[1].text,
            genre: array[2].text.replace('Genre : ', ''),
            producer: array[4].text.replace('Producers : ', ''),
            duration: array[5].text.replace('Duration : ', ''),
            quality: quality,
            download: download
        };
        return result;
    }
};
exports.get = get;
