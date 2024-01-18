import React from 'react';
import { Grid } from '@chakra-ui/react';
import Header from './Header';
import Navigation from './Navigation';
import Project from './Project';
import Footer from './Footer';

const App = () => {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      {/* Header Component */}
      <Header />

      {/* Header Component */}
      <Navigation />

      {/* Project Components */}
      <Project name="TapMap" description="Desc 1" bgColor="green.300" area="main" />
      <Project name="TapMap" description="Desc 1" bgColor="green.300" area="main" />
      <Project name="TapMap" description="Desc 1" bgColor="green.300" area="main" />

      {/* Footer Components */}
      <Footer />
    </Grid>
  );
};

export default App;
