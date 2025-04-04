export function play(player1: string, player2: string): number {
  const validInputs = ['rock', 'paper', 'scissors'];

  player1 = player1.trim().toLowerCase();
  player2 = player2.trim().toLowerCase();

  if (!validInputs.includes(player1) || !validInputs.includes(player2)) {
      throw new Error(`Invalid input: player1=${player1}, player2=${player2}`);
  }

  if (player1 === player2) {
      return 0;
  }
  if (
      (player1 === 'rock' && player2 === 'scissors') ||
      (player1 === 'scissors' && player2 === 'paper') ||
      (player1 === 'paper' && player2 === 'rock')
  ) {
      return 1;
  }
  return 2;
}
