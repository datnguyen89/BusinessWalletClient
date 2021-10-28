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

  .user-menu-item:hover {
    .user-menu-label {
      color: #4084E1;
    }

    .user-menu-icon {
      filter: invert(19%) sepia(81%) saturate(3551%) hue-rotate(194deg) brightness(89%) contrast(98%);
    }
  }
`