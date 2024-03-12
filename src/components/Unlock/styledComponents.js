// Style your elements here
import styled from 'styled-components'

export const UnlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#161617, #0b0c1e, #3c2940);
  justify-content: center;
  align-items: center;
`

export const Message = styled.p`
  color:#e2e8f0;
  font-size: 20px;
  font-family: Roboto;
`
export const Button = styled.button`
  width: content-width;
  border-radius: 5px;
  border-width: 0px;
  padding: 10px 20px;
  color: white;
  margin-top: 100px;
  background-color: #06b6d4;
  font-weight: 600;
  cursor: pointer;
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
`
