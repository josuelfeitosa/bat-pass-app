export default function generatePass(passwordLength: number = 8): string {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";

  // Combina todos os caracteres possíveis
  const allCharacters = lowerCaseLetters + upperCaseLetters + numbers + symbols;

  let password = "";
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  let hasSymbol = false;

  // Garante que a senha contenha pelo menos um caractere de cada tipo
  while (!hasLowerCase || !hasUpperCase || !hasNumber || !hasSymbol) {
    password = "";
    for (let index = 0; index < passwordLength; index++) {
      const randomChar = allCharacters.charAt(
        Math.floor(Math.random() * allCharacters.length)
      );
      password += randomChar;

      // Verifica o tipo do caractere adicionado
      if (!hasLowerCase && lowerCaseLetters.includes(randomChar))
        hasLowerCase = true;
      else if (!hasUpperCase && upperCaseLetters.includes(randomChar))
        hasUpperCase = true;
      else if (!hasNumber && numbers.includes(randomChar)) hasNumber = true;
      else if (!hasSymbol && symbols.includes(randomChar)) hasSymbol = true;
    }
  }

  return password;
}
