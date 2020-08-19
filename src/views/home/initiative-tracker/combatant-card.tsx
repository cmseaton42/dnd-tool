import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ICombatant, IMaterialColor } from "types";

import { HealthBar } from "components/health-bar";

import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";

import HeartIcon from "@material-ui/icons/FavoriteRounded";
import ShieldIcon from "@material-ui/icons/SecurityRounded";
import { red, green, blue, orange, yellow } from "@material-ui/core/colors";

export interface ICombatantCardProps {
    combatant: ICombatant;
}

export const CombatantCard: React.FC<ICombatantCardProps> = ({ combatant }) => {
    const typeColor = getBackgroundByType(combatant.type);
    const cls = useStyles({ color: typeColor });
    const { hitPoints: hp, name, type, id, armorClass: ac } = combatant;

    return (
        <div className={clsx(cls.container, cls.wrapper)}>
            {/* Combatant Name Display */}
            <div className={cls.container}>
                <Typography style={{ color: typeColor[500] }} variant="h5" noWrap>
                    {name || "Rezkin"}
                </Typography>
                <Tooltip title={type}>
                    <Chip className={cls.typeChip} label={type === "character" ? "PC" : type} size="small" />
                </Tooltip>
                <Tooltip title={`Armor Class: ${ac}`}>
                    <Chip
                        className={cls.typeChip}
                        label={ac}
                        size="small"
                        icon={<ShieldIcon className={cls.shieldIcon} />}
                    />
                </Tooltip>
            </div>

            <div className={cls.spacer}></div>

            {/* Combatant Health Meter */}
            <div className={cls.container}>
                <HeartIcon fontSize="small" style={{ color: red["A400"], marginRight: 2 }} />
                <HealthBar hp={hp} />
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
        background: (props: IStyleProps) => props.color[50],
        overflowX: "auto",
        ...theme.scrollbar,
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
    shieldIcon: {
        color: yellow[600],
        fontWeight: "bold",
    },
    spacer: {
        flexGrow: 1,
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
