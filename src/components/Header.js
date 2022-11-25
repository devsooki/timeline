import React from 'react';
import styled from 'styled-components';

const Header = () => {
  let contentArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    <Container>
      {
        contentArray.map(content => <Content key={content} />)
      }
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
const Content = styled.div`
  width: 12px;
  height: 12px;
  background-color: #fce4ea;
`