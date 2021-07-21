import React, { useState } from 'react'
import styles from './Board.module.scss'
import cx from 'classnames'
import Pawn from './pieces/Pawn'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Tile = (props) => {
  const dispatch = useDispatch()
  const { color, id, selected, possibleTiles, currentPosition } = props
  // console.log(currentPosition)
  // const currentPosition = useSelector((state) => {
  //   return state.positions.position
  // })
  
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
      {id.indexOf(2) !== -1 ? <Pawn id={id}/> : null}
    </div>
  )
}

export default Tile