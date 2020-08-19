import { ICombatant } from "types/combatant";

export interface CombatantState {
    combatants: ICombatant[];
}

export interface IUpdateRemainingHpPayload {
    id: string;
    value: number;
}

export const ADD_COMBATANT = "ADD_COMBATANT";
export const DELETE_COMBATANT = "DELETE_COMBATANT";
export const UPDATE_REMAINING_HP = "UPDATE_REMAINING_HP";

interface IAddCombatantAction {
    type: typeof ADD_COMBATANT;
    payload: ICombatant;
}

interface IDeleteCombatantAction {
    type: typeof DELETE_COMBATANT;
    id: string;
}

interface IUpdateRemainingHpAction {
    type: typeof UPDATE_REMAINING_HP;
    payload: IUpdateRemainingHpPayload;
}

export type CombantantActionTypes = IAddCombatantAction | IDeleteCombatantAction | IUpdateRemainingHpAction;
