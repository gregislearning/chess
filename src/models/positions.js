import pawnPosition from './positionParser/pawnPosition'
import rookPosition from './positionParser/rookPosition'
import bishopPosition from './positionParser/bishopPosition'
import knightPosition from './positionParser/knightPosition'
import queenPosition from './positionParser/queenPosition'
import kingPosition from './positionParser/kingPosition'

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
          if (pawnPosition("black", payload.position, undefined, payload.boardState).digit === 7) {
            return {
              ...state, 
              position: payload.position, 
              possibleTiles: 
                [...pawnPosition("black", payload.position, -1, payload.boardState), 
                ...pawnPosition("black", payload.position, -2, payload.boardState),
              ]
              }
          }
          else {
            return {
              ...state, 
              position: payload.position, 
              possibleTiles: [...pawnPosition("black", payload.position, -1, payload.boardState)]}
          }
      }
        if (pawnPosition("pawn", payload.position, undefined, payload.boardState).digit === 2) {
          return {
            ...state, 
            position: payload.position, 
            possibleTiles:
              [...pawnPosition("white", payload.position, 1, payload.boardState),
              ...pawnPosition("white", payload.position, 2, payload.boardState),
            ]
              ,
            }
        }
        else {
          return {
            ...state, 
            position: payload.position, 
            possibleTiles: [...pawnPosition("white", payload.position, 1, payload.boardState)]}
        }
      }
      else if (payload.piece === "rook") {
        return {
            ...state, 
            position: payload.position, 
            possibleTiles: 
              [...rookPosition(payload.position, payload.boardState)]}
      }
      else if (payload.piece === "bishop") {
        return {
          ...state,
          position: payload.position,
          possibleTiles:
            [...bishopPosition(payload.position, payload.boardState)]
        }
      }
      else if (payload.piece === "knight") {
        return {
          ...state,
          position: payload.position,
          possibleTiles:
            [...knightPosition(payload.position, payload.boardState)]
        }
      }
      else if (payload.piece === "queen") {
        return {
          ...state,
          position: payload.position,
          possibleTiles:
            [...queenPosition(payload.position, payload.boardState)]
        }
      }
      else if (payload.piece === "king") {
        return {
          ...state,
          position: payload.position,
          possibleTiles:
            [...kingPosition(payload.position, payload.boardState)]
        }
      }
      return {...state }
    }
  }
}
