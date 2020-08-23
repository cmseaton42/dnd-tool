import React from "react";
import { setup } from "axios-cache-adapter";
import { IMonsterDataBasic } from "types/creature";

export const DND_5E_API_URL = "https://www.dnd5eapi.co";

export const api = setup({
    // `axios` options
    baseURL: DND_5E_API_URL,

    // `axios-cache-adapter` options
    cache: {
        maxAge: 30 * 60 * 1000, // 30 min
    },
});

export const useMonsters = () => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<null | Error>(null);
    const [data, setData] = React.useState<IMonsterDataBasic[]>([]);

    const uri = `/api/monsters`;

    React.useEffect(() => {
        setLoading(true);

        api.get(uri)
            .then(({ data }: { data: { results: IMonsterDataBasic[] } }) => {
                setData(data.results);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return [data, loading, error];
};
