import React, { useContext } from 'react'
import styles from './Pieces.module.scss'
import ActiveTileContext from '../../context/ActiveTileContext'
import { useSelector, useDispatch } from "react-redux";
import whiteBishop from '../../media/pieces/white-bishop.png'
import blackBishop from '../../media/pieces/black-bishop.png'

const Bishop = props => {
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
          piece: "bishop", 
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
      src={color === 'white' ? whiteBishop : blackBishop}
      className={styles.bishop}
      id={id}
      onClick={handleClick} />
  )
}

export default Bishop