// Esta función mezcla el arreglo para que siempre sea aleatorio
export const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
export const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};
