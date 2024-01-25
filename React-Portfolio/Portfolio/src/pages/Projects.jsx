import React from "react";
import { Grid, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export default function Projects() {
  return (
    <section 
    id="Merch" 
    style={{ 
      marginTop: '8rem', 
      marginBottom: '12rem',
      background: 'linear-gradient(270deg, #00364Aff, #004690ff, #2A1F49ff)' }}>
      <div className="container px-5 py-10 mx-auto">
        <Grid container spacing={4}>
          {[0, 1].map((row) => (
            <Grid container item key={row} justifyContent="center" spacing={4}>
              {[0, 1, 2].map((col) => (
                <Grid item key={col}>
                  <Card variant="outlined" style={{ width: '300px', height: '200px' }}>
                    <CardContent>{/* Your card content goes here */}Placeholder</CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}
