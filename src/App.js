import Board from './components/Board'
import styles from './App.module.scss'
import { useEffect, useRef, useState } from 'react'
import ActiveTileContext from './context/ActiveTileContext'
import store from './models'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()

  const [activeTile, setActiveTile] = useState()
  const [outsideClick, setOutsideClick] = useState(false)

  const updatePosition = useSelector((state) => {
    // console.log(state.positions.position)
    return state.positions.position
  })
  const useOutsideAlerter = ref => {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setOutsideClick(true)
          dispatch({ type: "positions/updatePosition", payload: ''})
        }
        else {
          setOutsideClick(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }

    const boardRef = useRef(null)
    useOutsideAlerter(boardRef)
  
  return (
      <ActiveTileContext.Provider value={{activeTile, setActiveTile}}>
        <div ref={boardRef} className={styles.App} >
          <Board outsideClick={outsideClick}/>
        </div>
      </ActiveTileContext.Provider>
  );
}

export default App;
