import React, { useEffect, useState, useContext } from 'react'
import styles from './Board.module.scss'
import Tile from './Tile.jsx'
import ActiveTileContext from '../context/ActiveTileContext'
import { useSelector, useDispatch } from 'react-redux'

interface Props {
  outsideClick: boolean
}

const Board = (props: Props) => {
  const dispatch = useDispatch()
  const [pieceSelected, setPieceSelected] = useState(false)
  const { activeTile, setActiveTile } = useContext(ActiveTileContext) 
  const { outsideClick } = props
  let columns: any[] = new Array(8)
  let tileIds: any[] = [...columns].map(() => [])

  //To Do: change state props
  const currentPosition = useSelector((state: any) => {
    return state.positions
  })
  const possibleTiles = useSelector((state: any) => {
    return activeTile !== null ? (state.positions.possibleTiles) : null
  })

  for (let i = 8; i > 0; i--) {
    for (let j = 97; j < 105; j++) {
      tileIds[i-1].push(String.fromCharCode(j) + i)
    }
  }

  const handleClick = (e: any) => {
    //take piece
    if (e.target instanceof HTMLImageElement && pieceSelected) {
      // if target is within attacking positions
      if (possibleTiles && possibleTiles.indexOf(e.target.id) !== -1) {
        dispatch({type:'boardState/takePiece', payload: {prevPosition: activeTile, nextPosition: e.target.id}})
        e.stopPropagation()
        e.preventDefault()
        dispatch({ type: 'boardState/removePiece', payload: {prevPosition: activeTile, nextPosition: e.target.id}})
      }
     
    }
    //confirm move piece
    else if (e.target instanceof HTMLDivElement && pieceSelected) {
      if (possibleTiles && possibleTiles.indexOf(e.target.id) !== -1) {
        dispatch({type:'boardState/move', payload: {prevPosition: activeTile, nextPosition: e.target.id}})
      }
      else {
        console.log('not a possible position')
      }
      setPieceSelected(false)
      setActiveTile(null)
    }
    //select piece
    else {
      let pieceIdentifier = e.target.className.split("_")
      if (pieceIdentifier.indexOf('Pieces') !== -1) {
        setPieceSelected(true)
      } 
    }
  }
  useEffect(()=> {
    if (outsideClick) {
      setActiveTile(null)
      setPieceSelected(false)
    }
  }, [outsideClick] )
  
  return (
    <div className={styles.board} onClick={handleClick}>
      {tileIds.reverse().map((tileRow, index) => {
        return (
          tileRow.map((tileId: number, secondIndex: number) => {
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