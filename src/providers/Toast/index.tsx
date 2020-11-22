import { ShowToastInput, ToastState } from '@models/toast'
import constate from 'constate'
import { useCallback, useState } from 'react'

const useToastHook = () => {
  const [state, setState] = useState<ToastState>({
    open: false,
    severity: 'success',
    message: '',
  })

  const showToast = useCallback(
    async ({ severity, message }: ShowToastInput) => {
      setState({
        open: true,
        message,
        severity,
      })
    },
    [],
  )

  const closeToast = useCallback(async () => {
    setState((currentState) => ({ ...currentState, open: false }))
  }, [])

  return {
    state,
    effects: {
      showToast,
      closeToast,
    },
  }
}

const [ToastProvider, useToastState, useToastEffects] = constate(
  useToastHook,
  (value) => value.state,
  (value) => value.effects,
)

export { ToastProvider, useToastState, useToastEffects }
