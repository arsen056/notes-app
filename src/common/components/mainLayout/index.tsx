import React from 'react';
import styled from 'styled-components';
import { Container } from 'common/components/container';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

export const MainLayout = () => {
  return (
    <main>
      <Container>
        <Grid>
          <div>123</div>
          <div>123</div>
        </Grid>
      </Container>
    </main>
  );
};
