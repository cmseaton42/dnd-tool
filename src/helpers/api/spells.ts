import React from "react";
import { ISpellBasic } from "types/combatant";
import { api } from "./api";

export const useSpells = () => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<null | Error>(null);
    const [data, setData] = React.useState<ISpellBasic[]>([]);

    const uri = `/api/spells`;

    React.useEffect(() => {
        setLoading(true);

        api.get(uri)
            .then(({ data }: { data: { results: ISpellBasic[] } }) => {
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

export const useSpell = (spell: string) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<null | Error>(null);
    const [data, setData] = React.useState<ISpellBasic[]>([]);

    const uri = `/api/spells/${spell}`;

    React.useEffect(() => {
        setLoading(true);

        api.get(uri)
            .then(({ data }: { data: { results: ISpellBasic[] } }) => {
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
