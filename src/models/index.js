import { init } from '@rematch/core'
import positions from './positions'
import test from './test'
const store = init({
  models: {
    positions,
    test
  }
})

export default store