import Header from 'components/Header';
import React from 'react';
import styled from 'styled-components';
import TimelineData from './TimelineData';

const TimeLine = () => {
  return (
    <Container>
      <Header />
      <TimelineData />
    </Container>
  )
}

export default TimeLine

const Container = styled.div`
  margin: 30px auto;
  width: 400px;
  //height: calc(100vh - 60px);
  background-color: rgba(255, 255, 255, 0.7);
`