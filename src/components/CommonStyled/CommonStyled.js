import styled from 'styled-components'

export const AuthShadowBox = styled.div`
  background: #FFFFFF;
  box-shadow: 0 0 15px #66A8F5;
  border-radius: 16px;
  width: ${props => props.width ? props.width : 'auto'};
  padding: 24px;
`