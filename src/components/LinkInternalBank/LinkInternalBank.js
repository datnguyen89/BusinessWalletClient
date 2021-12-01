import React from 'react'
import { AreaBoundInternalBank, LinkInternalBankTitle, LinkInternalBankWrapper } from './LinkInternalBankStyled'

const LinkInternalBank = props => {
  const listBank = [
    {id: 1, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 2, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 3, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 4, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 5, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 6, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 7, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 8, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 9, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 10, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 11, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 12, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 13, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 14, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 15, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 16, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 17, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 18, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 19, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 20, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 21, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 22, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 23, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 24, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 25, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 26, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 27, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 28, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 29, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 30, imageUrl: require('../../media/images/sacombank_icon.png')},
  ];

  return (
    <LinkInternalBankWrapper>
      <LinkInternalBankTitle>Ngân hàng nội địa</LinkInternalBankTitle>
      <AreaBoundInternalBank>
        {
          listBank.map(item => (
            <span key={item.id}><img src={item.imageUrl} alt={item.imageUrl} /></span>
          ))
        }
      </AreaBoundInternalBank>
    </LinkInternalBankWrapper>
  )
}

LinkInternalBank.propTypes = {
}

export default LinkInternalBank