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
          return {...state, position: payload.position, test:"test2", possibleTiles:[file + 3, file + 4]}
        }
      }
      return {...state }
    },
    changePositions(state, payload) {
      if (state.possibleTiles.indexOf(payload) !== -1) {
        return {...state, position: payload}
      }
      return {...state}
    }
  }
}