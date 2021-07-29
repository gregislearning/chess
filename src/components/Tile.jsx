import React, { useState, useContext } from 'react'
import ActiveTileContext from '../context/ActiveTileContext'
import styles from './Board.module.scss'
import cx from 'classnames'
import Piece from './pieces/Piece'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Tile = (props) => {
  const dispatch = useDispatch()
  const { color, id, selected, possibleTiles, currentPosition } = props
  const { activeTile, setActiveTile } = useContext(ActiveTileContext) 

  // const currentPosition = useSelector((state) => {
  //   return state.positions.position
  // })
  const boardState = useSelector(state => {
    return state.move
  })
  // console.log(boardState)
  let isPossible = possibleTiles ? possibleTiles.indexOf(id) !== -1 ? true : false : null

  return (
    <div 
      color={color} 
      id={id} 
      className={cx({[styles.isSelected]: selected === id,
        [styles.whiteTile]: color === 'white',
        [styles.blackTile]: color === 'black',
        [styles.possibleTiles]: isPossible})}
    >
      {boardState.map(tile => {
        if (tile.position === id && tile.status.piece !== "none") {
          return <Piece key={id} color={tile.status.color} id={id} piece={tile.status.piece} />
        }
      })}
    </div>
  )
}

export default Tile