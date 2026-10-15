import type {ScrambleWordsAction, ScrambleWordsState} from "@/05-useReducer/interfaces/scrambleWord.interfaces.ts";
import {GAME_WORDS} from "@/05-useReducer/mocks/game_words.ts";
import {shuffleArray, scrambleWord} from "@/05-useReducer/utils/scramble.ts";

export const getInitialState = (): ScrambleWordsState => {
  const shuffledWords = shuffleArray([...GAME_WORDS])

  return {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    words: shuffledWords,
    totalWords: shuffledWords.length
  }
}

export const scrambleWordReducer = (state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState => {
  switch (action.type) {
    case "SET_GUESS": {
      return {
        ...state,
        guess: action.payload.trim().toUpperCase()
      }
    }
    case "CHECK_ANSWER": {
      if (state.guess === state.currentWord) {
        const newWords = state.words.slice(1)

        return {
          ...state,
          points: state.points + 1,
          guess: "",
          words: newWords,
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0])
        }
      }

      return {
        ...state,
        errorCounter: state.errorCounter + 1,
        guess: "",
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors
      }
    }
    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips) return state
      const updateWords = state.words.slice(1)

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: updateWords,
        currentWord: updateWords[0],
        scrambledWord: scrambleWord(updateWords[0]),
        guess: ""
      }
    }
    case "START_NEW_GAME":
      return action.payload

    default:
      return state
  }
}