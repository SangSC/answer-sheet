export function applyAndLog(func, ...args) {
  const result = func(...args);
  console.log(result);
  return result;
}

export function reverseString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  return result;
}

export function filterNumbersGreaterThanFive(numbers) {
  if (!Array.isArray(numbers)) {
    console.error("Error: input is not an array");
    return [];
  }

  return numbers.filter((number) => number > 5);
}

export function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
