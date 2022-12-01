import React, { useState } from 'react';
import styled from 'styled-components';

const TimeModal = ({ ...props }) => {
  const {
    onClickTimeModal
  } = props

  const [startTime, setStartTime] = useState(1)
  const [endTime, setEndTime] = useState(24)

  const onChange = (e, type) => {
    const {
      target: { value }
    } = e
    let numberValue = value.replace(/[^0-9]/g, '')

    if (numberValue > 24) {
      numberValue = numberValue % 24
    }

    if (type === 'start') {
      setStartTime(numberValue)
    } else if (type === 'end') {
      setEndTime(numberValue)
    }
  }

  const onClickSaveTime = () => {
    localStorage.setItem(
      'time',
      JSON.stringify({
        startTime: startTime, 
        endTime: endTime
      })
    )

    onClickTimeModal()
  }

  return (
    <Container>
      <ModalContainer>
        <Header>
          <h1>
            오늘의 계획 시간을 알려주세요!
          </h1>
          <button
            onClick={onClickTimeModal}
          >
            X
          </button>
        </Header>
        <Content>
          <InputContent>
            <b>⏰ 시작 시간</b>
            <Input 
              value={startTime}
              onChange={e => onChange(e, 'start')}
              maxLength={2}
            />
          </InputContent>
          <InputContent>
            <b>⏰ 마무리 시간</b>
            <Input 
              value={endTime}
              onChange={e => onChange(e, 'end')}
              maxLength={2}
            />
          </InputContent>
          <Button onClick={onClickSaveTime}>
            등록하기
          </Button>
        </Content>
      </ModalContainer>
    </Container>
  )
}

export default TimeModal

const Container = styled.div`
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
`
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #eee;
  h1 {
    font-size: 16px;
  }
  button {
    font-size: 13px;
    font-weight: bold;
    background: none;
  }
`
const Content = styled.div`
  padding: 20px;
`
const InputContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  b {
    width: 100px;
    font-size: 14px;
  }
`
const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ddd;
`
const Button = styled.button`
  width: 100%;
  height: 30px;
  color: #c96d84;
  background-color: #fce4ea;
`