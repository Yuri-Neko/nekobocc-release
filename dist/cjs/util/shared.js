"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = exports.header = exports.valid = exports.baseUrl = void 0;
exports.baseUrl = 'https://nekopoi.care';
const valid = (url) => url.match(new RegExp(/^(?:https?:\/\/)?(?:[^.]+\.)?nekopoi\.care(\/.*)?$/gm));
exports.valid = valid;
exports.header = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
    }
};
exports.endpoints = {
    latest: '/category/hentai/page/__PAGE',
    last: '/page/__PAGE',
    search: '/search/__QUERY',
    random: '/random'
};
