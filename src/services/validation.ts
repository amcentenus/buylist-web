import { toast, Zoom } from 'react-toastify';

function _exists(value: any): boolean {
  if (!value) return false;
  if (Array.isArray(value) && value.length === 0) return false;
  if (typeof value === 'string' && !value.trim()) return false;
  return true;
}

function existOrError(value: any, msg: string): boolean {
  try {
    if (!_exists(value)) throw msg;
    return true;
  } catch (msg) {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      transition: Zoom
    })
    return false;
  }
}

function notExistOrError(value: any, msg: string): boolean {
  try {
    if (_exists(value)) throw msg;
    return true;
  } catch (msg) {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      transition: Zoom
    })
    return false;
  }
}

function equalOrError(valueA: any, valueB: any): boolean {
  try {
    if (valueA !== valueB) throw MSGesture;
    return true;
  } catch (msg) {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      transition: Zoom
    })
    return false;
  }
}

export default { existOrError, notExistOrError, equalOrError }