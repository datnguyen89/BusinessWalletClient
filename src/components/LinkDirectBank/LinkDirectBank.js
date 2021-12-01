import React from 'react'
import { AreaBoundDirectBank, LinkDirectBankTitle, LinkDirectBankWrapper } from './LinkDirectBankStyled'

const LinkDirectBank = props => {
  const listBank = [
    {id: 1, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 2, imageUrl: require('../../media/images/sacombank_icon.png')},
    {id: 3, imageUrl: require('../../media/images/sacombank_icon.png')}
  ];
  return (
    <LinkDirectBankWrapper>
      <LinkDirectBankTitle>Ngân hàng liên kết trực tiếp</LinkDirectBankTitle>
      <AreaBoundDirectBank>
        {
          listBank.map(item => (
            <span key={item.id}><img src={item.imageUrl} alt={item.imageUrl} /></span>
          ))
        }
      </AreaBoundDirectBank>

    </LinkDirectBankWrapper>
  )
}

LinkDirectBank.propTypes = {
}

export default LinkDirectBank