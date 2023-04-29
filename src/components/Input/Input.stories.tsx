import { Eye } from '../icons';
import { Input } from './Input';

const story = { component: Input };
export default story;

export const Default = {
  args: {
    label: 'input label',
    description: 'input description',
    required: false,
    error: false,
  },
};

export const rightAdornment = {
  args: {
    ...Default.args,
    rightAdornment: (
      <button
        className='h-8 w-8 flex self-center items-center p-1 justify-center hover:bg-gray-100 rounded-12 active:bg-gray-200 group transition mr-1'
        type='button'
      >
        <Eye className='h-6 w-6 text-gray-600 group-hover:(text-gray-800)' />
      </button>
    ),
  },
};

export const leftAdornment = {
  args: {
    ...Default.args,
    leftAdornment: (
      <button
        className='h-8 w-8 flex self-center items-center p-1 justify-center hover:bg-gray-100 rounded-12 active:bg-gray-200 group transition ml-1'
        type='button'
      >
        <Eye className='h-6 w-6 text-gray-600 group-hover:(text-gray-800)' />
      </button>
    ),
  },
};
