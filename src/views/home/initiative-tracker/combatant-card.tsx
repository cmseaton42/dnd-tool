import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ICombatant } from "types/combatant";

import Typography from "@material-ui/core/Typography";

import NameIcon from "@material-ui/icons/PersonRounded";
import { red, green, blue, orange } from "@material-ui/core/colors";

export interface ICombatantCardProps {
    combatant: ICombatant;
}

export const CombatantCard: React.FC<ICombatantCardProps> = ({ combatant }) => {
    const cls = useStyles({ color: getBackgroundByType(combatant.type) });

    return (
        <div className={cls.container}>
            <NameIcon /> <Typography variant="h5">{combatant.name || "John Doe"}</Typography>
        </div>
    );
};

interface IStyleProps {
    color: IMaterialColor;
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(0.3),
        padding: theme.spacing(2),
        width: "100%",
        background: theme.palette.grey[100],
        border: `${theme.palette.secondary.main} 2px solid`,
        borderRadius: 5,
    },
}));

interface IMaterialColor {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
}

// @ts-ignore
const getBackgroundByType: (type: CombantantTypes) => IMaterialColor = (type) => {
    switch (type) {
        case "character":
            return blue;
        case "hostile":
            return red;
        case "ally":
            return green;
        case "neutral":
            return orange;
    }
};
