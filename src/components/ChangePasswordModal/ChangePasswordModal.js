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
        if (res?.responseCode === 0) {
          onClose()
          setVisibleOtp(true)
          setExtendData(res?.param)
          setCurrPayload(payload)
        } else {
          message.error(res?.description)
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
        if (res?.responseCode === 0) {
          switch (res?.responseCode) {
            case 0:
              setVisibleOtp(false)
              setVisibleSuccess(true)
              break
            case -671:
            case -10002:
              setVisibleOtp(false)
              message.error(res?.description)
              break
            default:
              break
          }

        } else {
          message.error(res?.description)
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
        title='?????i m???t kh???u'
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
            rules={[{ required: true, message: 'Vui l??ng nh???p m???t kh???u hi???n t???i' }]}
          >
            <Input.Password className={'auth-input'} placeholder={'M???t kh???u hi???n t???i'} />
          </Form.Item>
          <Form.Item
            label=''
            name='password'
            rules={[{ validator: validator.validateLoginPassword }]}
          >
            <Input.Password className={'auth-input'} placeholder={'M???t kh???u m???i'} />
          </Form.Item>
          <Form.Item
            label=''
            dependencies={['password']}
            name='confirmPassword'
            rules={[
              { required: true, message: 'Vui l??ng nh???p l???i m???t kh???u m???i' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('M???t kh???u x??c nh???n kh??ng tr??ng kh???p'))
                },
              }),
            ]}
          >
            <Input.Password className={'auth-input'} placeholder={'X??c nh???n m???t kh???u m???i'} />
          </Form.Item>
          <Form.Item>
            <ErrorLabel>
              * Vui l??ng ?????t m???t kh???u g???m c??? s??? v?? ch???, t???i thi???u 8 k?? t??? v?? ch???a k?? t??? ?????c bi???t
            </ErrorLabel>
          </Form.Item>
          <Row align={'middle'} justify={'center'}>
            <Col span={11}>
              <Button type='primary' htmlType='submit' block>
                Ti???p theo
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
      <SuccessModal visible={visibleSuccess} description={'?????i m???t kh???u th??nh c??ng'}
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