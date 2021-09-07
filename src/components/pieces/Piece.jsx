import React from 'react'
import Pawn from './Pawn'
import Rook from './Rook'
import Bishop from './Bishop'

const Piece = props => {
  const { piece, id, color } = props
  
  if (piece === "pawn") {
    return <Pawn id={id} color={color}/>
  }
  else if (piece === "rook") {
    return <Rook id={id} color={color} />
  }
  else if (piece === "bishop") {
    return <Bishop id={id} color={color} />
  }
}

export default Piece