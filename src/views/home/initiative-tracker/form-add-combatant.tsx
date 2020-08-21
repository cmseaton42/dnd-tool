import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CombantantTypes } from "types/combatant";
import { useCombatantDispatcher } from "store/combatant/hooks";
import { ADD_COMBATANT } from "store/combatant/types";
import { v4 as uuid } from "uuid";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export interface IAddCombatantFormProps {
    open: boolean;
    onClose: () => void;
}

export const AddCombatantForm: React.FC<IAddCombatantFormProps> = ({ open, onClose }) => {
    const cls = useStyles();
    const [name, setName] = React.useState("Combatant");
    const [type, setType] = React.useState<CombantantTypes>("character");
    const [hitpoints, setHp] = React.useState<string>("10");
    const [ac, setAc] = React.useState("13");
    const [initMod, setInitMod] = React.useState("0");
    const dispatch = useCombatantDispatcher();

    // Evaluate form validity
    const acVal = parseInt(ac);
    const initVal = parseInt(initMod);
    const hpVal = isNaN(parseInt(hitpoints)) ? 0 : parseInt(hitpoints);
    const hp = { max: hpVal, remaining: hpVal, temporary: 0 };
    const isValidName = name.length >= 3;
    const isValidType = type.length > 0;
    const isValidHp = hp.max >= hp.remaining && hp.max > 0 && hp.remaining > 0 && hp.temporary >= 0;
    const isValidAc = !isNaN(acVal) && acVal > 0;
    const isValidInitMod = !isNaN(initVal) && initVal >= -10 && initVal <= 10;
    const formValid = isValidName && isValidType && isValidHp && isValidAc && isValidInitMod;

    const clearForm = () => {
        setName("Combatant");
        setType("character");
        setHp("10");
        setAc("13");
        setInitMod("0");
    };

    // Form submission handler
    const handleSubmit = () => {
        dispatch({
            type: ADD_COMBATANT,
            payload: {
                id: uuid(),
                armorClass: acVal,
                conditions: [],
                hitPoints: hp,
                initiative: 10,
                initiativeModifier: initVal,
                name,
                type,
            },
        });

        clearForm();
        onClose();
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formValid) handleSubmit();
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setType(event.target.value as CombantantTypes);
    };

    const types: CombantantTypes[] = ["character", "ally", "hostile", "neutral"];

    return (
        <Dialog maxWidth="sm" open={open} onClose={() => onClose()}>
            <DialogTitle>Add Combatant</DialogTitle>

            {/* Form content */}
            <DialogContent>
                <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <div className={cls.formWrapper}>
                        <TextField
                            margin="dense"
                            label="Armor Class"
                            type="number"
                            fullWidth
                            value={ac}
                            onChange={(e) => {
                                setAc(e.target.value);
                            }}
                            inputProps={{ min: 0 }}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="HP"
                            type="number"
                            fullWidth
                            value={hitpoints}
                            onChange={(e) => {
                                setHp(e.target.value);
                            }}
                            inputProps={{ min: 0 }}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Initiative Mod"
                            type="number"
                            fullWidth
                            value={initMod}
                            onChange={(e) => {
                                setInitMod(e.target.value);
                            }}
                            inputProps={{ min: 0 }}
                            required
                        />
                    </div>
                    <FormControl fullWidth>
                        <InputLabel>Combatant Type</InputLabel>
                        <Select value={type} onChange={handleChange} style={{ width: "100%" }}>
                            {types.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </form>
            </DialogContent>
            <DialogActions>
                <Button
                    color="primary"
                    variant="contained"
                    style={{ fontWeight: "bold" }}
                    onClick={handleSubmit}
                    disabled={!formValid}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        display: "flex",
        flexWrap: "nowrap",
        [theme.breakpoints.down("xs")]: {
            flexWrap: "wrap",
        },
    },
}));
