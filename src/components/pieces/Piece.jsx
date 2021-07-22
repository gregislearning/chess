import React from 'react'
import Pawn from './Pawn'

const Piece = props => {
  const { piece, id } = props
  
  if (piece === "pawn") {
    return <Pawn id={id}/>
  }
}

export default Piece