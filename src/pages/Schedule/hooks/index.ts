import { Schedule } from '@models/schedule'
import { useEffect, useReducer } from 'react'
import { getSchedule } from '@api/scheduleApi'

export interface State {
  loading: boolean
  schedule: Schedule
  error: string
}

// Action Types

export const SCHEDULE_REQUEST = 'SCHEDULE_REQUEST'
export const SCHEDULE_REQUEST_FAILURE = 'SCHEDULE_REQUEST_FAILURE'
export const GET_SCHEDULE_SUCCESS = 'GET_SCHEDULE_SUCCESS'

interface GetScheduleRequestAction {
  type: typeof SCHEDULE_REQUEST
}

interface GetScheduleFailureAction {
  type: typeof SCHEDULE_REQUEST_FAILURE
  payload: { error: string }
}

interface GetScheduleSuccessAction {
  type: typeof GET_SCHEDULE_SUCCESS
  payload: { schedule: Schedule }
}

export type ScheduleActionTypes =
  | GetScheduleRequestAction
  | GetScheduleFailureAction
  | GetScheduleSuccessAction

// Reducer

const initialState: State = {
  loading: false,
  schedule: {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
  },
  error: '',
}

const handleScheduleRequest = (state: State): State => {
  return {
    ...state,
    loading: true,
  }
}

const handleScheduleFailure = (
  state: State,
  action: GetScheduleFailureAction,
): State => {
  return {
    ...state,
    loading: false,
    error: action.payload.error,
  }
}

const handleScheduleSuccess = (
  state: State,
  action: GetScheduleSuccessAction,
): State => ({
  ...state,
  loading: false,
  schedule: action.payload.schedule,
})

export const reducer = (state: State, action: ScheduleActionTypes): State => {
  switch (action.type) {
    case SCHEDULE_REQUEST:
      return handleScheduleRequest(state)
    case SCHEDULE_REQUEST_FAILURE:
      return handleScheduleFailure(state, action)
    case GET_SCHEDULE_SUCCESS:
      return handleScheduleSuccess(state, action)
    default:
      return state
  }
}

// Action Creators
export const getScheduleRequest = (): ScheduleActionTypes => ({
  type: SCHEDULE_REQUEST,
})

export const scheduleFailureRequest = (error: string): ScheduleActionTypes => ({
  type: SCHEDULE_REQUEST_FAILURE,
  payload: { error },
})

export const getScheduleSuccess = (
  schedule: Schedule,
): ScheduleActionTypes => ({
  type: GET_SCHEDULE_SUCCESS,
  payload: { schedule },
})

const useSchedulePlanHooks = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchMeals = async (date: string) => {
    try {
      dispatch(getScheduleRequest())
      const data = await getSchedule(date)
      dispatch(getScheduleSuccess(data.data))
    } catch (err) {
      dispatch(scheduleFailureRequest(err.error))
    }
  }

  useEffect(() => {
    fetchMeals(new Date().toISOString())
  }, [dispatch])

  return {
    state,
    effect: {
      fetchMeals,
    },
  }
}

export default useSchedulePlanHooks
