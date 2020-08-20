import React, { Dispatch } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ICombatant } from "types/combatant";

import Tooltip from "@material-ui/core/Tooltip";

import { red, green, amber, grey } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/AddRounded";
import MinusIcon from "@material-ui/icons/RemoveRounded";
import { IMaterialColor } from "types/material";
import { useDispatch } from "react-redux";
import { CombantantActionTypes, UPDATE_REMAINING_HP } from "store/combatant/types";

export interface IHealthBarProps {
    combatant: ICombatant;
    color?: IMaterialColor;
    height?: number;
    width?: number;
    showTools?: boolean;
}

export const HealthBar: React.FC<IHealthBarProps> = ({ combatant, height, width, showTools, color }) => {
    const [amount, setAmount] = React.useState<string>("5");
    const dispatch = useDispatch<Dispatch<CombantantActionTypes>>();

    const { hitPoints: hp } = combatant;
    const isHealthy = hp.remaining >= hp.max * 0.666;
    const isBloodied = hp.remaining <= hp.max * 0.3333;
    const isInjured = !isHealthy && !isBloodied;

    const maxWidth = width || 100;
    const maxHeight = height || 10;
    const healthPercentage = Math.round((hp.remaining / hp.max) * maxWidth);
    const cls = useStyles({ height: maxHeight, width: maxWidth, remaining: healthPercentage, color: color || grey });

    const bg = isHealthy ? cls.healthy : isInjured ? cls.injured : isBloodied ? cls.bloodied : null;
    const show = showTools !== undefined ? showTools : true;

    const updateHandler = (method: "ADD" | "REMOVE") => () => {
        const newVal = parseInt(amount);

        if (newVal && newVal >= 1) {
            dispatch({
                type: UPDATE_REMAINING_HP,
                payload: {
                    id: combatant.id,
                    value: method === "ADD" ? hp.remaining + newVal : hp.remaining - newVal,
                },
            });
        }

        setAmount("5");
    };

    return (
        <div style={{ position: "relative" }}>
            <Tooltip title={`HP: ${hp.remaining} / ${hp.max} - Temp: ${hp.temporary}`}>
                <div className={cls.outer}>
                    <div className={clsx(cls.inner, bg)}></div>
                </div>
            </Tooltip>
            {show && (
                <div
                    style={{
                        width: maxWidth,
                        height: 15,
                        position: "absolute",
                        top: maxHeight + 3,
                        left: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Tooltip title="Apply Indicated Damage">
                        <MinusIcon onClick={updateHandler("REMOVE")} className={clsx(cls.icon, cls.minus)} />
                    </Tooltip>
                    <Tooltip title="Amount to Adjust Health By">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value);
                            }}
                            className={cls.healthInput}
                            min={1}
                        />
                    </Tooltip>
                    <Tooltip title="Heal Indicated Ammount">
                        <AddIcon onClick={updateHandler("ADD")} className={clsx(cls.icon, cls.plus)} />
                    </Tooltip>
                </div>
            )}
        </div>
    );
};

interface IStyleProps {
    height: number;
    width: number;
    remaining: number;
    color: IMaterialColor;
}
const useStyles = makeStyles((theme) => ({
    outer: {
        width: (props: IStyleProps) => props.width,
        height: (props: IStyleProps) => props.height,
        background: theme.palette.grey[300],
        borderRadius: (props: IStyleProps) => Math.round(props.height / 2),
        position: "relative",
    },
    inner: {
        position: "absolute",
        top: 0,
        left: 0,
        background: red[300],
        borderRadius: (props: IStyleProps) => Math.round(props.height / 2),
        height: (props: IStyleProps) => props.height,
        width: (props: IStyleProps) => props.remaining,
        transition: "all 275ms ease-in-out",
    },
    healthy: {
        background: green["A400"],
    },
    injured: {
        background: amber["A400"],
    },
    bloodied: {
        background: red["A400"],
    },
    healthInput: {
        width: 40,
        border: "none",
        background: "transparent",
        color: (props: IStyleProps) => props.color[500],
        fontSize: 14,
        textAlign: "center",
        "&:focus": {
            outline: "none",
        },
    },
    icon: {
        fontSize: 25,
        padding: 2,
        "&:hover": {
            cursor: "pointer",
        },
    },
    minus: {
        color: red[300],
        marginRight: 13,
        "&:hover": {
            color: red[500],
            transition: "all 200ms ease-in-out",
        },
    },
    plus: {
        color: green[300],
        "&:hover": {
            color: green[500],
            transition: "all 200ms ease-in-out",
        },
    },
}));
