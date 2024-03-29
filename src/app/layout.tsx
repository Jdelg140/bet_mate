import React from 'react';

import { useStyles } from './styles';
import { NavbarComp } from '../components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const { root, max } = useStyles;
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Experience More!" />
        <meta name="viewport" content="width=375px, initial-scale=1" />
        <title>Bet Mate</title>
        <link rel="icon" type="image/x-icon" sizes="16x16" href="" />
        <link rel="apple-touch-icon" sizes="180x180" href="" />
      </head>
      <body style={root}>
        <NavbarComp />
        <div style={max}>{children}</div>
      </body>
    </html>
  );
}
