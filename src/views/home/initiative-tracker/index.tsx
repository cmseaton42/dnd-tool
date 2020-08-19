import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { RootState } from "store";
import { AddCombatantForm } from "./form-add-combatant";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { CombatantCard } from "./combatant-card";
import SwordIcon from "./swords.svg";
import PersonRounded from "@material-ui/icons/PersonRounded";
import MonsterIcon from "@material-ui/icons/PetsRounded";

export const InitiativeTracker: React.FC = () => {
    const cls = useStyles();
    const { combatants } = useSelector((state: RootState) => state.combantants);
    const [openCombatantForm, setOpenCombatantForm] = React.useState(false);

    return (
        <div className={cls.wrapper}>
            <div className={cls.container}>
                <img src={SwordIcon} className={cls.headerIcon} alt="Sword Icon" />
                <Typography color="primary" variant="h3">
                    Combat Tracker
                </Typography>
            </div>

            <div style={{ margin: 8 }} className={cls.container}>
                <Button
                    style={{ margin: 2, color: "white", fontWeight: "bold" }}
                    color="secondary"
                    variant="contained"
                    startIcon={<PersonRounded />}
                    onClick={() => setOpenCombatantForm(true)}
                >
                    Combatant
                </Button>
                <Button
                    style={{ margin: 2, color: "white", fontWeight: "bold" }}
                    color="secondary"
                    variant="contained"
                    startIcon={<MonsterIcon />}
                >
                    Monster
                </Button>
            </div>

            {/* Form Controls */}
            <AddCombatantForm open={openCombatantForm} onClose={() => setOpenCombatantForm(false)} />

            {/* Display Combatant List */}
            {combatants
                .sort((a, b) => b.initiative - a.initiative)
                .map((c) => (
                    <CombatantCard key={c.id} combatant={c} />
                ))}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    container: {
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
