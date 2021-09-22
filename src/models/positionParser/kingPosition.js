import {  conflictParser } from './rookPosition'

let positionLetter
let positionDigit
let occupiedPositions
let row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//array 1-8
let column = Array.from({length: 8}, (el, index) => index + 1)

const kingPosition = (position, boardState) => {
  positionLetter = position.split('')[0]
  positionDigit = parseInt(position.split('')[1])
  occupiedPositions = boardState.map(tile => (tile.position))

  let up = positionDigit + 1 <= column.length ? positionDigit + 1 : undefined
  let down = positionDigit - 1 > 0 ? positionDigit - 1 : undefined
  let left = positionLetter.charCodeAt(0) - 1 > 97 ? String.fromCharCode(positionLetter.charCodeAt(0) - 1) : undefined
  let right = positionLetter.charCodeAt(0) + 1 <= 104 ? String.fromCharCode(positionLetter.charCodeAt(0) - 1) : undefined

  let possiblePositoins = up.concat(down).concat(left).concat(right)
  return possiblePositoins
}

export default kingPosition