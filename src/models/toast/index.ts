export interface ToastState {
  message: string
  severity: 'error' | 'warning' | 'info' | 'success'
  open: boolean
}

export type ShowToastInput = Omit<ToastState, 'open'>
