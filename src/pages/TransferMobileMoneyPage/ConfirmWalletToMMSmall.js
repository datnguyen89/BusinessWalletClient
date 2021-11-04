import React from 'react'
import PropTypes from 'prop-types'
import ConditionRender from '../../components/ConditionRender'
import { Descriptions } from 'antd'
import { ConfirmWalletToMMSmallWrapper } from './TransferMobileMoneyPageStyled'

const ConfirmWalletToMMSmall = props => {
  const { visible } = props
  return (
    <ConditionRender visible={visible}>
      <ConfirmWalletToMMSmallWrapper>
        <Descriptions labelStyle={{ width: '50%' }} column={1} size={'small'} bordered>
          <Descriptions.Item label='Tài khoản chuyển'>Sacombank | 12345****1000</Descriptions.Item>
          <Descriptions.Item label='Tài khoản nhận'>MobiFone Money | 0912 345 6789</Descriptions.Item>
          <Descriptions.Item label='Số tiền'>150.000 đ</Descriptions.Item>
          <Descriptions.Item label='Phí giao dịch'>0 đ</Descriptions.Item>
          <Descriptions.Item label='Tổng tiền'>150.000 đ</Descriptions.Item>
        </Descriptions>
      </ConfirmWalletToMMSmallWrapper>
    </ConditionRender>
  )
}

ConfirmWalletToMMSmall.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default ConfirmWalletToMMSmall