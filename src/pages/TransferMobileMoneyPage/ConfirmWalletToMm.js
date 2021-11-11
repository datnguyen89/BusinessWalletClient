import React from 'react'
import PropTypes from 'prop-types'
import ConditionDisplay from '../../components/ConditionDisplay'
import { ColorTitle } from '../../components/CommonStyled/CommonStyled'
import { Button, Descriptions, Space } from 'antd'
import numberUtils from '../../utils/numberUtils'

const ConfirmWalletToMm = props => {
  const { visible, callbackConfirmWalletToMm, onCancel } = props

  const handleCancel = () => {
    onCancel()
  }
  const handleConfirm = () => {
    callbackConfirmWalletToMm()
  }

  return (
    <ConditionDisplay visible={visible}>
      <ColorTitle>Chuyển tiền MobiFone Money</ColorTitle>
      <Descriptions labelStyle={{ width: '50%' }} column={1} size={'small'} bordered>
        <Descriptions.Item label='Tài khoản MobiFone Money'>0912 345 6789</Descriptions.Item>
      </Descriptions>
      <ColorTitle marginTop={'16px'}>Thông tin tài khoản Nhận</ColorTitle>
      <Descriptions labelStyle={{ width: '50%' }} column={1} size={'small'} bordered>
        <Descriptions.Item label='Họ và Tên'>Nguyễn Văn A</Descriptions.Item>
        <Descriptions.Item label='Số giấy tờ tùy thân'>0123456789</Descriptions.Item>
      </Descriptions>
      <ColorTitle marginTop={'16px'} color={'#4C68EF'} background={'#CCD9FF'}>
        Chuyển tiền từ ví đến Mobifone Money
      </ColorTitle>
      <Descriptions
        labelStyle={{ width: '50%' }}
        contentStyle={{ width: '50%' }}
        column={1}
        size={'small'} bordered>
        <Descriptions.Item label='Tài khoản ví chuyển'>0987654321</Descriptions.Item>
        <Descriptions.Item label='Số dư ví'>{numberUtils.thousandSeparator(1000000)} đ</Descriptions.Item>
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

ConfirmWalletToMm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  callbackConfirmWalletToMm: PropTypes.func.isRequired,
}

export default ConfirmWalletToMm