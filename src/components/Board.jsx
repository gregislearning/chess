import React, { useEffect, useState, useContext } from 'react'
import styles from './Board.module.scss'
import Tile from './Tile'
import ActiveTileContext from '../context/ActiveTileContext'

const Board = props => {
  const { activeTile, setActiveTile } = useContext(ActiveTileContext) 
  const { outsideClick } = props
  // const [activeTile, setActiveTile] = useState()
  const tileIds = []
  for (let i = 1; i < 9; i++) {
  for (let j = 97; j < 104; j++) {
    tileIds.push(String.fromCharCode(j) + i)
    }
  }

  const handleClick = (e) => {
    if (!activeTile) {
      
    }
  }
  useEffect(()=> {
    if (outsideClick) {
      setActiveTile(null)
    }
  }, [outsideClick] )
  
  return (
    <div className={styles.board} onClick={handleClick}>
      {tileIds.map((tileId, index) => {
        if (index % 2 === 0) {
          return <Tile color='white' id={tileId} key={tileId} selected={activeTile} />
        }
        else {
          return <Tile color='black' id={tileId} key={tileId} selected={activeTile}/>
        }
      })}
      
    </div>
  )
}

export default Board