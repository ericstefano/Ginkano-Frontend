import hotToast, { ToastOptions } from 'react-hot-toast';
import { Toast, Colors as ToastColors } from '@/components/Toast';

type CreateCustomToastParams = {
  message: string;
  color: ToastColors;
} & ToastOptions;

const createCustomToast = ({
  message,
  color,
  duration = 2500,
  ...options
}: CreateCustomToastParams) => {
  return hotToast.custom(
    (t) => <Toast t={t} message={message} color={color} />,
    { duration, ...options },
  );
};

const createToast = (
  color: ToastColors,
  ariaProps: ToastOptions['ariaProps'],
) => {
  return (message: string, options?: ToastOptions) => {
    createCustomToast({
      message,
      color,
      ariaProps,
      ...options,
    });
  };
};

const success = createToast('success', {
  'aria-live': 'polite',
  role: 'status',
});

const error = createToast('error', {
  'aria-live': 'off',
  role: 'alert',
});

const toast = {
  success,
  error,
};

export default toast;
