export default {
  name: "positions",
  state: { position: ""},
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
    },
    changePositions(state, payload) {
      if (state.possibleTiles.indexOf(payload) !== -1) {
        return {...state, move: "yes", position: payload}
        // console.log("hello")  
      }
      return {...state, move: "no"}
    }
  }
}