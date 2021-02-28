import Layout from '@components/Layout/Layout'
import { DragAndDropProvider } from '@providers/DragAndDrop'
import { RecipesProvider } from '@providers/Recipes'
import { ScheduleProvider } from '@providers/Schedule'
import React from 'react'
import ScheduleContainer from './container/ScheduleContainer'

const Schedule = () => (
  <DragAndDropProvider>
    <ScheduleProvider>
      <RecipesProvider>
        <Layout maxWidth={false} fixed>
          <ScheduleContainer />
        </Layout>
      </RecipesProvider>
    </ScheduleProvider>
  </DragAndDropProvider>
)

export default Schedule
