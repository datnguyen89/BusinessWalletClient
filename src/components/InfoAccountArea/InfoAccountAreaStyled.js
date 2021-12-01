import styled from 'styled-components'
import { Dropdown } from 'antd'

export const InfoAccountWrapper = styled.div`
  .slick-arrow.slick-prev {
    &:before {
      color: #ccc;
    }
  }
  .dropdown-style-info-acount-class {
    width: 500px !important;
  }
  .slick-arrow.slick-next {
    &:before {
      color: #ccc;
    }
  }
  .ant-dropdown {
    display: flex;
    justify-content: end;
  }
`

export const InfoAccountTitle = styled.p `
  color: #979797;
  font-size: 1.6rem;
`

export const InfoAccountContent = styled.h4 `
  color: #333333;
  font-size: 1.8rem;
`

export const InfoAccountPhone = styled.p `
  color: #333333;
  font-size: 1.4rem;
`

export const InfoAccountMoney = styled.h3 `
  color: #333333;
  font-size: 3.6rem;
`

export const DropdownCustom = styled(Dropdown) `
  display: flex;
  justify-content: right;
  span {
    margin: 5px 10px;
  }
  .dropdown-style-info-acount-class {
    min-width: 500px !important;
  }
`