import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ICombatant } from "types/combatant";
import { IMaterialColor } from "types/material";
import { useCombatantDispatcher } from "store/combatant/hooks";
import { DELETE_COMBATANT, UPDATE_REMAINING_HP, COPY_COMBATANT } from "store/combatant/types";
import { UpdateInitForm } from "./form-update-initiative";
import { EditCombatantForm } from "./form-edit-combatant";
import { HealthBar } from "./health-bar";
import { Flipper, Flipped } from "react-flip-toolkit";

import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";

import DeleteIcon from "@material-ui/icons/DeleteRounded";
import HeartIcon from "@material-ui/icons/FavoriteRounded";
import ShieldIcon from "@material-ui/icons/SecurityRounded";
import InitiativeIcon from "@material-ui/icons/WatchLaterRounded";
import EditIcon from "@material-ui/icons/EditRounded";
import CopyIcon from "@material-ui/icons/FileCopyRounded";
import SkullIcon from "./skull.svg";
import { red, green, blue, orange, yellow, blueGrey } from "@material-ui/core/colors";
import { useMonsters } from "helpers/api/monsters";

export interface ICombatantCardProps {
    combatant: ICombatant;
}

export const CombatantCard: React.FC<ICombatantCardProps> = ({ combatant }) => {
    const typeColor = getBackgroundByType(combatant.type);
    const cls = useStyles({ color: typeColor });
    const { name, type, id, armorClass: ac, initiative } = combatant;
    const dispatch = useCombatantDispatcher();
    const [openInitDialog, setOpenInitDialog] = React.useState(false);
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const [showBadge, setShowBadge] = React.useState(false);

    const monsters = useMonsters();

    console.log(...monsters);

    const isDead = combatant.hitPoints.remaining <= 0;

    return (
        <div className={clsx(cls.container, cls.wrapper)}>
            {/* Combatant Name Display */}
            <div className={clsx(cls.container)}>
                <Typography style={{ color: typeColor[500], fontWeight: 600, fontSize: 18 }} noWrap>
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
                <Tooltip title={`Initiative: ${initiative}`}>
                    <Badge
                        color="secondary"
                        badgeContent={
                            combatant.initiativeModifier >= 0 ? (
                                <strong>{`+${combatant.initiativeModifier}`}</strong>
                            ) : (
                                <strong>{`${combatant.initiativeModifier}`}</strong>
                            )
                        }
                        invisible={!showBadge}
                    >
                        <div onMouseEnter={() => setShowBadge(true)} onMouseLeave={() => setShowBadge(false)}>
                            <Chip
                                className={cls.initChip}
                                label={initiative}
                                size="small"
                                onClick={() => setOpenInitDialog(true)}
                                icon={<InitiativeIcon className={cls.initIcon} />}
                                clickable
                            />
                        </div>
                    </Badge>
                </Tooltip>
                <Tooltip title={"Edit Combatant Details"}>
                    <EditIcon onClick={() => setOpenEditDialog(true)} className={clsx(cls.icon, cls.edit)} />
                </Tooltip>
                <Tooltip title={"Copy Combatant"}>
                    <CopyIcon
                        onClick={() => dispatch({ type: COPY_COMBATANT, payload: id })}
                        className={clsx(cls.icon, cls.copy)}
                    />
                </Tooltip>
                <Tooltip title={"Delete Combatant"}>
                    <DeleteIcon
                        onClick={() => dispatch({ type: DELETE_COMBATANT, payload: id })}
                        className={clsx(cls.icon, cls.delete)}
                    />
                </Tooltip>
            </div>

            {/* Combatant Health Meter */}
            <div className={clsx(cls.container, cls.healthWrapper)}>
                <Flipper flipKey={isDead} spring="gentle">
                    {isDead ? (
                        <Flipped flipId="icon">
                            <div>
                                <img src={SkullIcon} className={cls.deadIcon} alt="Skull Icon" />
                            </div>
                        </Flipped>
                    ) : (
                        <Flipped flipId="icon">
                            <HeartIcon fontSize="small" style={{ color: red["A400"], marginRight: 2 }} />
                        </Flipped>
                    )}
                </Flipper>

                <HealthBar combatant={combatant} color={typeColor} />
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

            {/* Form Controls */}
            <UpdateInitForm open={openInitDialog} onClose={() => setOpenInitDialog(false)} combatant={combatant} />
            <EditCombatantForm open={openEditDialog} onClose={() => setOpenEditDialog(false)} combatant={combatant} />
        </div>
    );
};

interface IStyleProps {
    color: IMaterialColor;
}

const useStyles = makeStyles((theme) => ({
    wrapper: {
        border: (props: IStyleProps) => `${props.color[400]} 2px solid`,
        margin: theme.spacing(0.5),
        padding: theme.spacing(1.2),
        borderRadius: 5,
        width: "100%",
        background: (props: IStyleProps) => props.color[50],
        overflowX: "auto",
        justifyContent: "space-between",
        flexWrap: "wrap",
        height: "auto",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
        },
        ...theme.scrollbar,
    },
    healthWrapper: {
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(0.5),
        },
    },
    icon: {
        padding: theme.spacing(0.1),
        "&:hover": {
            cursor: "pointer",
        },
    },
    edit: {
        color: blueGrey[300],
        marginLeft: 2,
        "&:hover": {
            color: blueGrey[400],
        },
    },
    copy: {
        color: blueGrey[200],
        "&:hover": {
            color: blueGrey[300],
        },
    },
    delete: {
        color: red[300],
        "&:hover": {
            color: red[500],
        },
    },
    container: {
        display: "flex",
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
            background: (props: IStyleProps) => props.color[600],
            transition: "all 200ms ease-in-out",
        },
        "&:focus": {
            background: (props: IStyleProps) => props.color[400],
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
        "&:focus": {
            outline: "none",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 15,
        },
    },
    deadIcon: {
        height: 21,
        width: 21,
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
