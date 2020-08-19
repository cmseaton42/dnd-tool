import { ICombatant } from "types/combatant";
import { ADD_COMBATANT, DELETE_COMBATANT, UPDATE_REMAINING_HP, CombantantActionTypes } from "./types";

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

export function updateCombatantRemainingHp(id: string, value: number): CombantantActionTypes {
    return {
        type: UPDATE_REMAINING_HP,
        payload: {
            id,
            value,
        },
    };
}
