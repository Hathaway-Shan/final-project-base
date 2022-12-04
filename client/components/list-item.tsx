import { type FC, type ReactNode, type ReactElement } from 'react';

export type Props = {
  children: ReactNode;
};

export type Component = FC<Props>;

export default (className: string): FC<Props> => {
  const component = (props: Props): ReactElement => {
    return <div className={className}>{props.children}</div>;
  };
  component.displayName = 'ListItem';
  return component;
};
