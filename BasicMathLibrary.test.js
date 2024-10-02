// import { add, subtract, multiply, power, abs, mod, fac, round, ceil, floor } from './BasicMathLibrary.js';
const Dan = require('./BasicMathLibrary');

test('adds 1 + 2 to equal 3', () => {
    expect(Dan.add(1, 2)).toBe(3);
  });

test('adds 1 + 2 to equal 3', () => {
    expect(Dan.add(0, 2)).toBe(2);
  });

test('adds 1 + 2 to equal 3', () => {
    expect(Dan.add(1, -2)).toBe(-1);
  });
// ----------------------------------------------------------------------------

test('subtracts 1 - 2 to equal -1', () => {
    expect(Dan.subtract(1, 2)).toBe(-1);
  });

test('subtracts 3 - 2 to equal 1', () => {
    expect(Dan.subtract(3, 2)).toBe(1);
  });

test('subtracts 0 - 0 to equal 0', () => {
    expect(Dan.subtract(0, 0)).toBe(0);
  });

// ---------------------------------------------------------------------------
test('multiplies 2 * 3 to equal 6', () => {
    expect(Dan.multiply(2, 3)).toBe(6);
  });

test('multiplies -2 * 5 to equal -10', () => {
    expect(Dan.multiply(-2, 5)).toBe(-10);
  });

test('multiplies 2 * 3 to equal 6', () => {
    expect(Dan.multiply(5, 0)).toBe(0);
  });
// ---------------------------------------------------------------------------

test('number 2 power 3 to equal 8', () => {
    expect(Dan.power(2, 3)).toBe(8);
  });

test('number -3 power 4 to equal 81', () => {
    expect(Dan.power(-3, 4)).toBe(81);
  });

test('number -3 power 0 to equal 1', () => {
    expect(Dan.power(-3, 0)).toBe(1);
  });

test('number 3 power -2 to equal ', () => {
    expect(Dan.power(3, -2)).toBe(1 / 9);
  });
// // ---------------------------------------------------------------------------

test('abs -2 to equal 2', () => {
    expect(Dan.abs(-2)).toBe(2);
  });

test('abs 0 to equal 0', () => {
    expect(Dan.abs(0)).toBe(0);
  });

test('abs 1 to equal 1', () => {
    expect(Dan.abs(1)).toBe(1);
  });
// // ---------------------------------------------------------------------------

test('10 mod 3 to equal 1', () => {
    expect(Dan.mod(10, 3)).toBe(1);
  });

test('0 mod 4 to equal 0', () => {
    expect(Dan.mod(0, 4)).toBe(0);
  });

test('9 mod 0 to equal und', () => {
    expect(Dan.mod(9, 0)).toBe(undefined);
  });
// // ---------------------------------------------------------------------------

test('3 fac to equal 6', () => {
    expect(Dan.fac(3)).toBe(6);
  });

test('-3 fac to equal str', () => {
    expect(Dan.fac(-3)).toBe(undefined);
  });

test('0 fac to equal 1', () => {
    expect(Dan.fac(0)).toBe(1);
  });
// ---------------------------------------------------------------------------
test('3.4 round to equal 3', () => {
    expect(Dan.round(3.4)).toBe(3);
  });

test('3.6 round to equal 4', () => {
    expect(Dan.round(3.6)).toBe(4);
  });

test('-4.6 round to equal -4', () => {
    expect(Dan.round(-4.6)).toBe(-4);
  });
// ---------------------------------------------------------------------------
test('3.4 ceil to equal 4', () => {
    expect(Dan.ceil(3.4)).toBe(4);
  });

test('3.6 ceil to equal 4', () => {
    expect(Dan.ceil(3.6)).toBe(4);
  });

test('-4.6 ceil to equal -4', () => {
    expect(Dan.ceil(-4.6)).toBe(-4);
  });
// ---------------------------------------------------------------------------
test('3.4 floor to equal 3', () => {
    expect(Dan.floor(3.4)).toBe(3);
  });

test('3.6 floor to equal 3', () => {
    expect(Dan.floor(3.6)).toBe(3);
  });

test('-4.6 floor to equal -5', () => {
    expect(Dan.floor(-4.6)).toBe(-5);
  });