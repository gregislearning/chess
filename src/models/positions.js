const parsePosition = (piece, position, digitChange, boardState) => {
  let positionLetter = position.split('')[0]
  let positionDigit = parseInt(position.split('')[1])
  let occupiedPositions = boardState.map(tile => (tile.position))
  //each piece needs to check the board relative to their position and  destination
  
  if (piece === "pawn") {
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
  else if (piece === "rook") {
    //full files rook rook rook
    let destination = positionLetter + (positionDigit )    
 } 
}

export default {
  name: "positions",
  state: { position: "", possibleTiles: "", piece: ""},
  reducers: {
    updatePosition(state, payload) {
      return {...state, position: payload.position, piece: payload.piece}
    },
    showPossiblePositions(state, payload) {
      if (payload.piece === "pawn") {
        if (payload.color === "black") {
          if (parsePosition("pawn", payload.position, undefined, payload.boardState).digit === 7) {
            return {
              ...state, 
              position: payload.position, 
              possibleTiles: 
                [parsePosition("pawn", payload.position, -1, payload.boardState), 
                parsePosition("pawn", payload.position, -2, payload.boardState)],
              }
          }
          else {
            return {
              ...state, 
              position: payload.position, 
              possibleTiles: [parsePosition("pawn", payload.position, -1, payload.boardState)]}
          }
      }
        if (parsePosition("pawn", payload.position, undefined, payload.boardState).digit === 2) {
          return {
            ...state, 
            position: payload.position, 
            possibleTiles:
              [parsePosition("pawn", payload.position, 1, payload.boardState),
               parsePosition("pawn", payload.position, 2, payload.boardState)],
            }
        }
        else {
          return {
            ...state, 
            position: payload.position, 
            possibleTiles: [parsePosition("pawn", payload.position, 1, payload.boardState)]}
        }
      }
      else if (payload.piece === "rook") {
        return {...state, position: payload.position, possibleTiles: []}
      }
      return {...state }
    }
  }
}
