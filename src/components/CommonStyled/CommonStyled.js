import styled from 'styled-components'

export const AuthShadowBox = styled.div`
  background: #FFFFFF;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${props => props.width ? props.width : 'auto'};
  padding: 24px;
`