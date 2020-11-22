import { LoaderState } from '@models/loader'
import constate from 'constate'
import { useCallback, useState } from 'react'

const useLoaderHook = () => {
  const [state, setState] = useState<LoaderState>({
    open: false,
  })

  const showLoader = useCallback(async () => {
    setState({
      open: true,
    })
  }, [])

  const closeLoader = useCallback(async () => {
    setState({ open: false })
  }, [])

  return {
    state,
    effects: {
      showLoader,
      closeLoader,
    },
  }
}

const [LoaderProvider, useLoaderState, useLoaderEffects] = constate(
  useLoaderHook,
  (value) => value.state,
  (value) => value.effects,
)

export { LoaderProvider, useLoaderState, useLoaderEffects }
