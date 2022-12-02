import useTimes from 'hooks/useTimes';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimelineData = ({ ...props }) => {
  // TODO
  // custom hook - useTime
  // 인자로 start, end 값 넣어서 times를 반환해서 그거를 사용하도록
  // const {times, merge} = useTime({start: 8, end:24 })
  // times -> 8,9,10,11,{tiem: 12, parent: 11},13
  // merge(9, 11)
  // split
  // times -> 8,9,9,9,12,13
  // times -> rendering 8,9,9,9,12,13
  const {
    time
  } = props
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(24);
  const timesList = useTimes(start, end);

  useEffect(() => {
    if (time !== null) {
      setStart(time.startTime)
      setEnd(time.endTime)
    }
  }, [time])
  return (
    <>
      {
        useTimes(start, end).map((time, index,arr ) => (
          <Container key={index}>
            <TimeContent>{time}시</TimeContent>
            
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