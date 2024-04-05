import { Poppins } from 'next/font/google';
import React from 'react';

import { NavbarComp } from '../components/Navbar';

import { useStyles } from './styles';


const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const { root, max } = useStyles;
  return (
    <html lang="en" className={poppins.className}>
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
