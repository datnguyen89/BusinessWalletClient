import styled from 'styled-components'

export const MainSideBarWrapper = styled.aside`
  position: fixed;
  height: 100vh;
  width: ${props => props.width}px;
  display: ${props => props.display};
  border: 1px solid #ccc;
  overflow-y: auto;
  padding-bottom: 84px;
  padding-top: 56px;
`