import React, { useState, useContext } from 'react'
import pawn from '../../media/pieces/pawn.png'
import styles from './Pieces.module.scss'
import ActiveTileContext from '../../context/ActiveTileContext'
import { useSelector, useDispatch } from "react-redux";

const Pawn = props => {
  const dispatch = useDispatch()

  const updatePosition = useSelector((state) => {
    // console.log(state.positions.position)
    return state.positions.position
  })
  const showPossiblePositions = useSelector((state) => {
    console.log(state)
  })
  const {activeTile, setActiveTile} = useContext(ActiveTileContext)
  const { id } = props
  
  let currentPosition = id
  
  const possilbeMoves = [
    ]
  const move = () => {
    
  }
  const handleClick = (e) => {
    dispatch({ type: "positions/updatePosition", payload: {position: currentPosition, piece: "pawn"}})
    dispatch ({ type: "positions/showPossiblePositions", payload: {position: currentPosition, piece: "pawn"}})
    console.log(updatePosition)
    console.log(showPossiblePositions)
    if (e.target.id === activeTile) {
      setActiveTile(null)
    }
    else {
      setActiveTile(e.target.id)
    }
  }
  return (
    <img 
      src={pawn}
      className={styles.pawn}
      onClick={handleClick}
      id={id}/>
  )
}

export default Pawn