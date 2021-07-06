export default {
  name: "positions",
  state: { position: "", test:"" },
  reducers: {
    updatePosition(state, payload) {
      return {...state, test: "test", position: payload.position}
    },
    showPossiblePositions(state, payload) {
      if (payload.piece === "pawn") {
        if (payload.position.split('')[1] === "2") {
          let file = payload.position.split('')[0]
          return {...state, position: payload.position, test:"test2", possibleTiles:[file + 3, file + 4]}
        }
      }
      return {...state }
    }
  }
}