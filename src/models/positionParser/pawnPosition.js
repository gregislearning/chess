import boardBasics from './boardBasics'

const pawnPosition = (piece, position, digitChange, boardState) => {
  let positionLetter = position.split('')[0]
  let positionDigit = parseInt(position.split('')[1])
  let occupiedPositions = boardState.map(tile => (tile.position))
  let row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  //array 1-8
  let column = Array.from({length: 8}, (el, index) => index + 1)
  if (digitChange) {
    let destination = positionLetter + (positionDigit  + digitChange)
    if (occupiedPositions.indexOf(destination) === -1) {
      return destination
    }
    else {
      console.log("blocked!")
    }
  }
  return {letter: positionLetter, digit: positionDigit}
}

export default pawnPosition