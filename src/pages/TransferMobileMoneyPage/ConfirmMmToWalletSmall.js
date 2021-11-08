import React from 'react'
import PropTypes from 'prop-types'
import ConditionDisplay from '../../components/ConditionDisplay'
import { Descriptions } from 'antd'
import { ConfirmSmallWrapper } from './TransferMobileMoneyPageStyled'

const ConfirmMmToWalletSmall = props => {
  const { visible } = props
  return (
    <ConditionDisplay visible={visible}>
      <ConfirmSmallWrapper>
        <Descriptions labelStyle={{ width: '50%' }} column={1} size={'small'} bordered>
          <Descriptions.Item label='Tài khoản Mobifone Money chuyển'>MobiFone Money | 0912 345 6789</Descriptions.Item>
          <Descriptions.Item label='Tài khoản ví nhận'>Sacombank | 12345****1000</Descriptions.Item>
          <Descriptions.Item label='Người nhận'>Nguyễn Văn B</Descriptions.Item>
          <Descriptions.Item label='Số tiền'>150.000 đ</Descriptions.Item>
          <Descriptions.Item label='Phí giao dịch'>0 đ</Descriptions.Item>
          <Descriptions.Item label='Tổng tiền'>150.000 đ</Descriptions.Item>
          <Descriptions.Item label='Nội dung chuyển tiền'>Nguyễn Văn A chuyển tiền</Descriptions.Item>
        </Descriptions>
      </ConfirmSmallWrapper>
    </ConditionDisplay>
  )
}

ConfirmMmToWalletSmall.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default ConfirmMmToWalletSmall