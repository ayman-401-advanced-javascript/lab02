'use strict';

const Validator = require('../validator');

//some example for testing
let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = {x:'y'};
let func = () => {};
let validArr = [4,8,12];
let bool = false;


//example to test a complex object problem
const schema = {
  domain: {
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    hair: {type: 'object'},
    favoriteFoods: {type: 'array', valueType: 'string'},
    married: {type: 'boolean'},
    kids: {type: 'number'},
  },
};

const validator = new Validator(schema);

describe('validator module performs basic validation of', () => {
  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });
  
  it('booleans', () => {
    expect(validator.isBoolean(arr)).toBeFalsy();
    expect(validator.isBoolean(obj)).toBeFalsy();
    expect(validator.isBoolean(func)).toBeFalsy();
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('objects', () => {
    expect(validator.isObject(arr)).toBeTruthy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();
  });


  it('arrays', () => {
    expect(validator.isArray(validArr,'number')).toBeTruthy();
    expect(validator.isArray(validArr,'string')).toBeFalsy();
   
  });

  it('numbers', () => {
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });

  it('functions', () => {
    expect(validator.isFunction(arr)).toBeFalsy();
    expect(validator.isFunction(obj)).toBeFalsy();
    expect(validator.isFunction(func)).toBeTruthy();
    expect(validator.isFunction(bool)).toBeFalsy();
  });

  it('is truthy', () =>{
    expect(validator.isTruthy(func)).toBeTruthy();
    expect(validator.isTruthy(bool)).toBeFalsy();
  }

  );


});

