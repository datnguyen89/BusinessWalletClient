import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { ChangePasswordModalWrapper } from './ChangePasswordModalStyled'
import { Button, Col, Form, Input, message, Row } from 'antd'
import { ErrorLabel } from '../../pages/ForgotPasswordPage/ForgotPasswordPageStyled'
import OtpModal from '../OtpModal'
import SuccessModal from '../SuccessModal'
import validator from '../../validator'

const ChangePasswordModal = props => {
  const { onClose, onSuccess, visible, authenticationStore, profileStore } = props
  const [formChangePassword] = Form.useForm()
  const { jwtDecode } = authenticationStore
  const { userProfile } = profileStore

  const [visibleOtp, setVisibleOtp] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)
  const [currPayload, setCurrPayload] = useState(null)
  const [extendData, setExtendData] = useState(null)

  const handleCancel = () => {
    onClose()
    formChangePassword.resetFields()
    setExtendData(null)
    setCurrPayload(null)
  }
  const onFinishChangePassword = (formCollection) => {
    let payload = {
      Step: 1,
      OldPassword: formCollection.oldPassword,
      NewPassword: formCollection.password,
    }
    authenticationStore.transferExtendDataForChangePassword(payload)
      .then(res => {
        if (!res.error) {
          onClose()
          setVisibleOtp(true)
          setExtendData(res.data)
          setCurrPayload(payload)
        } else {
          message.error(res.message)
        }
      })
  }

  const handleCallbackOtp = (otp) => {
    let payload = {
      Step: 2,
      UserId: jwtDecode.sub,
      OldPassword: currPayload.OldPassword,
      NewPassword: currPayload.NewPassword,
      ExtendData: extendData,
      SecureCode: otp,
    }
    authenticationStore.changePasswordForCustomer(payload)
      .then(res => {
        if (!res.error) {
          setVisibleOtp(false)
          setVisibleSuccess(true)
        } else {
          message.error(res.message)
        }
      })
  }

  const handleSuccessChangePassword = () => {
    setVisibleSuccess(false)
    onSuccess()
  }

  useEffect(() => {
    formChangePassword.resetFields()
  }, [visible])

  return (
    <>
      <ChangePasswordModalWrapper
        title='Đổi mật khẩu'
        forceRender={true}
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
          autoComplete='off'
          colon={false}
        >
          <Form.Item
            label=''
            name='oldPassword'
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu hiện tại' }]}
          >
            <Input.Password className={'auth-input'} placeholder={'Mật khẩu hiện tại'} />
          </Form.Item>
          <Form.Item
            label=''
            name='password'
            rules={[{ validator: validator.validateLoginPassword }]}
          >
            <Input.Password className={'auth-input'} placeholder={'Mật khẩu mới'} />
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
            <Input.Password className={'auth-input'} placeholder={'Xác nhận mật khẩu mới'} />
          </Form.Item>
          <Form.Item>
            <ErrorLabel>
              * Vui lòng đặt mật khẩu gồm cả số và chữ, tối thiểu 8 ký tự và chứa ký tự đặc biệt
            </ErrorLabel>
          </Form.Item>
          <Row align={'middle'} justify={'center'}>
            <Col span={11}>
              <Button type='primary' htmlType='submit' block>
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
        phoneNumber={userProfile?.mobile} />
      <SuccessModal visible={visibleSuccess} description={'Đối mật khẩu thành công'}
                    callbackSuccess={handleSuccessChangePassword} />
    </>

  )
}

ChangePasswordModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default inject('authenticationStore', 'profileStore')(observer(ChangePasswordModal))