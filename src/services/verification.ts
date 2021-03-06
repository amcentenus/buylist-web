import { toastError } from "./Toast";


function _exists(value: any): boolean {
  if (!value) return false;
  if (Array.isArray(value) && value.length === 0) return false;
  if (typeof value === 'string' && !value.trim()) return false;
  return true;
}

export function existOrError(value: any, msg: string): boolean {
  try {
    if (!_exists(value)) throw msg;
    return true;
  } catch (msg) {
    toastError(msg);
    return false;
  }
}

export function notExistOrError(value: any, msg: string): boolean {
  try {
    if (_exists(value)) throw msg;
    return true;
  } catch (msg) {
    toastError(msg);
    return false;
  }
}

export function equalOrError(valueA: any, valueB: any, msg: string) {
  try {
    if (valueA !== valueB) throw msg;
    return true;
  } catch (msg) {
    toastError(msg);
    return false;
  }
}