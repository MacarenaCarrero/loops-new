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
