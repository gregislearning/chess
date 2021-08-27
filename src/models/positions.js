import pawnPosition from './positionParser/pawnPosition'
import rookPosition from './positionParser/rookPosition'

const parsePosition = (piece, position, digitChange, boardState) => {
  // let positionLetter = position.split('')[0]
  // let positionDigit = parseInt(position.split('')[1])
  // let occupiedPositions = boardState.map(tile => (tile.position))
  // let row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  // //array 1-8
  // let column = Array.from({length: 8}, (el, index) => index + 1)
  // //each piece needs to check the board relative to their position and  destination
  
  if (piece === "pawn") {
    
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
          if (pawnPosition("pawn", payload.position, undefined, payload.boardState).digit === 7) {
            return {
              ...state, 
              position: payload.position, 
              possibleTiles: 
                [pawnPosition("pawn", payload.position, -1, payload.boardState), 
                pawnPosition("pawn", payload.position, -2, payload.boardState)],
              }
          }
          else {
            return {
              ...state, 
              position: payload.position, 
              possibleTiles: [pawnPosition("pawn", payload.position, -1, payload.boardState)]}
          }
      }
        if (pawnPosition("pawn", payload.position, undefined, payload.boardState).digit === 2) {
          return {
            ...state, 
            position: payload.position, 
            possibleTiles:
              [pawnPosition("pawn", payload.position, 1, payload.boardState),
              pawnPosition("pawn", payload.position, 2, payload.boardState)],
            }
        }
        else {
          return {
            ...state, 
            position: payload.position, 
            possibleTiles: [pawnPosition("pawn", payload.position, 1, payload.boardState)]}
        }
      }
      else if (payload.piece === "rook") {
        return {
            ...state, 
            position: payload.position, 
            possibleTiles: 
              [...rookPosition(payload.color, payload.position, payload.boardState)]}
      }
      return {...state }
    }
  }
}
