import { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

import { CombantantActionTypes } from "./types";

export const useCombatants = () => {
    const { combatants } = useSelector((state: RootState) => state.combantants);

    return combatants;
};

export const useCombatantDispatcher = () => {
    const dispatch = useDispatch<Dispatch<CombantantActionTypes>>();

    return (payload: CombantantActionTypes) => dispatch(payload);
};
