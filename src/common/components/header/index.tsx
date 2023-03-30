import React from 'react';
import { Container } from 'common/components/container';

import { FaMoon } from 'react-icons/fa';
import { useToggleTheme } from 'common/hooks/toggleTheme';
import { HeaderElement, ModeSwitcher, Title, Wrapper } from 'common/components/header/styles';

export const Header = () => {
  const toggleTheme = useToggleTheme();

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Todolist</Title>
          <ModeSwitcher>
            <FaMoon size={'2em'} onClick={toggleTheme} />
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};
