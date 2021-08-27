let positionLetter
let positionDigit
let occupiedPositions
let row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//array 1-8
let column = Array.from({length: 8}, (el, index) => index + 1)

//detects all pieces in a potential moves array
const conflictParser = (array, output) => {
  return array.map(square => {
    if (occupiedPositions.indexOf(square) !== -1) {
      return square
    }
  }).filter(element => element !== undefined).map(square => {
    let arrayDigit = square.split('')[1]
    let arrayLetter = square.split('')[0]
    return output === "number" ? parseInt(arrayDigit) : arrayLetter
  })
}

const rookPosition = (color, position, boardState) => {
  positionLetter = position.split('')[0]
  positionDigit = parseInt(position.split('')[1])
  occupiedPositions = boardState.map(tile => (tile.position))
  
  //each piece needs to check the board relative to their position and  destination
  //get all of the Rows (A-H), excluding current position
  // let rowIndex = row.indexOf(positionLetter.toLowerCase())
  // let slicedRow = [...row.slice(0,rowIndex), ...row.slice(rowIndex + 1)]

  //get all of the columns (1-8), excluding current position
  // let columnIndex = column.indexOf(positionDigit)
  // let slicedColumn = [...column.slice(0, columnIndex), ...column.slice(columnIndex + 1)]
  let possibleRookColumn = column.map(index => positionLetter + index)
  let possibleRookRow = row.map((element) => element + String(positionDigit))
  // console.log(possibleRookRow)
  //detect blocked tiles
  //array of digits of conflicts, numerical order
  let columnConflictsArray = conflictParser(possibleRookColumn, "number")
  let rowConflictsArray = conflictParser(possibleRookRow, "letter")
  console.log(rowConflictsArray)
  //difference between active position and conflicts
  let absoluteRowPosition = rowConflictsArray.map(occupiedLetter => {
    return positionLetter.charCodeAt(0) - occupiedLetter.charCodeAt(0)
  })
  let absoluteColPosition = columnConflictsArray.map(occupiedDigit =>  {
    return positionDigit - occupiedDigit
  })
  console.log(absoluteRowPosition)
  let negativeColPosition
  let positiveColPosition
  let negativeRowPosition
  let positiveRowPosition

  if (absoluteRowPosition.sort()[0] < 1) {
    negativeRowPosition= absoluteRowPosition.sort()[0]
    positiveColPosition = absoluteRowPosition.filter(num => num > 0)[0]
  }
  console.log(negativeRowPosition)
  console.log(positiveRowPosition)
  console.log(possibleRookRow.indexOf(position))
  if (negativeRowPosition && positiveRowPosition) {
    possibleRookRow = possibleRookRow.slice(possibleRookRow.indexOf(position) + negativeRowPosition, possibleRookRow.indexOf(position) - positiveRowPosition)
  }

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