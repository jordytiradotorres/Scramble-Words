import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ScrambleWords} from "@/05-useReducer/ScrambleWords.tsx";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<TasksApp/>*/}
    <ScrambleWords/>
  </StrictMode>,
)
