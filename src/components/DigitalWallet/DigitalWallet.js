import React, { useState } from 'react'
import {
  AccountBalance,
  AreaInfoDigitalWallet, CardNumberWallet,
  ContentInfoDigitalWallet,
  DigitalWalletWrapper, ImgLogoDigitalWallet,
  LabelDigitalWallet,
} from './DigitalWalletStyled'

const DigitalWallet = props => {

  return (
    <DigitalWalletWrapper>
      <LabelDigitalWallet>Ví điện tử</LabelDigitalWallet>
       <AreaInfoDigitalWallet>
         <ImgLogoDigitalWallet src={require('../../media/images/logo-mobipay.png')} alt={'logo-mobipay'} />
         <ContentInfoDigitalWallet>
           <CardNumberWallet>09123456789</CardNumberWallet>
           <AccountBalance>800.000.000<span>đ</span></AccountBalance>
         </ContentInfoDigitalWallet>
       </AreaInfoDigitalWallet>
    </DigitalWalletWrapper>
  )
}

DigitalWallet.propTypes = {}

export default DigitalWallet