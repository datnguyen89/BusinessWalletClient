import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MainHeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(270deg, #6634E0 -8.83%, #0465B0 74.3%);
  z-index: 1;
`
export const HeaderLogoArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;

  span {
    margin-left: 16px;
    color: #fff;
    font-weight: 700;
    font-size: 1.8rem;
  }
`
export const MainHeaderRight = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
export const MainHeaderRightMobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    margin-right: 16px;
  }
`
export const HeaderTransactionArea = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 12px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    @media only screen and (max-width: 992px) {
      display: none;
    }
  }
`
export const HeaderTransactionItem = styled.div`
  margin: 0 16px;
  height: 85%;
  display: flex;
  align-items: center;

  .header-payment-area {
    width: 35%;
  }

  .header-transfer-area {
    width: 70%;
  }

  &.selected {
    span {
      color: #FDCF17 !important;
    }

    svg path {
      fill: #FDCF17 !important;
    }
  }

  @media only screen and (max-width: 1600px) {
    .header-payment-area {
      width: 45%;
    }

    .header-transfer-area {
      width: 75%;
    }
  }
  @media only screen and (max-width: 1200px) {
    span {
      display: none;
    }

    .header-payment-area {
      width: 60%;
    }

    .header-transfer-area {
      width: 90%;
    }
  }
  @media only screen and (max-width: 992px) {
    .header-payment-area {
      width: 100%;
    }

    .header-transfer-area {
      width: 100%;
    }
  }
`
export const CustomLink = styled(NavLink)`
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`
export const HeaderMenuText = styled.div`
  height: 100%;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const HeaderNotifyArea = styled.div`
  margin: 0 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const HeaderDropdownWrapper = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`
export const HeaderDropdownIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HeaderDropdownItemText = styled.div`
  color: #333;
  margin-left: 8px;
  @media only screen and (max-width: 992px) {
    font-size: 12px;      
  }
`
export const HeaderDropdownItem = styled.div`
  width: calc(100% / 4);
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  &:hover {
    ${HeaderDropdownItemText} {
      color: ${props => props.color};
    }
  }
`


