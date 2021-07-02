import { init } from '@rematch/core'
import positions from './positions'
const store = init({
  models: {
    positions,
  }
})

export default store