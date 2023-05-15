import { Eye } from '../icons';
import { Button } from './Button';

const story = { component: Button };
export default story;

export const Default = {
  args: {
    children: 'Button',
  },
};

export const error = {
  args: {
    ...Default.args,
    variant: 'error',
  },
};

export const success = {
  args: {
    ...Default.args,
    variant: 'success',
  },
};

export const rightIcon = {
  args: {
    ...Default.args,
    rightIcon: <Eye className='h-6 w-6' />,
  },
};

export const leftIcon = {
  args: {
    ...Default.args,
    leftIcon: <Eye className='h-6 w-6' />,
  },
};
