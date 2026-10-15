import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import type {ChangeEvent, FormEvent} from "react";
import type {ScrambleWordsState} from "@/05-useReducer/interfaces/scrambleWord.interfaces.ts";

interface IGuessInputProps {
  state: ScrambleWordsState,
  onGuessSubmit: (e: FormEvent) => void,
  onChange: (e: ChangeEvent<HTMLInputElement, Element>) => void;
}

export const GuessInput = ({state, onGuessSubmit, onChange}: IGuessInputProps) => {
  const {guess, scrambledWord, isGameOver} = state
  
  return (
    <form onSubmit={onGuessSubmit} className="mb-6">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="guess"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Adivina la palabra
          </label>
          <Input
            id="guess"
            type="text"
            value={guess}
            onChange={onChange}
            placeholder="Ingresa tu palabra..."
            className="text-center text-lg font-semibold h-12 border-2 border-indigo-200 transition-colors"
            maxLength={scrambledWord.length}
            disabled={isGameOver}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
          disabled={!guess.trim() || isGameOver}
        >
          Enviar Adivinanza
        </Button>
      </div>
    </form>
  )
}
