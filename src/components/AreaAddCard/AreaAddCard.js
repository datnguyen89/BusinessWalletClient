import React from 'react'
import PropTypes from 'prop-types'
import { AreaAddCardWrapper, ButtonAddNewCard } from './AreaAddCardStyled'
import { Link } from 'react-router-dom'

const AreaAddCard = props => {

  return (
    <AreaAddCardWrapper>
      <div>
        <div class='add-wrapper'><img src={`${process.env.PUBLIC_URL}/assets/images/icon_add_card.png`} /></div>
        <span>Bạn chưa có thẻ ngân hàng lưu sẵn tại đây. Thanh toán nhanh hơn bằng cách liên kết thẻ ngân hàng vào Ví PayMobi</span>
        <ButtonAddNewCard><Link to="/contract">Liên kết thẻ mới</Link></ButtonAddNewCard>
      </div>
    </AreaAddCardWrapper>
  )
}

AreaAddCard.propTypes = {}

export default AreaAddCard