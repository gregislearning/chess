import React, { useState } from 'react'
import styles from './Board.module.scss'
import cx from 'classnames'
import Pawn from './pieces/Pawn'

const Tile = (props) => {
  const { color, id, selected } = props
  
  return (
    <div 
      color={color} 
      id={id} 
      className={cx({[styles.isSelected]: selected === id, [styles.whiteTile]: color === 'white', [styles.blackTile]: color === 'black'})}
    >
      {id.indexOf(7) !== -1 ? <Pawn id={id}/> : null}
    </div>
  )
}

export default Tile