import { existOrError, notExistOrError, equalOrError } from './verification';

class Validate {
  public valid: boolean = true;

  public exist(value: any, msg: string): boolean {
    if (existOrError(value, msg)) {
      return true;
    } else {
      this.valid = false;
      return false;
    }
  }

  public notExist(value: any, msg: string): boolean {
    if (notExistOrError(value, msg)) {
      return true;
    } else {
      this.valid = false;
      return false;
    }
  }

  public equal(valueA: any, valueB: any, msg: string): boolean {
    if (equalOrError(valueA, valueB, msg)) {
      return true;
    } else {
      this.valid = false;
      return false;
    }
  }
}

export default Validate;