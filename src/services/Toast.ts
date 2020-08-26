import { toast, Zoom, Slide } from 'react-toastify';

function toastError(msg: string): void {
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    transition: Zoom
  })
}

function toastSuccess(msg: string): void {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    transition: Slide
  })
}

export { toastError, toastSuccess }