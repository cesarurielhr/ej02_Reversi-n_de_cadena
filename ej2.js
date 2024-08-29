function invertirFrase(frase) {
  // Dividir la frase en palabras
  const palabras = frase.split(' ');
  // Invertir el orden de las palabras
  const palabrasInver = palabras.reverse();
  // Unimos las palabras invertidas en una nueva frase
  const fraseInver = palabrasInver.join(' ');
  return fraseInver;
}

const fraseOriginal = 'Si lo puedes imaginar , lo puedes programar';
const fraseInvertida = invertirFrase(fraseOriginal);
console.log(fraseInvertida); 