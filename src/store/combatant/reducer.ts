import { CombatantState, CombantantActionTypes, ADD_COMBATANT, DELETE_COMBATANT, UPDATE_REMAINING_HP } from "./types";

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

        case UPDATE_REMAINING_HP:
            return {
                combatants: state.combatants.map((c) => {
                    if (c.id !== action.payload.id) return c;
                    return {
                        ...c,
                        hitPoints: {
                            ...c.hitPoints,
                            remaining: action.payload.value,
                        },
                    };
                }),
            };

        default:
            return state;
    }
}
