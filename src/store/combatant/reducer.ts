import { CombatantState, CombantantActionTypes, ADD_COMBATANT, DELETE_COMBATANT } from "./types";

const initialState: CombatantState = {
    combatants: [],
};

export function combatantReducer(state = initialState, action: CombantantActionTypes): CombatantState {
    switch (action.type) {
        case ADD_COMBATANT:
            return {
                combatants: [...state.combatants, action.payload],
            };

        case DELETE_COMBATANT:
            return {
                combatants: state.combatants.filter((c) => c.id !== action.id),
            };

        default:
            return state;
    }
}
