import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {TasksApp} from "@/05-useReducer/TaskApp.tsx";
// import {FocusScreen} from "./04-useRef/FocusScreen.tsx";
// import {PokemonPage} from "./03-examples/PokemonPage.tsx";
// import {TrafficLightWithEffect} from "./02-useEffect/TrafficLightWithEffect.tsx";
// import {HooksApp} from "./HooksApp.tsx";
// import {TrafficLight} from "./01-useState/TrafficLight.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<HooksApp/>*/}
    {/*<TrafficLight/>*/}
    {/*<TrafficLightWithEffect/>*/}
    {/*<PokemonPage/>*/}
    {/*<FocusScreen/>*/}
    <TasksApp/>
  </StrictMode>,
)
