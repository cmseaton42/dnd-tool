import { ICombatant } from "types/combatant";
import { ADD_COMBATANT, DELETE_COMBATANT, CombantantActionTypes } from "./types";

export function addCombatant(newCombatant: ICombatant): CombantantActionTypes {
    return {
        type: ADD_COMBATANT,
        payload: newCombatant,
    };
}

export function deleteCombatant(id: string): CombantantActionTypes {
    return {
        type: DELETE_COMBATANT,
        id,
    };
}
