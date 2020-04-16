import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { note } from "@tonaljs/tonal";
import { instruments } from "./instruments";

type selectedState = number[];
const selected = createSlice({
  name: "selected",
  initialState: [] as selectedState,
  reducers: {
    select: (state, { payload }): selectedState => {
      const pc = note(payload).chroma as number;
      const selected = state.includes(pc)
        ? state.filter((e) => e !== pc)
        : state.concat(pc);
      return selected;
    },
  },
});

type instrumentState = number[];
const instrument = createSlice({
  name: "instrument",
  initialState: instruments.guitar,
  reducers: {
    changeInstrument: (_state, { payload }): instrumentState => payload,
    sharpen: (state, { payload }): instrumentState =>
      state.map((tuning, index) => (index === payload ? tuning + 1 : tuning)),
    flatten: (state, { payload }): instrumentState =>
      state.map((tuning, index) => (index === payload ? tuning - 1 : tuning)),
    addLowString: (state): instrumentState =>
      state.length < 8 ? [state[0] - 5].concat(state) : state,
    removeLowString: (state): instrumentState =>
      state.length > 1 ? state.slice(1) : state,
    addHighString: (state): instrumentState =>
      state.length < 8 ? state.concat(state[state.length - 1] + 5) : state,
    removeHighString: (state): instrumentState =>
      state.length > 1 ? state.slice(0, -1) : state,
  },
});

type settingsState = {
  isMenuOpen: boolean;
  isSharps: boolean;
  hasSound: boolean;
};
const settings = createSlice({
  name: "settings",
  initialState: {
    isMenuOpen: false,
    isSharps: true,
    hasSound: true,
  } as settingsState,
  reducers: {
    toggleMenu: (state): settingsState => ({
      ...state,
      isMenuOpen: !state.isMenuOpen,
    }),
    toggleAccidentals: (state): settingsState => ({
      ...state,
      isSharps: !state.isSharps,
    }),
    toggleSound: (state): settingsState => ({
      ...state,
      hasSound: !state.hasSound,
    }),
  },
});

const rootReducer = combineReducers({
  selected: selected.reducer,
  instrument: instrument.reducer,
  settings: settings.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export const { select } = selected.actions;
export const {
  changeInstrument,
  sharpen,
  flatten,
  addLowString,
  removeLowString,
  addHighString,
  removeHighString,
} = instrument.actions;
export const { toggleMenu, toggleAccidentals, toggleSound } = settings.actions;
