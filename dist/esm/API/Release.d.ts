import type { HentaiRelease } from '../util/interfaces.js';
/**
 * Get list of released hentai.
 *
 * @param {number} [page=1] - Page number to be shown. Default is `1`.
 * @returns {Promise<HentaiRelease[]>} Array object of latest release.
 */
export declare const release: (page?: number) => Promise<HentaiRelease[]>;
