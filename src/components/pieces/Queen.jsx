import React, { useContext } from 'react'
import styles from './Pieces.module.scss'
import ActiveTileContext from '../../context/ActiveTileContext'
import { useSelector, useDispatch } from "react-redux";
import whiteQueen from '../../media/pieces/white-queen.png'
import blackQueen from '../../media/pieces/black-queen.png'

const Queen = props => {
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
          piece: "queen", 
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
      src={color === 'white' ? whiteQueen : blackQueen} 
      className={styles.rook}
      id={id}
      onClick={handleClick} />
  )
}

export default Queen