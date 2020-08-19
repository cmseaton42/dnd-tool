import React, { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CombantantActionTypes, ROLL_INITIATIVE } from "store/combatant/types";
import { makeStyles } from "@material-ui/core/styles";
import { RootState } from "store";
import { AddCombatantForm } from "./form-add-combatant";
import { Flipper, Flipped } from "react-flip-toolkit";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { CombatantCard } from "./combatant-card";
import SwordIcon from "./swords.svg";
import PersonIcon from "@material-ui/icons/PersonRounded";
import RollInitIcon from "@material-ui/icons/PhotoFilter";

export const InitiativeTracker: React.FC = () => {
    const cls = useStyles();
    const { combatants } = useSelector((state: RootState) => state.combantants);
    const [openCombatantForm, setOpenCombatantForm] = React.useState(false);
    const dispatch = useDispatch<Dispatch<CombantantActionTypes>>();

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
                    startIcon={<PersonIcon />}
                    onClick={() => setOpenCombatantForm(true)}
                >
                    Combatant
                </Button>
                <Button
                    style={{ margin: 2, color: "white", fontWeight: "bold" }}
                    color="secondary"
                    variant="contained"
                    onClick={() => dispatch({ type: ROLL_INITIATIVE })}
                    startIcon={<RollInitIcon />}
                >
                    Roll Initiative
                </Button>
            </div>

            {/* Form Controls */}
            <AddCombatantForm open={openCombatantForm} onClose={() => setOpenCombatantForm(false)} />

            {/* Display Combatant List */}
            <Flipper flipKey={combatants.map((c) => c.id).join(" ")}>
                <ul>
                    {combatants
                        .sort((a, b) => b.initiative - a.initiative)
                        .map((c) => (
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
