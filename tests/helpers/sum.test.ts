import { describe, expect, test } from 'vitest';
import {sum, addArray} from '../../src/helpers/sum';

describe('add function', () => {

  test('adds 1 + 2 to equal 3', () => {
    //expect(sum(1, 2)).toBe(3)

    //preparacion
    const a = 1;
    const b = 2;

    //estimulo
    const result = sum(a, b);

    //El comportamiento esperado
    expect(result).toBe(0+3);

    //if (sum(1,2)!==3){
    //throw new Error('La suma no es correcta');
    //}
  });
});

describe('addArray function', () => {

  test('should return 0 if the array is empty', () => {

    //preparacion
    const numberArray = [];

    //estimulo
    const result = addArray(numberArray);

    //El comportamiento esperado
    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {

    //preparacion
    const numberArray = [1,2,3,4,5];

    //estimulo
    const result = addArray(numberArray);

    //El comportamiento esperado
    expect(result).toBe(15);
  });
});



