let positionLetter
let positionDigit
let occupiedPositions
let row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//array 1-8
let column = Array.from({length: 8}, (el, index) => index + 1)

//detects all pieces in a potential moves array
const conflictParser = array => {
  return array.map(square => {
    if (occupiedPositions.indexOf(square) !== -1) {
      return square
    }
  }).filter(element => element !== undefined).map(square => {
    let arrayDigit = square.split('')[1]
    return parseInt(arrayDigit)
  })
}

const rookPosition = (piece, position, boardState) => {
  positionLetter = position.split('')[0]
  positionDigit = parseInt(position.split('')[1])
  occupiedPositions = boardState.map(tile => (tile.position))
  
  //each piece needs to check the board relative to their position and  destination
  //get all of the Rows (A-H), excluding current position
  let rowIndex = row.indexOf(positionLetter.toLowerCase())
  let slicedRow = [...row.slice(0,rowIndex), ...row.slice(rowIndex + 1)]

  //get all of the columns (1-8), excluding current position
  let columnIndex = column.indexOf(positionDigit)
  let slicedColumn = [...column.slice(0, columnIndex), ...column.slice(columnIndex + 1)]
  let possibleRookColumn = slicedColumn.map((element, index) => positionLetter + slicedColumn[index])
  let possibleRookRow = slicedRow.map((element) => element + String(positionDigit))
  //detect blocked tiles

  //array of digits of conflicts, numerical order
  let columnConflictsArray = conflictParser(possibleRookColumn)
  //difference between active position and conflicts
  let absolutePosition = conflictParser(possibleRookColumn).map(occupiedDigit =>  {
    return  Math.abs(positionDigit - occupiedDigit)
  })
  let closestDigit = Math.min(...absolutePosition)
  //get the element in columnConflictsArray that is closest to active position **need to determine big or small
  let indexOfSmallestConflict = absolutePosition.indexOf(closestDigit)
  let closestDigitPosition = columnConflictsArray[indexOfSmallestConflict]
  let closestBlockerCompletePos = positionLetter + closestDigitPosition

  console.log(positionLetter + closestDigitPosition)
  console.log(possibleRookColumn)
  console.log(position)
  //parse new possible moves within the column.  Small conflict --> position --> big conflict
  possibleRookColumn = 
  [...possibleRookColumn.slice(possibleRookColumn.indexOf(position)),
    ...possibleRookColumn.slice(possibleRookColumn.indexOf(closestBlockerCompletePos))]
  console.log(possibleRookColumn)

  let possibleRookMoves = possibleRookColumn.concat(possibleRookRow)

  //remove occupied squares

  possibleRookMoves = possibleRookMoves.map((square, index) => {
    if (occupiedPositions.indexOf(square) === -1) {
      return square
    }
    if (occupiedPositions.indexOf(square) !== -1) {
      let conflictLetter = square.split('')[0]
      //occupied tile number
      let conflictNumber = square.split('')[1]
      if (positionDigit < conflictNumber) {
        possibleRookColumn = [...possibleRookColumn.slice(0,square)]
      }
    }
  })

  // if rookNumber < blockerNumber => block all > blockerNumber
  // else if rookNumber > blockerNumber => block all <blockerNumber
  // Rows?
  return possibleRookMoves
} 


export default rookPosition