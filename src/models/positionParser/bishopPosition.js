import { conflictParser } from './rookPosition'

let positionLetter
let positionDigit
let occupiedPositions
let row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//array 1-8
let column = Array.from({length: 8}, (el, index) => index + 1)

const bishopPosition = (position, boardState) => {
  positionLetter = position.split('')[0]
  positionDigit = parseInt(position.split('')[1])
  occupiedPositions = boardState.map(tile => (tile.position))

  let upRight = []
  let upLeft = []
  let downRight = []
  let downLeft = []
  for (let i = 1; i < column.length; i++) {
    if (positionDigit + i <= column.length && positionLetter.charCodeAt(0) + i <= 104) {
      upRight.push(String.fromCharCode(positionLetter.charCodeAt(0) + i) + (positionDigit + i))
    }
    if (positionDigit + i <= column.length && positionLetter.charCodeAt(0) - i >= 97) {
      upLeft.push(String.fromCharCode(positionLetter.charCodeAt(0) - i) + (positionDigit + i))
    }
    if (positionDigit - i >= 1 && positionLetter.charCodeAt(0) + i <= 104) {
      downRight.push(String.fromCharCode(positionLetter.charCodeAt(0) + i) + (positionDigit - i))
    }
    if (positionDigit - i >= 1 && positionLetter.charCodeAt(0) - i >= 97) {
      downLeft.push(String.fromCharCode(positionLetter.charCodeAt(0) - i) + (positionDigit - i))
    }
  }
  const conflictsUpRight = conflictParser(upRight, occupiedPositions).filter(el => el !== undefined)
  const conflictsUpLeft = conflictParser(upLeft, occupiedPositions).filter(el => el !== undefined)
  const conflictsDownRight = conflictParser(downRight, occupiedPositions).filter(el => el !== undefined)
  const conflictsDownLeft = conflictParser(downLeft, occupiedPositions).filter(el => el !== undefined)
  if (conflictsUpRight.length !== 0) {
    upRight = upRight.slice(0, upRight.indexOf(conflictsUpRight[0]))
  }
  if (conflictsUpLeft.length !== 0) {
    upLeft = upLeft.slice(0, upLeft.indexOf(conflictsUpLeft[0]))
  }
  if (conflictsDownRight.length !== 0) {
    downRight = downRight.slice(0, downRight.indexOf(conflictsDownRight[0]))
  }
  if (conflictsDownLeft.length !== 0) {
    downLeft = downLeft.slice(0, downLeft.indexOf(conflictsDownLeft[0]))
  }
  let possibleBishopMoves = upRight.concat(upLeft).concat(downLeft).concat(downRight)

  return possibleBishopMoves
}

export default bishopPosition