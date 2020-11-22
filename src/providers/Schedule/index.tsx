import { getSchedule } from '@api/scheduleApi'
import { ScheduleState } from '@models/schedule'
import constate from 'constate'
import { useCallback, useState } from 'react'

const useRecipesHook = () => {
  const [state, setState] = useState<ScheduleState>({
    loading: false,
    schedule: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    error: null,
  })

  const fetchSchedule = useCallback(async (date: string) => {
    try {
      setState((currentState) => ({ ...currentState, loading: true }))
      const { data } = await getSchedule(date)
      setState((currentState) => ({
        ...currentState,
        loading: false,
        schedule: data,
      }))
    } catch (e) {
      setState((currentState) => ({
        ...currentState,
        loading: false,
        error: e,
      }))
    }
  }, [])

  return {
    state,
    effects: {
      fetchSchedule,
    },
  }
}

const [ScheduleProvider, useScheduleState, useScheduleEffects] = constate(
  useRecipesHook,
  (value) => value.state,
  (value) => value.effects,
)

export { ScheduleProvider, useScheduleState, useScheduleEffects }
