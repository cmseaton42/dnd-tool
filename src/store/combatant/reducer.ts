import { v4 as uuid } from "uuid";
import {
    CombatantState,
    CombantantActionTypes,
    ADD_COMBATANT,
    DELETE_COMBATANT,
    UPDATE_REMAINING_HP,
    UPDATE_INITIATIVE,
    UPDATE_COMBATANT,
    ROLL_INITIATIVE,
    COPY_COMBATANT,
    UPDATE_DEATH_SAVES,
} from "./types";
import ReactGA from "react-ga";
import { IDeathSaves } from "types/combatant";

const initialState: CombatantState = {
    combatants: [],
};

const COMBATANT = "COMBATANT";

export function combatantReducer(state = initialState, action: CombantantActionTypes): CombatantState {
    ReactGA.event({
        category: COMBATANT,
        action: action.type,
    });

    switch (action.type) {
        case ADD_COMBATANT:
            return {
                combatants: [...state.combatants, action.payload],
            };

        case DELETE_COMBATANT:
            return {
                combatants: state.combatants.filter((c) => c.id !== action.payload),
            };

        case UPDATE_REMAINING_HP:
            return {
                combatants: state.combatants.map((c) => {
                    if (c.id !== action.payload.id) return c;

                    const empty: IDeathSaves = { success: [false, false, false], failure: [false, false, false] };
                    const deathSaves = c.hitPoints.remaining > 0 ? empty : c.deathSaves;

                    return {
                        ...c,
                        deathSaves,
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

        case COPY_COMBATANT:
            const filtered = state.combatants.filter((c) => c.id === action.payload);
            const copied = filtered.length === 1 ? filtered[0] : null;

            if (copied)
                return {
                    combatants: [...state.combatants, { ...copied, id: uuid() }],
                };
            else return state;

        case UPDATE_DEATH_SAVES:
            return {
                combatants: state.combatants.map((c) => {
                    if (c.id !== action.payload.id) return c;
                    return {
                        ...c,
                        deathSaves: action.payload.deathSaves,
                    };
                }),
            };

        default:
            return state;
    }
}
