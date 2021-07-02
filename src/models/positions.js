export default {
  name: "positions",
  state: { position: "" },
  reducers: {
    updatePosition(state, payload) {
      return {...state, position: payload.position}
    },
    showPossiblePositions(state, payload) {
      if (payload.piece === "pawn") {
        if (payload.position.split('')[1] === "7") {
          let file = payload.position.split('')[0]
          return {...state, possibleTiles:[file + 8, file + 9]}
        }
      }
      return {...state }
    }
  }
}