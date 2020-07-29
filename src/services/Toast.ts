import { toast, Zoom } from 'react-toastify';

function toastError(msg: string): void {
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    transition: Zoom
  })
}

export { toastError }