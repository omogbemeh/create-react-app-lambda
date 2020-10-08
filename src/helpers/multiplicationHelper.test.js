import { 
    checkIf,
    primeNumbers,
    multiplicationTable
} from './multiplicationHelper';

test('Ensure prime number check function works', () => {
  const result = checkIf(2);
  expect(result).toEqual(true);
});

test('Ensure it is getting correct prime numbers', () => {
  const firstFivePrimeNos = [2,3,5,7,11];
  const result = primeNumbers(5);
  expect(result).toEqual(firstFivePrimeNos);
});

test('Ensure it is returning the correct table', () => {
  const expectedTable = [
    ['', 2, 3, 5],
    [2,4,6,10],
    [3,6,9,15],
    [5,10,15,25]
  ];
  const result = multiplicationTable(3);
  expect(result).toEqual(expectedTable);
});