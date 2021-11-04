import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GrayTitle, RowFlexEndDiv } from '../../components/CommonStyled/CommonStyled'
import { Button, Descriptions, Form, Input, InputNumber } from 'antd'
import numberUtils from '../../utils/numberUtils'
import validator from '../../validator'
import ConditionDisplay from '../../components/ConditionDisplay'

const ProcessMmToWallet = props => {
  const { visible, callbackProcessMmToWallet } = props
  const [formMmToWallet] = Form.useForm()
  const currentBalance = 1000000000
  const [balance, setBalance] = useState(currentBalance)
  const handleSubmitTransferMmToWallet = (formCollection) => {
    callbackProcessMmToWallet(formCollection)
  }
  const handleChangeAmount = (amount) => {
    if (!amount) {
      setBalance(currentBalance)
      return
    }
    if (amount >= currentBalance) {
      console.log(amount)
      formMmToWallet.setFieldsValue({
        amount: currentBalance,
      })
      setBalance(0)
      return
    }
    let newBalance = currentBalance - amount
    setBalance(newBalance)
  }
  return (
    <ConditionDisplay visible={visible}>
      <GrayTitle>Chuyển tiền Mobifone Money</GrayTitle>
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
        <Descriptions.Item label='Số dư Mobifone Money'>{numberUtils.thousandSeparator(balance)} đ</Descriptions.Item>
      </Descriptions>
      <Form
        onFinish={handleSubmitTransferMmToWallet}
        requiredMark={false}
        form={formMmToWallet}
        style={{ marginTop: 16 }}
        labelAlign={'left'}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        colon={false}>
        <Form.Item
          name={'amount'}
          label={'Nhập số tiền'}
          rules={[
            { validator: validator.validateAmountMoney },
          ]}>
          <InputNumber
            onChange={handleChangeAmount}
            style={{ width: '100%' }}
            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            parser={value => value.replace(/\$\s?|(\.*)/g, '')}
            min={0} step={1000} />
        </Form.Item>
        <Form.Item name={'description'} label={'Nội dung'}>
          <Input placeholder={'Nội dung chuyển tiền'} />
        </Form.Item>
        <RowFlexEndDiv>
          <Button type={'primary'} htmlType={'submit'}>Tiếp theo</Button>
        </RowFlexEndDiv>
      </Form>
    </ConditionDisplay>
  )
}

ProcessMmToWallet.propTypes = {
  visible: PropTypes.bool.isRequired,
  callbackProcessMmToWallet: PropTypes.func.isRequired,
}

export default ProcessMmToWallet