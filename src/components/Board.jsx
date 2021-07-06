import React, { useEffect, useState, useContext } from 'react'
import styles from './Board.module.scss'
import Tile from './Tile'
import ActiveTileContext from '../context/ActiveTileContext'
import { useSelector, useDispatch } from 'react-redux'

const Board = props => {
  const dispatch = useDispatch()
  const { activeTile, setActiveTile } = useContext(ActiveTileContext) 
  const { outsideClick } = props
  let columns = new Array(8)
  let tileIds = [...columns].map(() => [])

  const possibleTiles = useSelector((state) => {
    // console.log(state.positions.possibleTiles)
    return activeTile !== null ? (state.positions.possibleTiles) : null
  })
  for (let i = 8; i > 0; i--) {
    for (let j = 97; j < 105; j++) {
      tileIds[i-1].push(String.fromCharCode(j) + i)
    }
  }

  const handleClick = (e) => {
    if (activeTile) {
      // dispatch({ type: "positions/showPossiblePositions", payload: })
    }
  }
  useEffect(()=> {
    if (outsideClick) {
      setActiveTile(null)
    }
  }, [outsideClick] )
  
  return (
    <div className={styles.board} onClick={handleClick}>
      {tileIds.reverse().map((tileRow, index) => {
        return (
          tileRow.map((tileId, secondIndex) => {
            if (index % 2 === 0) {
              //if index is even, start with black
              //if secondIndex is even, black
              if (secondIndex % 2 === 0) {
                return <Tile 
                color='black'
                id={tileId}
                key={tileId}
                selected={activeTile}
                possibleTiles={possibleTiles} />
            }
            return <Tile 
                color='white'
                id={tileId}
                key={tileId}
                selected={activeTile}
                possibleTiles={possibleTiles} />
            }
            else {
              if (secondIndex % 2 === 0) {
                return <Tile
                color='white'
                id={tileId}
                key={tileId}
                selected={activeTile}
                possibleTiles={possibleTiles}/>
              }
              return <Tile
                color='black'
                id={tileId}
                key={tileId}
                selected={activeTile}
                possibleTiles={possibleTiles}/>
            }
          }
        )
      )}
    )}
    </div>
  )
}

export default Board