import styled from 'styled-components'
import { Row } from 'antd'

export const LinkDirectedBankWrapper = styled.span`

`
export const IconStatusLabelText = styled.span`
  font-size: ${props => props.fontSize};     
  margin-left: 4px;
`
export const AreaBoundDirectBank = styled(Row) `
  img:hover {
    cursor: pointer;
  }
`

export const ImgBank = styled.img`
  margin: 0 16px;
`

export const WrapperDirectedBank = styled.div`
  border: ${props => props.active ? `1px solid ${props.color}` : "1px solid #E0E0E0"};
  border-radius: 8px;
  width: 100%;
  padding: 0 10px 3px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`

export const LinkDirectedBankTitle = styled.div`
  color: #979797;
  font-weight: 400;
  margin: 0 16px 5px 0;
  text-align: left; 
`

export const ContentInfoDigitalWallet = styled.div`
  padding: 15px 20px;
`

export const CardNumberWallet = styled.p `
  margin: 0;
  font-weight: bold;
  color: #333333;
  display: flex;
  justify-content: right;
`

export const AccountBalance = styled.p `
  margin: 0;
`