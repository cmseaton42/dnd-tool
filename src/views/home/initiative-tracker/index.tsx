import React, { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { RootState } from "store";
import { CombantantActionTypes, ADD_COMBATANT } from "store/combatant/types";
import { v4 as uuid } from "uuid";

import Typography from "@material-ui/core/Typography";

import { CombatantCard } from "./combatant-card";
import SwordIcon from "./swords.svg";

export const InitiativeTracker: React.FC = () => {
    const cls = useStyles();
    const { combatants } = useSelector((state: RootState) => state.combantants);
    // const dispatch = useDispatch<Dispatch<CombantantActionTypes>>();

    return (
        <div className={cls.container}>
            <div className={cls.header}>
                <img src={SwordIcon} className={cls.headerIcon} alt="Sword Icon" />
                <Typography color="primary" variant="h3">
                    Combat Tracker
                </Typography>
            </div>
            {combatants.map((c) => (
                <CombatantCard key={c.id} combatant={c} />
            ))}
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
