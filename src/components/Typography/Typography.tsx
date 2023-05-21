import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type TypographyProps<T extends ElementType = 'h1'> = {
  as?: T;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = 'h1'>({
  as,
  children,
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'h1';
  return <Component {...props}>{children}</Component>;
};
