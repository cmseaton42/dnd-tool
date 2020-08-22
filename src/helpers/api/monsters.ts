import React from "react";
import axios from "axios";
import { IMonsterDataBasic } from "types/creature";

const DND_5E_API_URL = "https://www.dnd5eapi.com";

export const useMonsters = () => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<null | Error>(null);
    const [data, setData] = React.useState<IMonsterDataBasic[]>([]);

    const uri = `${DND_5E_API_URL}/api/monsters`;

    React.useEffect(() => {
        setLoading(true);

        axios
            .get(uri)
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
