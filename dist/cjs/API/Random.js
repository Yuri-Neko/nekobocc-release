"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const axios_1 = __importDefault(require("axios"));
const shared_js_1 = require("../util/shared.js");
const Get_js_1 = require("./Get.js");
/**
 * Get random hentai or episode page.
 *
 * @returns {Promise<HentaiMetadata | EpisodeMetadata>} Object of episode or hentai metadata.
 */
const random = async () => {
    const res = await axios_1.default.get(shared_js_1.baseUrl + shared_js_1.endpoints.random, shared_js_1.header);
    return await (0, Get_js_1.get)(res.request._redirectable._currentUrl);
};
exports.random = random;
