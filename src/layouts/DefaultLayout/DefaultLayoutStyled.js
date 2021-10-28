import styled from 'styled-components'

export const DefaultLayoutWrapper = styled.section`
  position: relative;
  background: #F8F8F8;

  a:hover {
    color: ${props => props.fontColor};
  }
`