import { Schedule } from '@models/schedule'
import Axios from './requestsConfig'

// eslint-disable-next-line import/prefer-default-export
export const getSchedule = (date: string) => {
  return Axios.get<Schedule>(`schedule`, { params: { date } })
}
