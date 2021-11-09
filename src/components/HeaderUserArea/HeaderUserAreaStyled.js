import styled from 'styled-components'

export const HeaderUserAreaWrapper = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  margin: 0 16px;

  &:hover {
    color: #fff !important;
  }

  span {
    margin: 0 8px;
    font-size: 1.2rem;
  }

  .user-menu-item {
    .ant-dropdown-menu-title-content {
      display: flex;
      align-items: center;
    }

    &:hover {
      .user-menu-label {
        color: ${props => props.color};
      }

      svg path {
        fill: ${props => props.color};
      }
    }
  }
`