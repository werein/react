import React from 'react';

type Props = {
  children: any
}

export const Layout = (props: Props) =>
  <div>{props.children}</div>;

export default Layout;
