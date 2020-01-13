import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'
import { note } from '@tonaljs/tonal'
import { instruments } from './instruments'

const selected = createSlice({
  name: 'selected',
  initialState: [] as number[],
  reducers: {
    select: (state, { payload }) => {
      const pc = note(payload).chroma as number
      const selected = state.includes(pc)
        ? state.filter(e => e !== pc)
        : state.concat(pc)
      return selected
    }
  }
})

const instrument = createSlice({
  name: 'instrument',
  initialState: instruments.guitar,
  reducers: {
    changeInstrument: (_state, { payload }) => payload,
    sharpen: (state, { payload }) =>
      state.map((tuning, index) => (index === payload ? tuning + 1 : tuning)),
    flatten: (state, { payload }) =>
      state.map((tuning, index) => (index === payload ? tuning - 1 : tuning)),
    addLowString: state =>
      state.length < 8 ? [state[0] - 5].concat(state) : state,
    removeLowString: state => (state.length > 1 ? state.slice(1) : state),
    addHighString: state =>
      state.length < 8 ? state.concat(state[state.length - 1] + 5) : state,
    removeHighString: state => (state.length > 1 ? state.slice(0, -1) : state)
  }
})

const settings = createSlice({
  name: 'settings',
  initialState: {
    isMenuOpen: false,
    isSharps: true,
    hasSound: true
  },
  reducers: {
    toggleMenu: state => ({ ...state, isMenuOpen: !state.isMenuOpen }),
    toggleAccidentals: state => ({ ...state, isSharps: !state.isSharps }),
    toggleSound: state => ({ ...state, hasSound: !state.hasSound })
  }
})

const rootReducer = combineReducers({
  selected: selected.reducer,
  instrument: instrument.reducer,
  settings: settings.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer
})

export const { select } = selected.actions
export const {
  changeInstrument,
  sharpen,
  flatten,
  addLowString,
  removeLowString,
  addHighString,
  removeHighString
} = instrument.actions
export const { toggleMenu, toggleAccidentals, toggleSound } = settings.actions
