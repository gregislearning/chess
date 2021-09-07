let positionLetter
let positionDigit
let occupiedPositions
let row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//array 1-8
let column = Array.from({length: 8}, (el, index) => index + 1)

//detects all pieces in a potential moves array
export const conflictParser = (array, occupiedArray, output="none",) => {
  if (output === "none") {
    return array.map(square => {
      if (occupiedArray.indexOf(square) !== -1) {
        return square
      }
    })
  }
  return array.map(square => {
    if (occupiedArray.indexOf(square) !== -1) {
      return square
    }
  }).filter(element => element !== undefined).map(square => {
    let arrayDigit = square.split('')[1]
    let arrayLetter = square.split('')[0]
    return output === "number" ? parseInt(arrayDigit) : arrayLetter
  })
}

const rookPosition = (position, boardState) => {
  positionLetter = position.split('')[0]
  positionDigit = parseInt(position.split('')[1])
  occupiedPositions = boardState.map(tile => (tile.position))
  
  //each piece needs to check the board relative to their position and  destination
  //get all of the Rows (A-H), excluding current position

  //get all of the columns (1-8), excluding current position
  let possibleRookColumn = column.map(index => positionLetter + index)
  let possibleRookRow = row.map((element) => element + String(positionDigit))
  //detect blocked tiles
  //array of digits of conflicts, numerical order
  let columnConflictsArray = conflictParser(possibleRookColumn, occupiedPositions, "number")
  let rowConflictsArray = conflictParser(possibleRookRow, occupiedPositions, "letter")
  //difference between active position and conflicts
  let absoluteRowPosition = rowConflictsArray.map(occupiedLetter => {
    return positionLetter.charCodeAt(0) - occupiedLetter.charCodeAt(0)
  })
  let absoluteColPosition = columnConflictsArray.map(occupiedDigit =>  {
    return positionDigit - occupiedDigit
  })
  //horizontal movement
  let negativeRowPosition
  let positiveRowPosition = absoluteRowPosition.filter(num => num > 0).sort()[0] || undefined
  if (absoluteRowPosition.sort()[0] < 1) {
    negativeRowPosition= absoluteRowPosition.sort()[0]
  }
  if (negativeRowPosition && positiveRowPosition) {
    possibleRookRow = possibleRookRow.slice(possibleRookRow.indexOf(position) - positiveRowPosition, possibleRookRow.indexOf(position) - negativeRowPosition)
  }
  else if (negativeRowPosition && !positiveRowPosition) {
    possibleRookRow = possibleRookRow.slice(0, possibleRookRow.indexOf(position) - negativeRowPosition)
  }
  else if (positiveRowPosition && !negativeRowPosition) {
    possibleRookRow = possibleRookRow.slice(possibleRookRow.indexOf(position) - positiveRowPosition, possibleRookRow.length)
  }

  //vertical movement
  let negativeColPosition
  let positiveColPosition

  if (absoluteColPosition.sort()[0] < 1) {
    negativeColPosition = absoluteColPosition.sort()[0]
    positiveColPosition = absoluteColPosition.filter(num => num > 0)[0]
  }
  
  if (negativeColPosition && positiveColPosition) {
    possibleRookColumn = possibleRookColumn.slice(possibleRookColumn.indexOf(position) - positiveColPosition, possibleRookColumn.indexOf(position) - negativeColPosition)
  }
  else if (negativeColPosition && !positiveColPosition) {
    possibleRookColumn = possibleRookColumn.slice(0, possibleRookColumn.indexOf(position) - negativeColPosition)
  }
  else if (positiveColPosition && !negativeColPosition) {
    possibleRookColumn = possibleRookColumn.slice(possibleRookColumn.indexOf(position) - positiveColPosition, possibleRookColumn.length)
  }
  let possibleRookMoves = possibleRookColumn.concat(possibleRookRow)
  //remove occupied squares

  possibleRookMoves = possibleRookMoves.map((square, index) => {
    if (occupiedPositions.indexOf(square) === -1) {
      return square
    }
    if (occupiedPositions.indexOf(square) !== -1) {
      //occupied tile number
      let conflictNumber = square.split('')[1]
      if (positionDigit < conflictNumber) {
        possibleRookColumn = [...possibleRookColumn.slice(0,square)]
      }
    }
  })

  return possibleRookMoves
} 


export default rookPosition