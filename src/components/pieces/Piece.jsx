import React from 'react'
import Pawn from './Pawn'

const Piece = props => {
  const { piece, id, color } = props
  
  if (piece === "pawn") {
    return <Pawn id={id} color={color}/>
  }
}

export default Piece