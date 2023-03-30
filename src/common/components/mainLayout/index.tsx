import React from 'react';
import styled from 'styled-components';
import { Container } from 'common/components/container';
import { Categories } from 'features/categories';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

export const MainLayout = () => {
  return (
    <main>
      <Container>
        <Grid>
          <Categories/>
        </Grid>
      </Container>
    </main>
  );
};
