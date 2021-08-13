const boardBasics = (position, boardState) => {
  let positionLetter = position.split('')[0]
  let positionDigit = parseInt(position.split('')[1])
  let occupiedPositions = boardState.map(tile => (tile.position))
  let row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  //array 1-8
  let column = Array.from({length: 8}, (el, index) => index + 1)
  //each piece needs to check the board relative to their position and  destination
  return [positionLetter, positionDigit, occupiedPositions, row, column]
}

export default boardBasics