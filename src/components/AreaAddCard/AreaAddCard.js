import React from 'react'
import PropTypes from 'prop-types'
import { AreaAddCardWrapper, ButtonAddNewCard } from './AreaAddCardStyled'

const AreaAddCard = props => {

  return (
    <AreaAddCardWrapper>
        <div>
          <div class="add-wrapper"><img src={`${process.env.PUBLIC_URL}/assets/images/icon_add_card.png`} /></div>
          <span>Bạn chưa có thẻ ngân hàng lưu sẵn tại đây. Thanh toán nhanh hơn bằng cách liên kết thẻ ngân hàng vào Ví PayMobi</span>
          <ButtonAddNewCard><span>Liên kết thẻ mới</span></ButtonAddNewCard>
        </div>
    </AreaAddCardWrapper>
  )
}

AreaAddCard.propTypes = {
  
}

export default AreaAddCard