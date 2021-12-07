import styled from 'styled-components'

export const DigitalWalletWrapper = styled.div `
`

export const LabelDigitalWallet = styled.div`
  color: #979797;
`

export const AreaInfoDigitalWallet = styled.div`
  display: flex;
  border: ${props => `1px solid ${props.borderColor}`};
  border-radius: 8px;
  justify-content: space-between;
  cursor: pointer;
`

export const ImgLogoDigitalWallet = styled.img`
  margin: 15px 20px;
  object-fit: contain;
`

export const ContentInfoDigitalWallet = styled.div`
  padding: 15px 20px;
`

export const CardNumberWallet = styled.p `
  margin: 0;
  font-weight: bold;
  color: #333333;
`

export const AccountBalance = styled.p `
  margin: 0;
`