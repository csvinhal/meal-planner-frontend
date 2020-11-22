import Layout from '@components/Layout/Layout'
import { RecipesProvider } from '@providers/Recipes'
import { ScheduleProvider } from '@providers/Schedule'
import React from 'react'
import ScheduleContainer from './container/ScheduleContainer'

const Schedule = () => (
  <ScheduleProvider>
    <RecipesProvider>
      <Layout maxWidth={false} fixed>
        <ScheduleContainer />
      </Layout>
    </RecipesProvider>
  </ScheduleProvider>
)

export default Schedule
