import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { red, amber, green, blue } from "@material-ui/core/colors";

export interface ICombatantCardProps {
    type: "character" | "hostile" | "ally" | "neutral";
}

export const CombatantCard: React.FC<ICombatantCardProps> = ({ type }) => {
    const cls = useStyles({ bg: getBackgroundByType(type) });

    return <div className={cls.container}>hello</div>;
};

const getBackgroundByType: (type: "character" | "hostile" | "ally" | "neutral") => string = (type) => {
    switch (type) {
        case "character":
            return blue[200];
        case "hostile":
            return red[200];
        case "ally":
            return green[200];
        case "neutral":
            return amber[200];
    }
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        margin: theme.spacing(0.5),
        padding: theme.spacing(1.5),
        width: "100%",
        background: (props: { bg: string }) => props.bg,
        borderRadius: 4,
    },
}));
