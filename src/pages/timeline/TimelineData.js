import React, { useState } from 'react';
import styled from 'styled-components';

const TimelineData = () => {
  const timeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  const [timeDataArray, setTimeDataArray] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''])
  const onChange = (e, index) => {
    const {
      target: { value }
    } = e
  }
  return (
    <>
      {
        timeArray.map((time, index) => (
          <Container key={index}>
            <TimeContent>{time}시</TimeContent>
            <Input 
              value={timeDataArray[index]}
              onChange={(e, index) => onChange(e, index)}
            />
            <Button>등록</Button>
          </Container>
        ))
      }
    </>
  )
}

export default TimelineData

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #666;
  border-bottom: 1px solid #ddd;
`
const TimeContent = styled.div`
  width: 30px;
  font-size: 10px;
`
const Input = styled.input`
  flex: 1;
  padding: 5px;
  font-size: 13px;
  border: none;
`
const Button = styled.button`
  width: 30px;
  height: 25px;
  color: #c96d84;
  font-size: 10px;
  background-color: #fce4ea;
`