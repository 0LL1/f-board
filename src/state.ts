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
    changeInstrument: (_state, action) => action.payload
    // sharpen:
    // flatten:
    // addLowString:
    // removeLowString:
    // addhighString:
    // removeHighString:
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
export const { changeInstrument } = instrument.actions
export const { toggleMenu, toggleAccidentals, toggleSound } = settings.actions
