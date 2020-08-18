import { combineReducers, createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { combatantReducer } from "./combatant/reducer";
import { loadState, saveState } from "./persist-helpers";

const rootReducer = combineReducers({
    combantants: combatantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

//@ts-ignore
const persistedState = loadState();
export const store: Store = createStore(rootReducer, persistedState, devToolsEnhancer({}));

// Persist store to local storage
store.subscribe(() => {
    saveState({
        combantants: store.getState().combantants,
    });
});
