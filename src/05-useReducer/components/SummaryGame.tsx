import {Button} from "@/components/ui/button.tsx";
import type {ScrambleWordsState} from "@/05-useReducer/interfaces/scrambleWord.interfaces.ts";

interface ISummaryGameProps {
  state: ScrambleWordsState,
  onPlayAgain: () => void
}

export const SummaryGame = ({state, onPlayAgain}: ISummaryGameProps) => {
  const {points, errorCounter, skipCounter} = state

  return (
    <div
      className="min-h-screen bg-linear-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <h1
          className="text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Palabras desordenadas
        </h1>
        <p className="text-gray-600">No hay palabras para jugar</p>
        <br/>
        <div>Puntaje: {points}</div>
        <br/>
        <div>Errores: {errorCounter}</div>
        <br/>
        <div>Saltos: {skipCounter}</div>
        <br/>
        <Button onClick={onPlayAgain}>Jugar de nuevo</Button>
      </div>
    </div>
  )
}


