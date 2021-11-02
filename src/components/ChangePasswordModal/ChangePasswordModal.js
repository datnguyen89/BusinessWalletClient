import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { ChangePasswordModalWrapper } from './ChangePasswordModalStyled'
import { Button, Col, Form, Input, message, Row } from 'antd'
import { ErrorLabel } from '../../pages/ForgotPasswordPage/ForgotPasswordPageStyled'
import OtpModal from '../OtpModal'

const ChangePasswordModal = props => {
  const { onCancel, onSuccess, visible } = props
  const [formChangePassword] = Form.useForm()

  const [visibleOtp, setVisibleOtp] = useState(false)

  const handleCancel = () => {
    onCancel()
  }
  const onFinishChangePassword = (formCollection) => {
    console.log('Success:', formCollection)
    onCancel()
    setVisibleOtp(true)
  }
  const onFinishFailedChangePassword = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const handleCallbackOtp = (otp) => {
    message.info(otp)
  }

  useEffect(() => {
    formChangePassword.resetFields()
  }, [visible])

  return (
    <>
      <ChangePasswordModalWrapper
        title='Đổi mật khẩu'
        maskClosable={false}
        visible={visible}
        footer={null}
        onCancel={handleCancel}>
        <Form
          form={formChangePassword}
          name='basic'
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinishChangePassword}
          onFinishFailed={onFinishFailedChangePassword}
          autoComplete='off'
        >
          <Form.Item
            label=''
            name='oldPassword'
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu hiện tại' }]}
          >
            <Input.Password size={'large'} className={'auth-input'} placeholder={'Mật khẩu hiện tại'} />
          </Form.Item>
          <Form.Item
            label=''
            name='password'
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới' }]}
          >
            <Input.Password size={'large'} className={'auth-input'} placeholder={'Mật khẩu mới'} />
          </Form.Item>
          <Form.Item
            label=''
            dependencies={['password']}
            name='confirmPassword'
            rules={[
              { required: true, message: 'Vui lòng nhập lại mật khẩu mới' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Mật khẩu xác nhận không trùng khớp'))
                },
              }),
            ]}
          >
            <Input.Password size={'large'} className={'auth-input'} placeholder={'Xác nhận mật khẩu mới'} />
          </Form.Item>
          <Form.Item>
            <ErrorLabel>
              * Vui lòng đặt mật khẩu gồm cả số và chữ, tối thiểu 8 ký tự và chứa ký tự đặc biệt
            </ErrorLabel>
          </Form.Item>
          <Row align={'middle'} justify={'center'}>
            <Col span={11}>
              <Button type='primary' htmlType='submit' size={'large'} block>
                Tiếp theo
              </Button>
            </Col>
          </Row>
        </Form>
      </ChangePasswordModalWrapper>
      <OtpModal
        visible={visibleOtp}
        callbackOtp={handleCallbackOtp}
        onCancel={() => setVisibleOtp(false)}
        phoneNumber={'0379631004'} />
    </>

  )
}

ChangePasswordModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default ChangePasswordModal