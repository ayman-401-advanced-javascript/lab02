  
'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  isString(input) {
    return typeof input === 'string';
  }

  isObject(input) { 
    return typeof input === 'object';
  }

  isArray(input, valueType) {
    let result = true;
    if(Array.isArray(input)){
      for(var value of input){
        if(typeof(value) === valueType){
          result = true; 
        }else{
          result = false;
          break;
        }   
      };
    }else{
      result = false;
    }
    return result;
  }

  isBoolean(input) {
    return typeof input === 'boolean';
  }

  isNumber(input) {
    return typeof input === 'number';

  }

  isFunction(input) {
    return typeof input === 'function';

  }

  isTruthy(input) {
    if( input ) return true;
    else return false;  }

  

}

module.exports = Validator;