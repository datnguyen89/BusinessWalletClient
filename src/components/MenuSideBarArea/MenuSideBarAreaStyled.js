import styled from 'styled-components'

export const MenuSideBarAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`
export const MenuSidebarItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 12px 12px 0 12px;

  &:hover, &.active {
    background: #ffffff;
    color: ${props => props.color};

    svg path {
      fill: ${props => props.color} !important;
    }
  }

  .menu-sidebar-label {
    margin-left: 12px;
    padding-top: 2px;
  }
`