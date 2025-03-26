// 1 - Bego necesita un generador de contraseñas. Debe crear 3 contraseñas únicas usando letras mayúsculas, minúsculas, números y símbolos. Cada contraseña debe tener 8 caracteres, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*" Ejemplo salida: ['aB9$Rty1', 'Cz7%Qw2$', 'Xy8&Re9P']

const passwordGenerator = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const valueRandom = characters.charAt(randomIndex);
    password = `${password}${valueRandom}`;
  }

  return password;
};

const generateThreePassword = () => {
  const resultPasswords = [];
  for (let i = 0; i < 3; i++) {
    resultPasswords.push(passwordGenerator());
  }

  console.log(resultPasswords);
};
generateThreePassword([]);

// 2 - Macarena quiere hacer un filtro de palabras. Tiene un array con palabras mezcladas y quiere devolver un nuevo array solo con las que empiezan con vocal. Ejemplo entrada: ['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga'] Ejemplo salida: ['Agua', 'Elefante', 'Oruga']

const wordFilter = words => {
  const vowels = 'AEIOU';
  const newWords = [];

  for (const word of words) {
    if (vowels.includes(word.charAt(0).toUpperCase())) {
      //dentro de las vocales esta la primera posición de la palabra
      newWords.push(word);
    }
  }
  console.log(newWords);
};
wordFilter(['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']);

// 3 - Bego está calculando la media aritmética de un array de números. Debe mostrar el promedio y el total de elementos en el array. Ejemplo entrada: [5, 10, 15, 20] Ejemplo salida: Promedio: 12.5 - Total de elementos: 4

const averageScores = () => {
  const scores = [5, 10, 15, 20];
  let average = 0;
  let cuantityScores = scores.length;

  for (const score of scores) {
    average += score; // siempre es + y = no al revés
  }
  const numbers = average / cuantityScores;
  console.log(`La media es ${numbers}. Total de elementos: ${cuantityScores} `);
};
averageScores();

// 4 - Camila quiere invertir un array sin usar el método .reverse(). El array debe mostrarse al revés y ser un nuevo array diferente al original Ejemplo entrada: [1, 2, 3, 4] Ejemplo salida: [4, 3, 2, 1]

// 5 - Bego está organizando números. Tiene un array de números positivos y negativos y quiere separarlos en dos arrays: uno con positivos y otro con negativos. Ejemplo entrada: [3, -2, -7, 4, 0, -1, 5] Ejemplo salida: Positivos: [3, 4, 0, 5] - Negativos: [-2, -7, -1]

const classifyNumbers = numbers => {
  let negativeNumbers = [];
  let positiveNumbers = [];

  for (const number of numbers) {
    if (number < 0) {
      negativeNumbers.push(number);
    }
    if (number >= 0) {
      positiveNumbers.push(number);
    }
  }
  console.log(`Positivos: ${positiveNumbers} - Negativos: ${negativeNumbers}`);
};
classifyNumbers([3, -2, -7, 4, 0, -1, 5]);

// 6 - Macarena necesita una función que genere un array con números del 1 al 100 que sean divisibles por 5 pero no por 3. Ejemplo salida: [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100]

const divisibleNumbers = () => {
  let generatedNumbers = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 !== 0) {
      generatedNumbers.push(i);
    }
  }
  console.log(generatedNumbers);
};
divisibleNumbers();

// 7 - Abby quiere transformar un array de strings en un único string separado por comas, pero ignorando las palabras que empiezan con vocal Ejemplo entrada: ['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga'] Ejemplo salida: 'Pan, Mesa'
