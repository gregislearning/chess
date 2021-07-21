import React, { useEffect, useState, useContext } from 'react'
import styles from './Board.module.scss'
import Tile from './Tile'
import ActiveTileContext from '../context/ActiveTileContext'
import { useSelector, useDispatch } from 'react-redux'

const Board = props => {
  const dispatch = useDispatch()
  const [isPieceSelected, setIsPieceSelected] = useState(false)
  const { activeTile, setActiveTile } = useContext(ActiveTileContext) 
  const { outsideClick } = props
  let columns = new Array(8)
  let tileIds = [...columns].map(() => [])
  const currentPosition = useSelector((state) => {
    return state.positions.position
  })
  // console.log(currentPosition)
  const possibleTiles = useSelector((state) => {
    // console.log(state.positions.possibleTiles)
    return activeTile !== null ? (state.positions.possibleTiles) : null
  })

  for (let i = 8; i > 0; i--) {
    for (let j = 97; j < 105; j++) {
      tileIds[i-1].push(String.fromCharCode(j) + i)
    }
  }

  const handleClick = e => {
    if (e.target instanceof HTMLDivElement && isPieceSelected) {
      console.log(`piece needs to be moved to ${e.target.id}`)
      //dispatch
      setIsPieceSelected(false)
    }
    else {
      let pieceIdentifier = e.target.className.split("_")
      if (pieceIdentifier.indexOf('Pieces') !== -1) {
        setIsPieceSelected(true)
      } 

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
                possibleTiles={possibleTiles}
                currentPosition={currentPosition} />
            }
            return <Tile 
                color='white'
                id={tileId}
                key={tileId}
                selected={activeTile}
                possibleTiles={possibleTiles}
                currentPosition={currentPosition} />
            }
            else {
              if (secondIndex % 2 === 0) {
                return <Tile
                color='white'
                id={tileId}
                key={tileId}
                selected={activeTile}
                possibleTiles={possibleTiles}
                currentPosition={currentPosition}/>
              }
              return <Tile
                color='black'
                id={tileId}
                key={tileId}
                selected={activeTile}
                possibleTiles={possibleTiles}
                currentPosition={currentPosition}/>
            }
          }
        )
      )}
    )}
    </div>
  )
}

export default Board