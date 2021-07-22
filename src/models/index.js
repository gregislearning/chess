import { init } from '@rematch/core'
import positions from './positions'
import move from './move'
const store = init({
  models: {
    positions,
    move
  }
})

export default store