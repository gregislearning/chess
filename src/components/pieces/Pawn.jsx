import React, { useState, useContext } from 'react'
import whitePawn from '../../media/pieces/white-pawn.png'
import blackPawn from '../../media/pieces/black-pawn.png'
import styles from './Pieces.module.scss'
import ActiveTileContext from '../../context/ActiveTileContext'
import { useSelector, useDispatch } from "react-redux";

const Pawn = props => {

  const dispatch = useDispatch()
  
  const {activeTile, setActiveTile} = useContext(ActiveTileContext)
  let { id, color } = props
  
  let currentPosition = id
  const boardState = useSelector(state => {
    return state.boardState
  })
  const takePieceState = useSelector(state => {
    return state.boardState.takePiece
  })
  // console.log(takePieceState)
  const handleClick = e => {
    // console.log('target piece')
    dispatch({ type: "positions/updatePosition", payload: {position: currentPosition, piece: "pawn"}})
    dispatch({ 
      type: "positions/showPossiblePositions", 
      payload: {
        position: currentPosition, 
        piece: "pawn", 
        color: color,
        boardState: boardState}})

    if (e.target.id === activeTile) {
      setActiveTile(null)
    }
    else {
      setActiveTile(e.target.id)
    }
  }
  return (
    <img 
      src={color === 'white' ? whitePawn : blackPawn}
      className={styles.pawn}
      onClick={handleClick}
      id={id}/>
  )
}

export default Pawn