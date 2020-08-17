import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import { CombatantCard } from "./combatant-card";
import SwordIcon from "./swords.svg";

export const InitiativeTracker: React.FC = () => {
    const cls = useStyles();

    return (
        <div className={cls.container}>
            <div className={cls.header}>
                <img src={SwordIcon} className={cls.headerIcon} />
                <Typography color="primary" variant="h3">
                    Combat Tracker
                </Typography>
            </div>
            <CombatantCard type="character" />
            <CombatantCard type="hostile" />
            <CombatantCard type="ally" />
            <CombatantCard type="neutral" />
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    headerIcon: {
        height: 40,
        marginRight: theme.spacing(1),
    },
}));
