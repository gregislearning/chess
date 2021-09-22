import rookPosition from './rookPosition'
import bishopPosition from './bishopPosition'

const queenPosition = (position, boardState) => {

  return rookPosition(position, boardState).concat(bishopPosition(position, boardState))
}
export default queenPosition