import React, { useContext } from 'react'
import { useSelector, useDispatch } from "react-redux";
import ActiveTileContext from '../context/ActiveTileContext'

function useShowPosition(piece, currentPosition, color, event) {
  const dispatch = useDispatch()
  const {activeTile, setActiveTile} = useContext(ActiveTileContext)
  const boardState = useSelector(state => {
    return state.boardState
  })
  dispatch({ 
    type:"positions/showPossiblePositions", 
    payload: 
      {
        position: currentPosition, 
        piece: "rook", 
        color: color,
        boardState: boardState
      }
    })
  if (event.target.id === activeTile) {
    return setActiveTile(null)
  }
  else {
    return setActiveTile(event.target.id)
  }
}

export default useShowPosition