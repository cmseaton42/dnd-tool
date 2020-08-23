import React from "react";
import { IMonsterDataBasic } from "types/combatant";
import { api } from "./api";

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
