import Header from 'components/Header';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TimelineData from './TimelineData';
import TimeModal from './TimeModal';

const TimeLine = () => {
  const [isTime, setIsTime] = useState(true)

  const onClickTimeModal = () => {
    setIsTime(!isTime)
  }
  return (
    <Container>
      <Header />
      <TimelineData />
      {
        isTime && <TimeModal onClickTimeModal={onClickTimeModal} />
      }
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