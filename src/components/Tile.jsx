import React, { useState } from 'react'
import styles from './Board.module.scss'
import cx from 'classnames'
import Piece from './pieces/Piece'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Tile = (props) => {
  const dispatch = useDispatch()
  const { color, id, selected, possibleTiles, currentPosition } = props
  // console.log(currentPosition)
  // const currentPosition = useSelector((state) => {
  //   return state.positions.position
  // })
  const boardState = useSelector(state => {
    return state.move
  })
  // console.log(boardState)
  
  let isPossible = possibleTiles ? possibleTiles.indexOf(id) !== -1 ? true : false : null
  const handleClick = e => {
    if (id === e.target.id) {
      if (e.target instanceof HTMLDivElement) {
        //piece doesnt exist here, potential move spot
        //if currentPosition is not undefined
        // console.log(selected)
        // console.log('div')
      }
      else {
        // console.log(color)
        // console.log(selected)
      }
      // console.log(e.target )
    }
  }

  return (
    <div 
      color={color} 
      id={id} 
      className={cx({[styles.isSelected]: selected === id,
        [styles.whiteTile]: color === 'white',
        [styles.blackTile]: color === 'black',
        [styles.possibleTiles]: isPossible})}
      onClick={handleClick}
    >
      {boardState.map(tile => {
        if (tile.position === id && tile.status.piece !== "none") {
          return <Piece key={id} id={id} piece={tile.status.piece} />
        }
      })}
    </div>
  )
}

export default Tile