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
