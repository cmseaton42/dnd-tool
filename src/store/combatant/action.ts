import { ICombatant, IDeathSaves } from "types/combatant";
import {
    ADD_COMBATANT,
    DELETE_COMBATANT,
    UPDATE_REMAINING_HP,
    UPDATE_INITIATIVE,
    UPDATE_COMBATANT,
    ROLL_INITIATIVE,
    COPY_COMBATANT,
    CombantantActionTypes,
    UPDATE_DEATH_SAVES,
} from "./types";

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

export function updateCombatantInitiative(id: string, value: number): CombantantActionTypes {
    return {
        type: UPDATE_INITIATIVE,
        payload: {
            id,
            value,
        },
    };
}

export function updateCombatant(id: string, combatant: ICombatant): CombantantActionTypes {
    return {
        type: UPDATE_COMBATANT,
        payload: {
            id,
            combatant,
        },
    };
}

export function rollInitiative(): CombantantActionTypes {
    return {
        type: ROLL_INITIATIVE,
    };
}

export function copyCombatant(id: string): CombantantActionTypes {
    return {
        type: COPY_COMBATANT,
        id,
    };
}

export function updateDeathSaves(id: string, deathSaves: IDeathSaves): CombantantActionTypes {
    return {
        type: UPDATE_DEATH_SAVES,
        payload: {
            id,
            deathSaves,
        },
    };
}
