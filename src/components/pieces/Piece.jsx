import React from 'react'
import Pawn from './Pawn'
import Rook from './Rook'
import Bishop from './Bishop'
import Knight from './Knight'
import Queen from './Queen'
import King from './King'

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
  else if (piece === "knight") {
    return <Knight id={id} color={color} />
  }
  else if (piece === "queen") {
    return <Queen id={id} color={color} />
  }
  else  if (piece === "king") {
    return <King id={id} color={color} />
  }
}

export default Piece