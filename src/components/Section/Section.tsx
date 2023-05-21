import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { Typography } from '../Typography';

type RootProps = ComponentPropsWithoutRef<'section'>;
const SectionRoot = ({ children, className, ...props }: RootProps) => {
  return (
    <section
      className={clsx(
        'mx-auto p-6 lg:px-12 max-w-6xl min-h-[calc(100vh-3.5rem)] flex flex-col',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

type TitleProps = ComponentPropsWithoutRef<'h1'>;
const SectionTitle = ({ className, children, ...props }: TitleProps) => {
  return (
    <Typography
      as='h1'
      className={clsx('text-4xl <lg:text-3xl font-semibold mb-3', className)}
      {...props}
    >
      {children}
    </Typography>
  );
};

type SubtitleProps = ComponentPropsWithoutRef<'h2'>;
const SectionSubtitle = ({ className, children, ...props }: SubtitleProps) => {
  return (
    <Typography
      as='h2'
      className={clsx('text-3xl <lg:text-2xl font-semibold', className)}
      {...props}
    >
      {children}
    </Typography>
  );
};

type ContentProps = { grow?: boolean } & ComponentPropsWithoutRef<'div'>;
const SectionContent = ({
  className,
  grow,
  children,
  ...props
}: ContentProps) => {
  return (
    <div
      className={clsx('flex gap-6 flex-wrap <lg:justify-center', {
        'flex-1': grow,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

type DividerProps = ComponentPropsWithoutRef<'hr'>;
const SectionDivider = ({ className, ...props }: DividerProps) => {
  return (
    <hr className={clsx('border-1 border-gray-100', className)} {...props} />
  );
};
export const Section = {
  Root: SectionRoot,
  Title: SectionTitle,
  Subtitle: SectionSubtitle,
  Content: SectionContent,
  Divider: SectionDivider,
};
