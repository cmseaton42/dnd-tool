import {
    CombatantState,
    CombantantActionTypes,
    ADD_COMBATANT,
    DELETE_COMBATANT,
    UPDATE_REMAINING_HP,
    UPDATE_INITIATIVE,
    UPDATE_COMBATANT,
    ROLL_INITIATIVE,
} from "./types";

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
                            remaining:
                                action.payload.value > 0
                                    ? action.payload.value <= c.hitPoints.max
                                        ? Math.round(action.payload.value)
                                        : c.hitPoints.max
                                    : 0,
                        },
                    };
                }),
            };

        case UPDATE_INITIATIVE:
            return {
                combatants: state.combatants.map((c) => {
                    if (c.id !== action.payload.id) return c;
                    return {
                        ...c,
                        initiative: action.payload.value,
                    };
                }),
            };

        case UPDATE_COMBATANT:
            return {
                combatants: state.combatants.map((c) => {
                    if (c.id !== action.payload.id) return c;
                    return action.payload.combatant;
                }),
            };

        case ROLL_INITIATIVE:
            return {
                combatants: state.combatants.map((c) => {
                    return {
                        ...c,
                        initiative: Math.floor(Math.random() * 20) + 1 + c.initiativeModifier,
                    };
                }),
            };

        default:
            return state;
    }
}
