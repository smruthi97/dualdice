import { useState } from "react";

export function useTogglePlayer() {
  const [currentPlayer, setCurrentPlayer] = useState(1);

  // Toggle between Player 1 and Player 2
  const togglePlayer = () => {
    setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
  };

  // Reset to Player 1 (for new game)
  const resetPlayer = () => {
    setCurrentPlayer(1);
  };

  return { currentPlayer, togglePlayer, resetPlayer };
}
