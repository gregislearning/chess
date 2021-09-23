let positionLetter
let positionDigit
let occupiedPositions
//array 1-8
let column = Array.from({length: 8}, (el, index) => index + 1)

const kingPosition = (position, boardState) => {
  positionLetter = position.split('')[0]
  positionDigit = parseInt(position.split('')[1])
  occupiedPositions = boardState.map(tile => (tile.position))

  let up = positionDigit + 1 <= column.length ? positionDigit + 1 : undefined
  let down = positionDigit - 1 > 0 ? positionDigit - 1 : undefined
  let left = positionLetter.charCodeAt(0) - 1 > 97 ? String.fromCharCode(positionLetter.charCodeAt(0) - 1) : undefined
  let right = positionLetter.charCodeAt(0) + 1 <= 104 ? String.fromCharCode(positionLetter.charCodeAt(0) + 1) : undefined

  let possiblePositions = []
  possiblePositions.push(left + up, right + up , left + down, right + down, left + positionDigit, right + positionDigit, positionLetter + up, positionLetter + down)
  return possiblePositions.filter(tile => occupiedPositions.indexOf(tile) === -1)
}

export default kingPosition