export default {
  name: 'boardState',
  state: [
    {position: "a2", status: {
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
    { piece: "pawn", color: "black"}},
    {position: "a1", status: 
    { piece: "rook", color: "white"}},
    {position: "a8", status: 
    { piece: "rook", color: "black"}},
    {position: "h1", status: 
    { piece: "rook", color: "white"}},
    {position: "h8", status: 
    { piece: "rook", color: "black"}},
    {position: "f8", status:
    { piece: "bishop", color: "black"}},
    {position: "c8", status:
    { piece: "bishop", color: "black"}},
    {position: "f1", status:
    { piece: "bishop", color: "white"}},
    {position: "c1", status:
    { piece: "bishop", color: "white"}},
    {position: "g8", status:
    { piece: "knight", color: "black"}},
    {position: "b8", status:
    { piece: "knight", color: "black"}},
    {position: "g1", status:
    { piece: "knight", color: "white"}},
    {position: "b1", status:
    { piece: "knight", color: "white"}},
    {position: "e1", status:
    { piece: "queen", color: "white"}},
    {position: "e8", status:
    { piece: "queen", color: "black"}},
    {position: "d1", status:
    { piece: "king", color: "white"}},
    {position: "d8", status:
    { piece: "king", color: "black"}},
  ],
  takePiece: false,
  reducers: {
    move(state, payload) {
      //something like prevPosition: a2, position: a4, piece: pawn, color: white
      for (let i = 0; i < state.length; i++) {
        if (payload.prevPosition === state[i].position) {
          state[i].position = payload.nextPosition
          return [...state]
        }
      }
      return [...state]
    },
    prepTakeState(state) {
      // console.log('prep take')
      // state.takePiece = true
      // return state.takePiece
      return [...state]
    },
    takePiece(state, payload) {
      for (let i = 0; i < state.length; i++) {
        if (payload.nextPosition === state[i].position) { // locate destination of attack (state[i].pos)
          function attackingPiece(board) { // board comes  from js func find
            // console.log(board)
            return board.position === payload.prevPosition
          }
          console.log("Payload: ", payload)
          console.log(state.find(attackingPiece)) // find attacking piece
          // To Do: (Nov 30, 2022) Remove attacked piece residing at state[i].pos
          state[i].status.piece = state.find(attackingPiece).status.piece
          state[i].status.color = state.find(attackingPiece).status.color
          

          console.log(state[i])
          
        }
        if (payload.prevPosition === state[i].position) {
          // state[i] = {position: payload.prevPosition, status: {peice: "none", color: ""}}
        }
        // if (payload.prevPosition === state[i].position) {
        //   state[i].position = payload.nextPosition
        // }
      }
      return [...state]
    }
  }
}