export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number
}

export type ScrambleWordsAction =
  | { type: "SET_GUESS", payload: string }
  | { type: "CHECK_ANSWER" }
  | { type: "SKIP_WORD" }
  | { type: "START_NEW_GAME", payload: ScrambleWordsState }
