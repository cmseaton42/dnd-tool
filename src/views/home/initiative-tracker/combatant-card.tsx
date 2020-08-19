import React, { Dispatch } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ICombatant, IMaterialColor } from "types";
import { useDispatch } from "react-redux";
import { CombantantActionTypes, DELETE_COMBATANT, UPDATE_REMAINING_HP } from "store/combatant/types";

import { HealthBar } from "components/health-bar";

import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import DeleteIcon from "@material-ui/icons/DeleteRounded";
import HeartIcon from "@material-ui/icons/FavoriteRounded";
import ShieldIcon from "@material-ui/icons/SecurityRounded";
import InitiativeIcon from "@material-ui/icons/WatchLaterRounded";
import DeadIcon from "@material-ui/icons/BlockRounded";
import SkullIcon from "./skull.svg";
import { red, green, blue, orange, yellow } from "@material-ui/core/colors";

export interface ICombatantCardProps {
    combatant: ICombatant;
}

export const CombatantCard: React.FC<ICombatantCardProps> = ({ combatant }) => {
    const typeColor = getBackgroundByType(combatant.type);
    const cls = useStyles({ color: typeColor });
    const { hitPoints: hp, name, type, id, armorClass: ac, initiative } = combatant;
    const dispatch = useDispatch<Dispatch<CombantantActionTypes>>();

    const isDead = combatant.hitPoints.remaining <= 0;

    return (
        <div className={clsx(cls.container, cls.wrapper)}>
            {/* Combatant Name Display */}
            <div className={cls.container}>
                <Typography style={{ color: typeColor[500], fontWeight: 600, fontSize: 18 }} noWrap>
                    {name || "Rezkin"}
                </Typography>
                <Tooltip title={type}>
                    <Chip className={cls.typeChip} label={type === "character" ? "PC" : type} size="small" />
                </Tooltip>
                <Tooltip title={`Initiative: ${initiative}`}>
                    <Chip
                        className={cls.initChip}
                        label={initiative}
                        size="small"
                        icon={<InitiativeIcon className={cls.initIcon} />}
                    />
                </Tooltip>
                <Tooltip title={`Armor Class: ${ac}`}>
                    <Chip
                        className={cls.typeChip}
                        label={ac}
                        size="small"
                        icon={<ShieldIcon className={cls.shieldIcon} />}
                    />
                </Tooltip>

                <Tooltip title={"Delete Combatant"}>
                    <IconButton
                        onClick={() => dispatch({ type: DELETE_COMBATANT, id })}
                        style={{ color: red[400] }}
                        size="small"
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <div className={cls.spacer}></div>

            {/* Combatant Health Meter */}
            <div className={cls.container}>
                {!isDead && <HeartIcon fontSize="small" style={{ color: red["A400"], marginRight: 2 }} />}
                {isDead && <img src={SkullIcon} className={cls.deadIcon} alt="Skull Icon" />}
                <HealthBar hp={hp} />
                <input
                    className={cls.healthInput}
                    value={combatant.hitPoints.remaining}
                    onChange={(e) => {
                        const value = parseInt(e.target.value) || 0;

                        if (value <= combatant.hitPoints.max)
                            dispatch({
                                type: UPDATE_REMAINING_HP,
                                payload: {
                                    id: combatant.id,
                                    value,
                                },
                            });
                    }}
                    type="number"
                    min={0}
                />
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
    initChip: {
        color: theme.palette.common.white,
        fontWeight: "bold",
        marginLeft: theme.spacing(0.5),
        background: (props: IStyleProps) => props.color[400],
        "&:hover": {
            cursor: "pointer",
        },
    },
    initIcon: {
        color: theme.palette.common.white,
        fontWeight: "bold",
    },
    spacer: {
        flexGrow: 1,
    },
    healthInput: {
        width: 50,
        border: "none",
        background: "transparent",
        color: (props: IStyleProps) => props.color[500],
        fontSize: 18,
        textAlign: "center",
    },
    deadIcon: {
        height: 21,
        marginRight: 2,
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
