import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ICombatantHitPoints } from "types";

import { red, green, blue, orange, amber } from "@material-ui/core/colors";

export interface IHealthBarProps {
    hp: ICombatantHitPoints;
    height?: number;
    width?: number;
}

export const HealthBar: React.FC<IHealthBarProps> = ({ hp, height, width }) => {
    const isHealthy = hp.remaining >= hp.max * 0.666;
    const isBloodied = hp.remaining <= hp.remaining * 0.3333;
    const isInjured = !isHealthy && !isBloodied;

    const maxWidth = width || 100;
    const healthPercentage = Math.round((hp.remaining / hp.max) * maxWidth);
    const cls = useStyles({ height: height || 10, width: width || 100, remaining: healthPercentage });

    const bg = isHealthy ? cls.healthy : isInjured ? cls.injured : isBloodied ? cls.bloodied : null;

    return (
        <div className={cls.outer}>
            <div className={clsx(cls.inner, bg)}></div>
        </div>
    );
};

interface IStyleProps {
    height: number;
    width: number;
    remaining: number;
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
        transition: "all 200ms ease-in-out",
    },
    healthy: {
        background: green[300],
    },
    injured: {
        background: amber[300],
    },
    bloodied: {
        background: red[400],
    },
}));
