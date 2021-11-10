import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  SourceItem
} from './TransActionFooterStyled'
import { Row, Col, Image, Button } from 'antd'

const TransSourceFund = ({ isConfirm, backClickCallback }) => {
  const handleBtnBackClick = () => {
    backClickCallback && backClickCallback()
  }

  return (
    <Wrapper>
      {isConfirm && <Button onClick={handleBtnBackClick}>Quay lại</Button>}
      <Button type='primary' htmlType="submit">{!isConfirm ? 'Tiếp theo' : 'Tạo lệnh'}</Button>
    </Wrapper>
  )
}

TransSourceFund.propTypes = {
  isConfirm: PropTypes.bool,
  backClickCallback: PropTypes.func
}

export default TransSourceFund