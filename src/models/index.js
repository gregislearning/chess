import { init } from '@rematch/core'
import positions from './positions'
import boardState from './boardState.ts'
const store = init({
  models: {
    positions,
    boardState
  }
})

export default store