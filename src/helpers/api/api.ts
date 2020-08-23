import { setup } from "axios-cache-adapter";

export const DND_5E_API_URL = "https://www.dnd5eapi.co";

export const api = setup({
    // `axios` options
    baseURL: DND_5E_API_URL,

    // `axios-cache-adapter` options
    cache: {
        maxAge: 30 * 60 * 1000, // 30 min
    },
});
