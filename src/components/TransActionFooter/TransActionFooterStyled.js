import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  
  & > button {
    width: 150px;
  }

  & > button:first-child {
    margin-right: 16px;
  }
`