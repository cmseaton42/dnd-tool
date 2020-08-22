import { ICombatant, IDeathSaves } from "types/combatant";

export interface CombatantState {
    combatants: ICombatant[];
}

export interface IUpdateValuePayload {
    id: string;
    value: number;
}

export interface IUpdateCombatantPayload {
    id: string;
    combatant: ICombatant;
}

export interface IUpdateDeathSavesPayload {
    id: string;
    deathSaves: IDeathSaves;
}

export const ADD_COMBATANT = "ADD_COMBATANT";
export const DELETE_COMBATANT = "DELETE_COMBATANT";
export const UPDATE_COMBATANT = "UPDATE_COMBATANT";
export const COPY_COMBATANT = "COPY_COMBATANT";
export const UPDATE_REMAINING_HP = "UPDATE_REMAINING_HP";
export const UPDATE_INITIATIVE = "UPDATE_INITIATIVE";
export const UPDATE_DEATH_SAVES = "UPDATE_DEATH_SAVES";
export const ROLL_INITIATIVE = "ROLL_INITIATIVE";

interface IAddCombatantAction {
    type: typeof ADD_COMBATANT;
    payload: ICombatant;
}

interface IDeleteCombatantAction {
    type: typeof DELETE_COMBATANT;
    payload: string;
}

interface IUpdateRemainingHpAction {
    type: typeof UPDATE_REMAINING_HP;
    payload: IUpdateValuePayload;
}

interface IUpdateInitiativeAction {
    type: typeof UPDATE_INITIATIVE;
    payload: IUpdateValuePayload;
}

interface IUpdateCombatantAction {
    type: typeof UPDATE_COMBATANT;
    payload: IUpdateCombatantPayload;
}

interface IRollInitiativeAction {
    type: typeof ROLL_INITIATIVE;
}

interface ICopyCombatantAction {
    type: typeof COPY_COMBATANT;
    payload: string;
}

interface IUpdateDeathSavesAction {
    type: typeof UPDATE_DEATH_SAVES;
    payload: IUpdateDeathSavesPayload;
}

export type CombantantActionTypes =
    | IAddCombatantAction
    | IDeleteCombatantAction
    | IUpdateRemainingHpAction
    | IUpdateInitiativeAction
    | IUpdateCombatantAction
    | IRollInitiativeAction
    | ICopyCombatantAction
    | IUpdateDeathSavesAction;
