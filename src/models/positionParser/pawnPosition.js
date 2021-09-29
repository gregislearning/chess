
const pawnPosition = (color, position, digitChange, boardState) => {
  let positionLetter = position.split('')[0]
  let positionDigit = parseInt(position.split('')[1])
  let occupiedPositions = boardState.map(tile => (tile.position))
  let attackPositions

  if (digitChange && digitChange !== "take") {
    let destination = [positionLetter + (positionDigit  + digitChange)]

    let attackLetterLeft = positionLetter.charCodeAt(0) - 1 >= 97 ? String.fromCharCode(positionLetter.charCodeAt(0) - 1) : undefined
    let attackLetterRight = positionLetter.charCodeAt(0) + 1 <= 104 ? positionLetter.charCodeAt(0) + 1 : undefined
    if (color === "white") {
      let attackDigit = positionDigit + 1 < 8 ? positionDigit + 1 : undefined
      attackPositions = [attackLetterLeft + attackDigit, String.fromCharCode(attackLetterRight) + attackDigit]
      attackPositions = attackPositions ? attackPositions.filter(tile => occupiedPositions.indexOf(tile) !== -1) : undefined
    }
    else if (color === "black") {
      let attackDigit = positionDigit - 1 > 0 ? positionDigit - 1 : undefined
      attackPositions = [attackLetterLeft + attackDigit, String.fromCharCode(attackLetterRight) + attackDigit]
      attackPositions = attackPositions ? attackPositions.filter(tile => occupiedPositions.indexOf(tile) !== -1) : undefined
    }
    //account for double move on first move being blocked
    if (digitChange === 2 ) {
      if (occupiedPositions.indexOf(positionLetter + (positionDigit + 1)) !== -1) {
        return
      }
    }
    else if (digitChange === -2) {
      if (occupiedPositions.indexOf(positionLetter + (positionDigit - 1)) !== -1) {
        return
      }
    }
    
    if (occupiedPositions.indexOf(destination[0]) === -1) {
      //check for takable pieces
      
      if (attackPositions && attackPositions.length !== 0) {
        destination = [...destination, ...attackPositions]
      }
      return destination
    }
    else {
      return attackPositions
    }
  }
  
  //only reaches here if there is no digit change - purpose for determing starting row or not
  return {letter: positionLetter, digit: positionDigit}
}

export default pawnPosition