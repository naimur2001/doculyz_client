'use client';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showSuccessAlert = (message: string) => {
  return MySwal.fire({
    icon: 'success',
    title: <span>✅ Success</span>, // ✅ JSX allowed now
    html: <p>{message}</p>,
    confirmButtonText: 'OK',
  });
};

export const showErrorAlert = (message: string) => {
  return MySwal.fire({
    icon: 'error',
    title: <span>❌ Error</span>,
    html: <p>{message}</p>,
    confirmButtonText: 'OK',
  });
};

export const showInfoAlert = (message: string) => {
  return MySwal.fire({
    icon: 'info',
    title: <span>ℹ️ Info</span>,
    html: <p>{message}</p>,
    confirmButtonText: 'OK',
  });
};