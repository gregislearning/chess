import React, { useContext } from 'react'
import styles from './Pieces.module.scss'
import ActiveTileContext from '../../context/ActiveTileContext'
import { useSelector, useDispatch } from "react-redux";
import whiteKing from '../../media/pieces/white-king.png'
import blackKing from '../../media/pieces/black-king.png'

const King = props => {
  const dispatch = useDispatch()
  const {activeTile, setActiveTile} = useContext(ActiveTileContext)
  const { id, color } = props
  let currentPosition = id
  const boardState = useSelector(state => {
    return state.boardState
  })

  const handleClick = e => {
    dispatch({ 
      type:"positions/showPossiblePositions", 
      payload: 
        {
          position: currentPosition, 
          piece: "king", 
          color: color,
          boardState: boardState
        }
      })
    if (e.target.id === activeTile) {
      setActiveTile(null)
    }
    else {
      setActiveTile(e.target.id)
    }
  }
  
  return (
    <img
      src={color === 'white' ? whiteKing : blackKing}
      className={styles.king}
      id={id}
      onClick={handleClick} />
  )
}

export default King