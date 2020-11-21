export interface DeleteDialogState {
  open: boolean
  title?: string
  message?: string
  handleConfirm?: (...args: any[]) => void
  handleCancel?: () => void
}

export type ShowDialogInput = Omit<DeleteDialogState, 'open'>
