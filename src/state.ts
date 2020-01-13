import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'
import { instruments } from './instruments'

const selected = createSlice({
  name: 'selected',
  initialState: [], // cannot be new Set()
  reducers: {
    // select: (state, payload) => payload
  }
})

const instrument = createSlice({
  name: 'instrument',
  initialState: instruments.guitar,
  reducers: {
    changeInstrument: (_state, action) => action.payload,
    sharpen: (state, action) =>
      state.map((tuning, index) =>
        index === action.payload ? tuning + 1 : tuning
      ),
    flatten: (state, action) =>
      state.map((tuning, index) =>
        index === action.payload ? tuning - 1 : tuning
      ),
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

export const rootReducer = combineReducers({
  selected: selected.reducer,
  instrument: instrument.reducer,
  settings: settings.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer
})

// export const {} = selected.actions
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
