import { ICombatant } from "types/combatant";

export interface CombatantState {
    combatants: ICombatant[];
}

export const ADD_COMBATANT = "ADD_COMBATANT";
export const DELETE_COMBATANT = "DELETE_COMBATANT";

interface IAddCombatantAction {
    type: typeof ADD_COMBATANT;
    payload: ICombatant;
}

interface IDeleteCombatantAction {
    type: typeof DELETE_COMBATANT;
    id: string;
}

export type CombantantActionTypes = IAddCombatantAction | IDeleteCombatantAction;
