import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Grid } from "@mui/material";
import ComplexGrid from "../components/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const dice = (min, max) => {
    min = 1;
    max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min); //Максимум и минимум включаются
  };

  const [number, setNumber] = useState(0);

  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="12">
      <Box>
        {/* <div>
          <div>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to !
            </Typography>
            <p>Roll the dice and generate exercises for your workout!</p>
          </div>
          <div>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "#a5d6a7",
                margin: "20px 0",
              }}
            >
              Exercise
            </Box>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "#a5d6a7",
              }}
            >
              Time
            </Box>
            <button onClick={() => setNumber(dice)}>+</button>
            Number: {number}
          </div>
        </div> */}
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1 }}
          direction="row"
        >
          <Grid item xs={4} backgroundColor="green">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h2" component="h1" gutterBottom>
                  Welcome
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} backgroundColor="red"></Grid>
          <Grid item xs={3} backgroundColor="green"></Grid>
          <Grid item xs={4} backgroundColor="blue">
            <Typography variant="body2" color="text.secondary">
              Text
            </Typography>
          </Grid>
          <Grid item xs={4} backgroundColor="green">
            <ComplexGrid />
          </Grid>
          <Grid item xs={3} backgroundColor="green">
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              spacing={2}
            >
              <Grid item sx={{ width: 128, height: 128 }} backgroundColor="red">
                Time
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4} backgroundColor="red"></Grid>
          <Grid item xs={4} backgroundColor="green"></Grid>
          <Grid item xs={3} backgroundColor="blue">
            <button onClick={() => setNumber(dice)}>+</button>
            Number: {number}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
