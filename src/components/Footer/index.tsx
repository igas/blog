import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/igas/" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://twitter.com/igasgeek/" rel="noreferrer noopener" target="_blank">
          Twitter
        </Styled.Link>
        <Styled.Link href="https://linkedin.com/in/ikapkov/" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
        <Styled.Link
          href="https://stackoverflow.com/users/861648/?tab=profile"
          rel="noreferrer noopener"
          target="_blank"
        >
          Stack Overflow
        </Styled.Link>
        <Styled.Link href="https://goodreads.com/igas" rel="noreferrer noopener" target="_blank">
          Goodreads
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
