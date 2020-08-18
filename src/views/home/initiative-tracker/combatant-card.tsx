import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ICombatant, IMaterialColor } from "types";

import { HealthBar } from "components/health-bar";

import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import HeartIcon from "@material-ui/icons/FavoriteRounded";
import { red, green, blue, orange, amber } from "@material-ui/core/colors";

export interface ICombatantCardProps {
    combatant: ICombatant;
}

export const CombatantCard: React.FC<ICombatantCardProps> = ({ combatant }) => {
    const cls = useStyles({ color: getBackgroundByType(combatant.type) });
    const { hitPoints: hp, name, type, id, conditions, armorClass: ac } = combatant;

    const isHealthy = hp.remaining >= hp.max * 0.666;
    const isBloodied = hp.remaining <= hp.remaining * 0.3333;
    const isInjured = !isHealthy && !isBloodied;

    return (
        <div className={clsx(cls.container, cls.wrapper)}>
            {/* Combatant Name Display */}
            <div className={cls.container}>
                <Typography color="primary" variant="h5" noWrap>
                    {name || "John Doe"}
                </Typography>
                <Chip
                    className={cls.typeChip}
                    label={type === "character" ? "PC" : type.toLocaleUpperCase()}
                    size="small"
                />
            </div>

            <HealthBar hp={hp} />

            {/* Combatant Health Meter */}
            <div className={cls.container}>
                <HeartIcon className={cls.bloodied} />
                <Typography style={{ marginRight: 2 }} className={clsx(cls.bloodied, cls.inline)}>
                    HP:
                </Typography>
                {isHealthy && <Typography className={clsx(cls.healthy, cls.inline)}>{`${hp.remaining}`}</Typography>}
                {isInjured && <Typography className={clsx(cls.injured, cls.inline)}>{`${hp.remaining}`}</Typography>}
                {isBloodied && <Typography className={clsx(cls.bloodied, cls.inline)}>{`${hp.remaining}`}</Typography>}
                <Typography className={clsx(cls.healthy, cls.inline)}>{`/${hp.max}`}</Typography>
            </div>
        </div>
    );
};

interface IStyleProps {
    color: IMaterialColor;
}

const useStyles = makeStyles((theme) => ({
    wrapper: {
        border: (props: IStyleProps) => `${props.color[400]} 2px solid`,
        margin: theme.spacing(0.3),
        padding: theme.spacing(2),
        borderRadius: 5,
        width: "100%",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    typeChip: {
        color: theme.palette.common.white,
        fontWeight: "bold",
        marginLeft: theme.spacing(0.5),
        background: (props: IStyleProps) => props.color[400],
    },
    spacer: {
        flexGrow: 1,
    },
    healthy: {
        color: green[400],
    },
    injured: {
        color: amber[400],
    },
    bloodied: {
        color: red[400],
    },
    inline: {
        display: "inline",
    },
}));

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
