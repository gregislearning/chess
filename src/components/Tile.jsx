import React, { useState } from 'react'
import styles from './Board.module.scss'
import cx from 'classnames'
import Pawn from './pieces/Pawn'

const Tile = (props) => {
  const { color, id, selected, possibleTiles } = props
  let isPossible = possibleTiles ? possibleTiles.indexOf(id) !== -1 ? true : false : null
  const handleClick = () => {
    // console.log(possibleTiles)
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