import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '../src/Link';

export default function About() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        PLC values read by a Raspberry using Python and Next.js+React.
        </Typography>
      <Link href="/" color="secondary">Go to the main page</Link>
    </div>
  );
}