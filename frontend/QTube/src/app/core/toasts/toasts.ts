import Swal from 'sweetalert2';

export const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timerProgressBar: true,
  timer: 2500,
  customClass: {
    popup: '!bg-qt-gray-13 !shadow-none',
    title: '!text-sm !text-slate-700',
  },
  showClass: {
    popup: 'animate-fade-down',
  },
  hideClass: {
    popup: 'animate-fade animate-reverse',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
