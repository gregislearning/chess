let positionLetter
let positionDigit
let occupiedPositions
let row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//array 1-8
let column = Array.from({length: 8}, (el, index) => index + 1)

const knightPosition = (position, boardState) => {
  positionLetter = position.split('')[0]
  positionDigit = parseInt(position.split('')[1])
  occupiedPositions = boardState.map(tile => (tile.position))

  //positionDigit -1 or +1, +2, -2
  let up = positionDigit + 2 <= column.length ? positionDigit + 2 : undefined
  let upRight = up ? positionLetter.charCodeAt(0) + 1 <= 104 ? String.fromCharCode(positionLetter.charCodeAt(0) + 1) : undefined : undefined
  let upLeft = up ? positionLetter.charCodeAt(0) - 1 >= 97 ? String.fromCharCode(positionLetter.charCodeAt(0) - 1) : undefined : undefined
  let down = positionDigit - 2 >= 0 ? positionDigit - 2 : undefined
  let downRight = down ? positionLetter.charCodeAt(0) + 1 <= 104 ? String.fromCharCode(positionLetter.charCodeAt(0) + 1) : undefined : undefined
  let downLeft = down ? positionLetter.charCodeAt(0) - 1 >= 97 ? String.fromCharCode(positionLetter.charCodeAt(0) - 1) : undefined : undefined
  let left = positionLetter.charCodeAt(0) - 2 >= 97 ? String.fromCharCode(positionLetter.charCodeAt(0) - 2) : undefined
  let leftUp = left ? positionDigit + 1 <= column.length ? positionDigit + 1 : undefined : undefined
  let leftDown = left ? positionDigit - 1 >= 0 ? positionDigit - 1 : undefined : undefined
  let right = positionLetter.charCodeAt(0) + 2 <= 104 ? String.fromCharCode(positionLetter.charCodeAt(0) + 2) : undefined
  let rightUp = right ? positionDigit + 1 <= column.length ? positionDigit + 1 : undefined : undefined
  let rightDown = right ? positionDigit - 1 >= 0 ? positionDigit - 1 : undefined : undefined 
  let possibleKnightPositions = []
  if (upRight) {
    possibleKnightPositions.push(upRight.concat(up))
  }
  if (upLeft) {
    possibleKnightPositions.push(upLeft.concat(up))
  }
  if (downRight) {
    possibleKnightPositions.push(downRight.concat(down))
  }
  if (downLeft) {
    possibleKnightPositions.push(downLeft.concat(down))
  }
  if (leftUp) {
    possibleKnightPositions.push(left.concat(leftUp))
  }
  if (leftDown) {
    possibleKnightPositions.push(left.concat(leftDown))
  }
  if (rightUp) {
    possibleKnightPositions.push(right.concat(rightUp))
  }
  if (rightDown) {
    possibleKnightPositions.push(right.concat(rightDown))
  }
  possibleKnightPositions = possibleKnightPositions.filter(tile => occupiedPositions.indexOf(tile) === -1)
  return possibleKnightPositions
}

export default knightPosition