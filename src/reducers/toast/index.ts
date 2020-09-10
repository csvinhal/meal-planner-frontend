type SeverityType = 'success' | 'info' | 'warning' | 'error'

export interface State {
  open: boolean
  message: string
  severity?: SeverityType
}

export const SHOW_MESSAGE = '[Toast] show message'
export const CLOSE_MESSAGE = '[Toast] close message'

interface ShowMessage {
  message: string
  severity: SeverityType
}

interface ShowMessageAction {
  type: typeof SHOW_MESSAGE
  payload: ShowMessage
}

interface CloseMessageAction {
  type: typeof CLOSE_MESSAGE
}

export type ToastActionTypes = ShowMessageAction | CloseMessageAction

const initialState: State = {
  message: '',
  severity: 'success',
  open: false,
}

const handleShowMessage = (state: State, action: ShowMessageAction): State => {
  return {
    ...state,
    open: true,
    severity: action.payload.severity,
    message: action.payload.message,
  }
}

const handleCloseMessage = (state: State): State => {
  return {
    ...state,
    open: false,
  }
}

export default (state = initialState, action: ToastActionTypes): State => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return handleShowMessage(state, action)
    case CLOSE_MESSAGE:
      return handleCloseMessage(state)
    default:
      return state
  }
}

export const actions = {
  showMessage: ({ severity, message }: ShowMessage): ToastActionTypes => ({
    type: SHOW_MESSAGE,
    payload: { severity, message },
  }),
  closeMessage: (): ToastActionTypes => ({ type: CLOSE_MESSAGE }),
}
