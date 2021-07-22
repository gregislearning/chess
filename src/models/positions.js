export default {
  name: "positions",
  state: { position: "", possibleTiles: "", piece: ""},
  reducers: {
    updatePosition(state, payload) {
      return {...state, position: payload.position, piece: payload.piece}
    },
    showPossiblePositions(state, payload) {
      if (payload.piece === "pawn") {
        if (payload.position.split('')[1] === "2") {
          let file = payload.position.split('')[0]
          return {...state, position: payload.position, possibleTiles:[file + 3, file + 4]}
        }
      }
      return {...state }
    },
  }
}