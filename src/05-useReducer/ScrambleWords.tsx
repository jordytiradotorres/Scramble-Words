import React, {useEffect, useReducer} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import confetti from "canvas-confetti"
import {getInitialState, scrambleWordReducer} from "@/05-useReducer/reducer/scrambleWordReducer.ts";
import {Footer} from "@/05-useReducer/components/Footer.tsx";
import {SummaryGame} from "@/05-useReducer/components/SummaryGame.tsx";
import {Header} from "@/05-useReducer/components/Header.tsx";
import {ScrambledWordDisplay} from "@/05-useReducer/components/ScrambledWordDisplay.tsx";
import {GuessInput} from "@/05-useReducer/components/GuessInput.tsx";
import {Stats} from "@/05-useReducer/components/Stats.tsx";
import {ActionButtons} from "@/05-useReducer/components/ActionButtons.tsx";

export const ScrambleWords = () => {
  const [state, dispatch] = useReducer(scrambleWordReducer, getInitialState())
  const {points, words} = state

  useEffect(() => {
    if (points === 0) return
    confetti({
      particleCount: 100,
      spread: 120,
      origin: {y: 0.6}
    });
  }, [points])

  const handleGuessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({type: "CHECK_ANSWER"})
  };
  const handleSkip = () => dispatch({type: "SKIP_WORD"})
  const handlePlayAgain = () => dispatch({type: "START_NEW_GAME", payload: getInitialState()})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: "SET_GUESS", payload: e.target.value})
  }

  //! Si ya no hay palabras para jugar, se muestra el mensaje de fin de juego
  if (words.length === 0) {
    return (
      <SummaryGame state={state} onPlayAgain={handlePlayAgain}/>
    );
  }

  return (
    <div
      className="min-h-screen bg-linear-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <Header/>
        {/* Main Game Card */}
        <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
          <CardContent className="p-8">
            <ScrambledWordDisplay state={state}/>
            <GuessInput state={state} onGuessSubmit={handleGuessSubmit} onChange={handleChange}/>
            <Stats state={state}/>
            <ActionButtons state={state} onSkip={handleSkip} onPlayAgain={handlePlayAgain}/>
          </CardContent>
        </Card>
        <Footer words={words}/>
      </div>
    </div>
  );
};