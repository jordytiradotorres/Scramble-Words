import {useEffect, useState} from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
}

type Colors = typeof colors
type Color = keyof Colors

export const useTrafficLight = () => {
  const [light, setLight] = useState<Color>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return

    const intervalId = setInterval(() => {
      setCountdown(prevState => prevState - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [countdown, light]);

  useEffect(() => {
    if (countdown > 0) return

    setCountdown(5)
    if (light === "red") {
      setLight("green")
      return
    }
    if (light === "yellow") {
      setLight("red")
      return
    }
    if (light === "green") {
      setLight("yellow")
      return
    }
  }, [countdown, light]);

  return {
    countdown,
    // computed
    percentage: (countdown / 5) * 100,
    redLight: light === "red" ? colors.red : "bg-gray-500",
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
  }
}
