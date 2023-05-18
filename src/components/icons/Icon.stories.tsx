import type { Meta, StoryFn } from '@storybook/react';
import { SvgIcon } from '../SvgIcon';
import * as Icons from './';

type ComponentType = typeof SvgIcon;

export default {
  title: 'Components/Icons',
  component: SvgIcon,
} as Meta<ComponentType>;

const Template: StoryFn<ComponentType> = () => (
  <div className=' grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10'>
    {Object.values(Icons).map((Icon) => (
      <div className='flex justify-center' key={`icon-${Icon.name}`}>
        <button className='flex flex-col items-center text-xs transition-transform hover:scale-105'>
          <Icon className='h-5 w-5' />
          <span>{Icon.name}</span>
        </button>
      </div>
    ))}
  </div>
);

export const Default = {
  render: Template,
};
