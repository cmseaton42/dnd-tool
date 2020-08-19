import React, { Dispatch } from "react";
import { CombantantTypes, ICombatantHitPoints } from "types";
import { useDispatch } from "react-redux";
import { CombantantActionTypes, ADD_COMBATANT } from "store/combatant/types";
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
    const [name, setName] = React.useState("Combatant");
    const [type, setType] = React.useState<CombantantTypes>("character");
    const [hp, setHp] = React.useState<ICombatantHitPoints>({ max: 10, remaining: 10, temporary: 0 });
    const [ac, setAc] = React.useState(13);
    const dispatch = useDispatch<Dispatch<CombantantActionTypes>>();

    // Evaluate form validity
    const isValidName = name.length >= 3;
    const isValidType = type.length > 0;
    const isValidHp = hp.max >= hp.remaining && hp.max > 0 && hp.remaining > 0 && hp.temporary >= 0;
    const isValidAc = ac > 0;
    const formValid = isValidName && isValidType && isValidHp && isValidAc;

    const clearForm = () => {
        setName("Combatant");
        setType("character");
        setHp({ max: 0, remaining: 0, temporary: 0 });
        setAc(13);
    };

    // Form submission handler
    const handleSubmit = () => {
        dispatch({
            type: ADD_COMBATANT,
            payload: {
                id: uuid(),
                armorClass: ac,
                conditions: [],
                hitPoints: hp,
                initiative: 1,
                name,
                type,
            },
        });

        clearForm();
        onClose();
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleSubmit();
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

                    <div style={{ display: "flex" }}>
                        <TextField
                            margin="dense"
                            label="Armor Class"
                            type="number"
                            fullWidth
                            value={ac}
                            onChange={(e) => {
                                const newAc = parseInt(e.target.value);
                                if (newAc > 0) setAc(newAc);
                            }}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="HP"
                            type="number"
                            fullWidth
                            value={hp.max}
                            onChange={(e) => {
                                const newHp = parseInt(e.target.value);
                                if (newHp > 0) setHp({ ...hp, max: newHp, remaining: newHp });
                            }}
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
