export interface State {
  open: boolean
}

export const SHOW_LOADER = '[Loading] show loader'
export const CLOSE_LOADER = '[Loading] close loader'

interface ShowLoaderAction {
  type: typeof SHOW_LOADER
}

interface CloseLoaderAction {
  type: typeof CLOSE_LOADER
}

export type LoadingActionTypes = ShowLoaderAction | CloseLoaderAction

const initialState: State = {
  open: false,
}

const showLoader = (state: State) => {
  return {
    ...state,
    open: true,
  }
}

const closeLoader = (state: State) => {
  return {
    ...state,
    open: false,
  }
}

export default (state = initialState, action: LoadingActionTypes): State => {
  switch (action.type) {
    case SHOW_LOADER:
      return showLoader(state)
    case CLOSE_LOADER:
      return closeLoader(state)
    default:
      return state
  }
}

export const actions = {
  showLoader: (): LoadingActionTypes => ({ type: SHOW_LOADER }),
  closeLoader: (): LoadingActionTypes => ({ type: CLOSE_LOADER }),
}
