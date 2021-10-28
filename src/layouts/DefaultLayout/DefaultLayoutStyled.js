import styled from 'styled-components'

export const DefaultLayoutWrapper = styled.section`
  position: relative;

  a:hover {
    color: ${props => props.fontColor};
  }
`