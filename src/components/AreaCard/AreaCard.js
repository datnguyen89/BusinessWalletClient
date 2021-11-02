import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import {
  AreaAddCard,
  AreaCardWrapper,
  AreaEnterpriseInfoLabel,
  AreaPanelAdminCard,
  SpanAreaAccountInfoLabel,
} from './AreaCardStyled'

const AreaCard = props => {

  const handleAddNewCard = () => {

  }

  return (
    <AreaCardWrapper>
      <AreaPanelAdminCard
        arrowPrev={`${process.env.PUBLIC_URL}/assets/images/prev.png`}
        arrowNext={`${process.env.PUBLIC_URL}/assets/images/next.png`}>
        <AreaEnterpriseInfoLabel>
          <SpanAreaAccountInfoLabel>Thông tin tài khoản</SpanAreaAccountInfoLabel>
        </AreaEnterpriseInfoLabel>
        <Slider {...props.settings}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} />
          </div>
        </Slider>
      </AreaPanelAdminCard>
      <AreaAddCard>
        <div>
          <span className='add-wrapper'><img src={`${process.env.PUBLIC_URL}/assets/images/add.png`} /></span>
          <span onClick={() => handleAddNewCard()}>Liên kết thẻ mới</span>
        </div>
      </AreaAddCard>
    </AreaCardWrapper>
  )
}

AreaCard.propTypes = {}

export default AreaCard