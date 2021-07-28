export default {
  name: 'move',
  state: [{
    position: "a2", status: {
      piece: "pawn", color: "white"}},
    {position: "b2", status: {
      piece: "pawn", color: "white"}},
    {position: "c2", status:
    { piece: "pawn", color: "white"}},
    {position: "d2", status: 
    { piece: "pawn", color: "white"}},
    {position: "e2", status:
    { piece: "pawn", color: "white"}},
    {position: "f2", status:
    { piece: "pawn", color: "white"}},
    {position: "g2", status:
    { piece: "pawn", color: "white"}},
    {position: "h2", status:
    { piece: "pawn", color: "white"}},
    {position: "a7", status:
    { piece: "pawn", color: "black"}},
    {position: "b7", status: 
    { piece: "pawn", color: "black"}},
    {position: "c7", status:
    { piece: "pawn", color: "black"}},
    {position: "d7", status:
    { piece: "pawn", color: "black"}},
    {position: "e7", status:
    { piece: "pawn", color: "black"}},
    {position: "f7", status: 
    { piece: "pawn", color: "black"}},
    {position: "g7", status:
    { piece: "pawn", color: "black"}},
    {position: "h7", status:
    { piece: "pawn", color: "black"}}
  ],
  reducers: {
    movePawn(state, payload) {
      //something like prevPositoin: a2, position: a4, piece: pawn, color: white
      for (let i = 0; i < state.length; i++) {
        if (payload.prevPosition === state[i].position) {
          // console.log(state[i].position)
          state[i].position = payload.nextPosition
          return (
            [...state]
          )
        }
      }
      return [...state]
    }
  }
}