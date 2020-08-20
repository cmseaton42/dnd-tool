import React, { Dispatch } from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ICombatant } from "types/combatant";
import { IMaterialColor } from "types/material";
import { useDispatch } from "react-redux";
import { CombantantActionTypes, UPDATE_REMAINING_HP, UPDATE_DEATH_SAVES } from "store/combatant/types";
import { Flipper, Flipped } from "react-flip-toolkit";

import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/AddRounded";
import MinusIcon from "@material-ui/icons/RemoveRounded";
import Fade from "@material-ui/core/Fade";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

import DeathIcon from "@material-ui/icons/IndeterminateCheckBoxRounded";
import { red, green, amber, grey } from "@material-ui/core/colors";

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
    const isUnconcious = hp.remaining <= 0;
    const isInjured = !isHealthy && !isBloodied && !isUnconcious;

    const maxWidth = width || 100;
    const maxHeight = height || 10;
    const healthPercentage = Math.round((hp.remaining / hp.max) * maxWidth);
    const cls = useStyles({ height: maxHeight, width: maxWidth, remaining: healthPercentage, color: color || grey });

    const bg = isHealthy ? cls.healthy : isInjured ? cls.injured : isBloodied ? cls.bloodied : null;
    const s = showTools !== undefined ? showTools : true;
    const show = isUnconcious ? false : s;
    const deathSaves = combatant.deathSaves || { success: [false, false, false], failure: [false, false, false] };

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

    const selectHandler = (type: "success" | "failure", offset: 0 | 1 | 2) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const saves = combatant.deathSaves || { success: [false, false, false], failure: [false, false, false] };
        saves[type][offset] = e.target.checked;

        dispatch({
            type: UPDATE_DEATH_SAVES,
            payload: {
                id: combatant.id,
                deathSaves: saves,
            },
        });
    };

    return (
        <div style={{ position: "relative", marginBottom: isUnconcious ? 0 : 10 }}>
            <Flipper flipKey={isUnconcious}>
                {isUnconcious ? (
                    <Flipped flipId="dead">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <GreenCheckbox
                                    checked={deathSaves.success[0]}
                                    style={{ height: 8, width: 12 }}
                                    onChange={selectHandler("success", 0)}
                                    size="small"
                                />
                                <GreenCheckbox
                                    checked={deathSaves.success[1]}
                                    style={{ height: 8, width: 12 }}
                                    onChange={selectHandler("success", 1)}
                                    size="small"
                                />
                                <GreenCheckbox
                                    checked={deathSaves.success[2]}
                                    style={{ height: 8, width: 12 }}
                                    onChange={selectHandler("success", 2)}
                                    size="small"
                                />
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <RedCheckBox
                                    checked={deathSaves.failure[0]}
                                    style={{ height: 8, width: 12 }}
                                    onChange={selectHandler("failure", 0)}
                                    size="small"
                                />
                                <RedCheckBox
                                    checked={deathSaves.failure[1]}
                                    style={{ height: 8, width: 12 }}
                                    onChange={selectHandler("failure", 1)}
                                    size="small"
                                />
                                <RedCheckBox
                                    checked={deathSaves.failure[2]}
                                    style={{ height: 8, width: 12 }}
                                    onChange={selectHandler("failure", 2)}
                                    size="small"
                                />
                            </div>
                        </div>
                    </Flipped>
                ) : (
                    <Flipped flipId="dead">
                        <Tooltip title={`HP: ${hp.remaining} / ${hp.max} - Temp: ${hp.temporary}`}>
                            <div className={cls.outer}>
                                <div className={clsx(cls.inner, bg)}></div>
                            </div>
                        </Tooltip>
                    </Flipped>
                )}
            </Flipper>

            {show && (
                <Fade in={show}>
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
                </Fade>
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

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        "&$checked": {
            color: green[600],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const RedCheckBox = withStyles({
    root: {
        color: red[400],
        "&$checked": {
            color: red[600],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox checkedIcon={<DeathIcon />} color="default" {...props} />);
