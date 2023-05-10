import hotToast, { ToastOptions } from 'react-hot-toast';
import { Toast } from '@/components/Toast';

const success = (
  message: string,
  options: ToastOptions = { duration: 2500 },
) => {
  return hotToast.custom(
    (t) => <Toast t={t} message={message} color='success' />,
    { ariaProps: { 'aria-live': 'polite', role: 'status' }, ...options },
  );
};

export const toast = {
  success,
};
