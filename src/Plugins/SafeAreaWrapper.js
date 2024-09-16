import React from 'react';
import styled from 'styled-components';

const SafeAreaWrapper = ({ children }) => {
  return (
    <Container>
      <InnerContainer>
        {children}
      </InnerContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  background-color: #ffff; /* lightGray equivalent */
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  height: 100vh; /* full height */
`;

const InnerContainer = styled.div`
  width: 98%;
  display: flex;
`;

export default SafeAreaWrapper;
