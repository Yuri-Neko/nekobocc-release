import type { HentaiRelease } from '../util/interfaces.js';
/**
 * Get search result.
 *
 * @param {string} query - A search query.
 * @returns {Promise<HentaiRelease[]>} Array object of search result.
 */
export declare const search: (query: string) => Promise<HentaiRelease[]>;
