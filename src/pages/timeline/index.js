import Header from 'components/Header';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { loadLocalStorage } from 'utils/localStorage';
import TimelineData from './TimelineData';
import TimeModal from './TimeModal';

const TimeLine = () => {
  const [isTime, setIsTime] = useState(true)
  const [time, setTime] = useState(loadLocalStorage('time'));

  useEffect(() => {
    if (time === null) {
      setIsTime(true)
    } else {
      setIsTime(false)
    }
  }, [time])


  const onClickTimeModal = () => {
    setIsTime(!isTime)
  }
  return (
    <Container>
      <Header />
      <TimelineData 
        time={time}
      />
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