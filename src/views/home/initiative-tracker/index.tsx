import React from "react";
import { ROLL_INITIATIVE } from "store/combatant/types";
import { makeStyles } from "@material-ui/core/styles";
import { AddCombatantForm } from "./form-add-combatant";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useCombatants, useCombatantDispatcher } from "store/combatant/hooks";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { CombatantCard } from "./combatant-card";
import SwordIcon from "./swords.svg";
import PersonIcon from "@material-ui/icons/PersonRounded";
import RollInitIcon from "@material-ui/icons/PhotoFilter";

export const InitiativeTracker: React.FC = () => {
    const cls = useStyles();
    const combatants = useCombatants();
    const [openCombatantForm, setOpenCombatantForm] = React.useState(false);
    const dispatch = useCombatantDispatcher();

    const sorted = combatants.sort((a, b) => b.initiative - a.initiative);

    return (
        <div className={cls.wrapper}>
            <div className={cls.container}>
                <img src={SwordIcon} className={cls.headerIcon} alt="Sword Icon" />
                <Typography color="primary" variant="h3">
                    Combat Tracker
                </Typography>
            </div>

            <div style={{ marginTop: 4, marginBottom: 4 }} className={cls.container}>
                <Button
                    style={{ marginRight: 2, color: "white", fontWeight: "bold" }}
                    color="secondary"
                    variant="contained"
                    startIcon={<PersonIcon />}
                    onClick={() => setOpenCombatantForm(true)}
                    size="small"
                >
                    Combatant
                </Button>
                <Button
                    style={{ margin: 2, color: "white", fontWeight: "bold" }}
                    color="secondary"
                    variant="contained"
                    onClick={() => dispatch({ type: ROLL_INITIATIVE })}
                    startIcon={<RollInitIcon />}
                    size="small"
                >
                    Roll Initiative
                </Button>
            </div>

            {/* Form Controls */}
            <AddCombatantForm open={openCombatantForm} onClose={() => setOpenCombatantForm(false)} />

            {/* Display Combatant List */}
            <Flipper flipKey={sorted.map((c) => c.id).join(" ")}>
                <ul style={{ padding: 0, listStyleType: "none", margin: 0 }}>
                    {sorted.map((c) => (
                        <Flipped key={c.id} flipId={c.id}>
                            <li style={{ listStyleType: "none" }}>
                                <CombatantCard combatant={c} />
                            </li>
                        </Flipped>
                    ))}
                </ul>
            </Flipper>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: 0,
        padding: 0,
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
        [theme.breakpoints.down("xs")]: {
            height: 25,
        },
    },
}));
