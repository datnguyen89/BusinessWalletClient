import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  SourceItem
} from './TransActionFooterStyled'
import { Row, Col, Image, Button } from 'antd'

const TransSourceFund = ({ visibleBtnBack, backClickCallback, confirmClickCallback }) => {
  const handleBtnBackClick = () => {
    backClickCallback && backClickCallback()
  }

  const handleConfirmBackClick = () => {
    confirmClickCallback && confirmClickCallback()
  }

  return (
    <Wrapper>
      {visibleBtnBack && <Button onClick={handleBtnBackClick}>Quay lại</Button>}
      <Button type='primary' onClick={handleConfirmBackClick} htmlType="submit">{!visibleBtnBack ? 'Tiếp theo' : 'Tạo lệnh'}</Button>
    </Wrapper>
  )
}

TransSourceFund.propTypes = {
  visibleBtnBack: PropTypes.bool,
  backClickCallback: PropTypes.func,
  confirmClickCallback: PropTypes.func
}

export default TransSourceFund