import { MealType } from '@models/meals'
import { Recipe } from '@models/recipes'
import constate from 'constate'
import { useCallback, useState } from 'react'

const useDragAndDropHook = () => {
  const [state, setState] = useState<{ data: any }>({
    data: null,
  })

  const onDrag = useCallback(
    (event: React.DragEvent<HTMLDivElement>, item: Recipe) => {
      event.dataTransfer.setData('text', JSON.stringify(item))
    },
    [],
  )

  const onDrop = useCallback(
    (
      event: React.DragEvent<HTMLDivElement>,
      date: string,
      mealType: MealType,
    ) => {
      event.preventDefault()

      const data = event.dataTransfer.getData('text')
      const recipe = JSON.parse(data)
      console.log(recipe, date, mealType)
      return state
    },
    [state],
  )

  return {
    state,
    effects: {
      onDrag,
      onDrop,
    },
  }
}

const [
  DragAndDropProvider,
  useDragAndDropState,
  useDragAndDropEffects,
] = constate(
  useDragAndDropHook,
  (value) => value.state,
  (value) => value.effects,
)

export { DragAndDropProvider, useDragAndDropState, useDragAndDropEffects }
