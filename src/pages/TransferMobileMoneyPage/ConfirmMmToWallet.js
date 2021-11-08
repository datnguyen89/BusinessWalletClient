import React from 'react'
import PropTypes from 'prop-types'
import ConditionDisplay from '../../components/ConditionDisplay'
import { GrayTitle } from '../../components/CommonStyled/CommonStyled'
import { Button, Descriptions, Space } from 'antd'
import numberUtils from '../../utils/numberUtils'

const ConfirmMmToWallet = props => {
  const { visible, callbackConfirmMmToWallet, onCancel } = props

  const handleCancel = () => {
    onCancel()
  }
  const handleConfirm = () => {
    callbackConfirmMmToWallet()
  }

  return (
    <ConditionDisplay visible={visible}>
      <GrayTitle>Chuyển tiền MobiFone Money</GrayTitle>
      <Descriptions labelStyle={{ width: '50%' }} column={1} size={'small'} bordered>
        <Descriptions.Item label='Tài khoản MobiFone Money'>0912 345 6789</Descriptions.Item>
      </Descriptions>
      <GrayTitle marginTop={'16px'}>Thông tin tài khoản Nhận</GrayTitle>
      <Descriptions labelStyle={{ width: '50%' }} column={1} size={'small'} bordered>
        <Descriptions.Item label='Họ và Tên'>Nguyễn Văn A</Descriptions.Item>
        <Descriptions.Item label='Số giấy tờ tùy thân'>0123456789</Descriptions.Item>
      </Descriptions>
      <GrayTitle marginTop={'16px'} color={'#fff'} background={'#A8A8A8'}>
        Chuyển tiền từ Mobifone Money đến ví
      </GrayTitle>
      <Descriptions
        labelStyle={{ width: '50%' }}
        contentStyle={{ width: '50%' }}
        column={1}
        size={'small'} bordered>
        <Descriptions.Item label='Tài khoản Mobifone Money chuyển'>0987654321</Descriptions.Item>
        <Descriptions.Item label='Số dư Mobifone Money'>{numberUtils.thousandSeparator(1000000)} đ</Descriptions.Item>
      </Descriptions>
      <br />
      <Descriptions labelStyle={{ width: '50%' }} column={1} size={'small'} bordered>
        <Descriptions.Item label='Số tiền chuyển'>100.000 đ</Descriptions.Item>
        <Descriptions.Item label='Nội dung'>Nguyễn Văn A chuyển tiền</Descriptions.Item>
      </Descriptions>
      <Space
        align={'center'}
        style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
        <Button onClick={handleCancel} type={'default'}>Quay lại</Button>
        <Button onClick={handleConfirm} type={'primary'}>Tạo lệnh</Button>
      </Space>
    </ConditionDisplay>
  )
}

ConfirmMmToWallet.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  callbackConfirmMmToWallet: PropTypes.func.isRequired,
}

export default ConfirmMmToWallet