import React, { Dispatch } from "react";
import { ICombatant } from "types/combatant";
import { useDispatch } from "react-redux";
import { CombantantActionTypes, UPDATE_INITIATIVE } from "store/combatant/types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export interface IUpdateInitFormProps {
    open: boolean;
    onClose: () => void;
    combatant: ICombatant;
}

export const UpdateInitForm: React.FC<IUpdateInitFormProps> = ({ open, onClose, combatant }) => {
    const [init, setInit] = React.useState(`${combatant.initiative}`);
    const dispatch = useDispatch<Dispatch<CombantantActionTypes>>();

    // Evaluate form validity
    const initVal = parseInt(init);
    const isValidInit = !isNaN(initVal) && initVal > 0 && initVal <= 30;

    // Form submission handler
    const handleSubmit = () => {
        dispatch({
            type: UPDATE_INITIATIVE,
            payload: {
                id: combatant.id,
                value: initVal,
            },
        });

        onClose();
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValidInit) handleSubmit();
    };

    return (
        <Dialog maxWidth="sm" open={open} onClose={() => onClose()}>
            <DialogTitle>Update Initiative</DialogTitle>

            {/* Form content */}
            <DialogContent>
                <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Initiative"
                        type="number"
                        fullWidth
                        value={init}
                        onChange={(e) => setInit(e.target.value)}
                        required
                        inputProps={{ min: 0 }}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button
                    color="primary"
                    variant="contained"
                    style={{ fontWeight: "bold" }}
                    onClick={handleSubmit}
                    disabled={!isValidInit}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};
