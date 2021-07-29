const parsePosition = (position, digitChange) => {
  let positionLetter = position.split('')[0]
  let positionDigit = parseInt(position.split('')[1])
  if (digitChange) {
    return `${positionLetter}${positionDigit + digitChange}`
  }
  return {letter: positionLetter, digit: positionDigit}
}

export default {
  name: "positions",
  state: { position: "", possibleTiles: "", piece: ""},
  reducers: {
    updatePosition(state, payload) {
      return {...state, position: payload.position, piece: payload.piece}
    },
    showPossiblePositions(state, payload) {
      // const parsePosition = (position) => {
      //   let positionLetter = position.split('')[0]
      //   let positionDigit = parseInt(position.split('')[1])
      //   return {letter: positionLetter, digit: positionDigit}
      // }
      if (payload.piece === "pawn") {
        if (payload.color === "black") {
          if (parsePosition(payload.position).digit === 7) {
            return {...state, position: payload.position, possibleTiles: [parsePosition(payload.position, -1), parsePosition(payload.position, -2)]}
          }
          else {
            return {...state, position: payload.position, possibleTiles: [parsePosition(payload.position, -1)]}
          }
      }
        if (parsePosition(payload.position).digit === 2) {
          return {...state, position: payload.position, possibleTiles:[parsePosition(payload.position, 1), parsePosition(payload.position, 2)]}
        }
        else {
          return {...state, position: payload.position, possibleTiles: [parsePosition(payload.position, 1)]}
        }
      }
      return {...state }
    }
  }
}
