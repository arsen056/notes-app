import React from 'react';
import { Container } from 'common/components/container';
import { Categories } from 'features/categories';
import { Tasks } from 'features/tasks';

import { Grid } from './style';

export const MainLayout = () => {
  return (
    <main>
      <Container>
        <Grid>
          <Categories/>
          <Tasks/>
        </Grid>
      </Container>
    </main>
  );
};
