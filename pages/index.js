import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
// import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const dice = (min, max) => {
    min = 1;
    max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min); //Максимум и минимум включаются
  };

  const [number, setNumber] = useState(0);

  return (
    <Container maxWidth="sm">
      <Head>
        <title>Fitness dice</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ my: 4 }}>
        <main>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <div>
            <button onClick={() => setNumber(dice)}>+</button>
            Number: {number}
          </div>
        </main>
        <footer>
          <ProTip />
          <Copyright />
        </footer>
      </Box>
    </Container>
  );
}
