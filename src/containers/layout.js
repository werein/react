import React from 'react';

type Props = {
  children: any
}

const Layout = (props: Props) =>
  <div>{props.children}</div>;

export default Layout;
