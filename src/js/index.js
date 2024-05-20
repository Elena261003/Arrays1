// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const getRandomNumber = numbers => {
  const random = Math.floor(Math.random() * numbers.length);

  console.log(numbers[random]);
};
getRandomNumber([1, 2, 3, 4, 5]);

const getNumber = number => {
  const suma = number[0] + number[1] + number[2];
  console.log(suma);

  const media = (number[0] + number[1] + number[2]) / 3;
  console.log(media);
};
getNumber([1, 2, 3]);

const getAleatoryNumber = number => {
  const getNumberRandom = Math.floor(Math.random() * 11);
  if (number.includes(getNumberRandom)) {
    console.log(number(3));
  }
};

const nombreDeLaFuncion = (datosDeLaFuncion, otroDato) => {
  console.log(datosDeLaFuncion + otroDato);
};
nombreDeLaFuncion(10, 7);

const randomFunction = (a, b) => {
  a.push(b);
  console.log(a);
};
randomFunction([1, 2, 3], 4);

const a = 2;
const b = 'palabra';
const c = []; // array
const d = () => {
  // Function
};

const nameOfFunction = dato => {};
