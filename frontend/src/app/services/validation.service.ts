import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

}

/**
 * Validates object properties types against default class members types (non-recursively)
 *
 * Example implementation
 *  export class MyClass extends ValidObject {
 *    myProperty = '';
 *
 *    constructor(object?, model?) {
 *      super(object, model);
 *
 *      if (object) { this.overload(object, model); }
 *    }
 *  }
*/
export class ValidObject {

  constructor(object?, model?) {
    if (object && model) { this.typeCheck(object, model); }
  }

  private typeCheck(object?, model?) {
    for (const property in object) {
      if ( (typeof model[property] !== typeof object[property]) && (typeof object[property] !== 'function') ) {
        throw Error('Object: ' + JSON.stringify(object) + ' is not of type: ' + this.constructor.name);
      }
    }
  }

  protected overload(object, model) {
    for (const property in object) {
      if (typeof object[property] !== 'function') {
        if (typeof object[property] === 'object') {
          this[property] = Object.assign(this[property], object[property]);
        } else {
          this[property] = object[property];
        }
      }
    }
  }

}
