import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import AuthLayout from '../../layouts/AuthLayout'
import { Input, Form, Checkbox, Button, Row, Col, message } from 'antd'
import { AuthShadowBox } from '../../components/CommonStyled/CommonStyled'
import IMAGES from '../../images'
import {
  ErrorLabel,
  ForgotPasswordFormTitle,
  ForgotPasswordPageWrapper, InfoLabel,
  TitleWrapper,
} from './ForgotPasswordPageStyled'
import { Link, useHistory } from 'react-router-dom'
import OtpModal from '../../components/OtpModal'
import SuccessModal from '../../components/SuccessModal'
import authenticationStore from '../../stores/authenticationStore'
import { PAGES } from '../../utils/constant'

const ForgotPasswordPage = props => {
  const history = useHistory()
  const [formEnterInfo] = Form.useForm()
  const [formResetPassword] = Form.useForm()

  const [processStep, setProcessStep] = useState(0)

  const [visibleOtp, setVisibleOtp] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)

  const [currPayload, setCurrPayload] = useState(null)
  const [extendData, setExtendData] = useState(null)

  const onFinishEnterInfo = (formCollection) => {
    let payload = {
      Step: 1,
      BusinessAccountName: formCollection.BusinessAccountName,
      AccountName: formCollection.AccountName,
      Mobile: formCollection.Mobile,
      Email: formCollection.Email,
    }
    authenticationStore.enterInfoForResetPasswordCustomer(payload)
      .then(res => {
        if (res?.responseCode === 0) {
          setExtendData(res?.extendData)
          setCurrPayload(payload)
          setProcessStep(1)
        } else {
          message.error(res?.description)
        }
      })
  }
  const onFinishFailedVerify = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinishResetPassword = (formCollection) => {
    let payload = {
      Step: 2,
      ExtendData: extendData,
      Password: formCollection.password,
      AccountName: currPayload.AccountName,
    }
    let newPayload = {
      ...currPayload,
      ExtendData: extendData,
      Password: formCollection.password,
      AccountName: currPayload.AccountName,
    }
    setCurrPayload(newPayload)
    authenticationStore.transferExtendDataForResetPassword(payload)
      .then(res => {
        console.log(res)
        switch (res?.responseCode) {
          case 0:
            setExtendData(res?.extendData )
            setVisibleOtp(true)
            break
          case -10002:
          case -10105:
            handleBackEnterInfo()
            message.error(res.description)
            break
          default:
            message.error(res?.description)
            break
        }
      })
  }
  const onFinishFailedResetPassword = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmitOtp = (otp) => {
    let payload = {
      Step: 3,
      Password: currPayload.Password,
      SecureCode: otp,
      AccountName: currPayload.AccountName,
      ExtendData: extendData,
    }
    authenticationStore.resetPasswordCustomer(payload)
      .then(res => {
        console.log(res)
        switch (res?.responseCode) {
          case 0:
            setVisibleOtp(false)
            setVisibleSuccess(true)
            break
          case -10002:
          case -10105:
            setVisibleOtp(false)
            handleBackEnterInfo()
            message.error(res?.description)
            break
          default:
            message.error(res?.description)
            break
        }

      })
  }

  const handleCloseSuccessModal = () => {
    setVisibleSuccess(false)
    formEnterInfo.resetFields()
    formResetPassword.resetFields()
    setCurrPayload(null)
    setExtendData(null)
    setProcessStep(0)
    history.push(PAGES.LOGIN.PATH)
  }

  const handleClickBackLogin = () => {
    formEnterInfo.resetFields()
    formResetPassword.resetFields()
    setCurrPayload(null)
    setExtendData(null)
    setProcessStep(0)
    history.push(PAGES.LOGIN.PATH)
  }
  const handleBackEnterInfo = () => {
    console.log('back enter info')
    formEnterInfo.resetFields()
    formResetPassword.resetFields()
    setCurrPayload(null)
    setExtendData(null)
    setProcessStep(0)
  }

  return (
    <>
      <ForgotPasswordPageWrapper>
        <AuthShadowBox>
          <TitleWrapper>
            <img src={IMAGES.AUTH_LOGO} alt={''} />
            <ForgotPasswordFormTitle>KH??I PH???C M???T KH???U</ForgotPasswordFormTitle>
          </TitleWrapper>
          {
            processStep === 0 &&
            <Form
              form={formEnterInfo}
              name='basic'
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinishEnterInfo}
              onFinishFailed={onFinishFailedVerify}
              autoComplete='off'
            >
              <Form.Item
                label=''
                name='BusinessAccountName'
                rules={[{ required: true, message: 'Vui l??ng nh???p s??? t??i kho???n doanh nghi???p' }]}
              >
                <Input className={'auth-input'} placeholder={'S??? t??i kho???n doanh nghi???p'} />
              </Form.Item>

              <Form.Item
                label=''
                name='AccountName'
                rules={[{ required: true, message: 'Vui l??ng nh???p t??n ????ng nh???p' }]}
              >
                <Input className={'auth-input'} placeholder={'T??n ????ng nh???p'} />
              </Form.Item>

              <Form.Item
                label=''
                name='Mobile'
                rules={[{ required: true, message: 'Vui l??ng nh???p s??? ??i???n tho???i User' }]}
              >
                <Input className={'auth-input'} placeholder={'S??? ??i???n tho???i User'} />
              </Form.Item>

              <Form.Item
                label=''
                name='Email'
                rules={[{ required: true, message: 'Vui l??ng nh???p email' }]}
              >
                <Input className={'auth-input'} placeholder={'Email'} />
              </Form.Item>
              <Form.Item>
                <InfoLabel>* Vui l??ng nh???p ?????y ????? th??ng tin ????? l???y l???i m???t kh???u</InfoLabel>
              </Form.Item>

              <Form.Item>
                <Row align={'middle'} justify={'space-between'}>
                  <Col span={11}>
                    <Button type='default' block onClick={handleClickBackLogin}>
                      V??? ????ng nh???p
                    </Button>
                  </Col>
                  <Col span={11}>
                    <Button type='primary' htmlType='submit' block>
                      Ti???p theo
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          }
          {
            processStep === 1 &&
            <Form
              form={formResetPassword}
              name='basic'
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinishResetPassword}
              onFinishFailed={onFinishFailedResetPassword}
              autoComplete='off'
            >
              <Form.Item>
                <ErrorLabel>
                  * Vui l??ng ?????t m???t kh???u g???m c??? s??? v?? ch???, <br /> t???i thi???u 8 k?? t??? v?? ch???a k?? t??? ?????c bi???t
                </ErrorLabel>
              </Form.Item>
              <Form.Item
                label=''
                name='password'
                rules={[{ required: true, message: 'Vui l??ng nh???p m???t kh???u m???i' }]}
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
                <Row align={'middle'} justify={'space-between'}>
                  <Col span={11}>
                    <Button type='default' block onClick={handleBackEnterInfo}>
                      V??? b?????c tr?????c
                    </Button>
                  </Col>
                  <Col span={11}>
                    <Button type='primary' htmlType='submit' block>
                      Ti???p theo
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          }
        </AuthShadowBox>
        <OtpModal
          phoneNumber={currPayload?.AccountName}
          callbackOtp={handleSubmitOtp}
          visible={visibleOtp}
          onCancel={() => setVisibleOtp(false)} />
        <SuccessModal
          title={'Th??ng b??o'}
          description={<span>Qu?? kh??ch l???y l???i m???t kh???u th??nh c??ng.<br /> Vui l??ng ????ng nh???p l???i</span>}
          visible={visibleSuccess}
          callbackSuccess={handleCloseSuccessModal} />
      </ForgotPasswordPageWrapper>
    </>
  )
}

ForgotPasswordPage.propTypes = {}

export default ForgotPasswordPage