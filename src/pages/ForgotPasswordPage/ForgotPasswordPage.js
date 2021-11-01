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

const ForgotPasswordPage = props => {
  const { commonStore, modalStore } = props
  const history = useHistory()
  const [formVerify] = Form.useForm()
  const [formResetPassword] = Form.useForm()

  const [processStep, setProcessStep] = useState(0)

  const onFinish = (formCollection) => {
    console.log('Success:', formCollection)
    setProcessStep(1)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmitOtp = (otp) => {
    message.info(otp)
    history.push('/')
  }
  const handleClickBackLogin = () => {
    formVerify.resetFields()
    history.push('/login')
  }
  const handleClickBackVerify = () => {
    formResetPassword.resetFields()
    setProcessStep(0)
  }

  return (
    <AuthLayout>
      <ForgotPasswordPageWrapper>
        <AuthShadowBox>
          <TitleWrapper>
            <img src={IMAGES.AUTH_LOGO} alt={''} />
            <ForgotPasswordFormTitle>KHÔI PHỤC MẬT KHẨU</ForgotPasswordFormTitle>
          </TitleWrapper>
          {
            processStep === 0 &&
            <Form
              form={formVerify}
              name='basic'
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                label=''
                name='companyAccount'
                rules={[{ required: true, message: 'Vui lòng nhập số tài khoản doanh nghiệp' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Số tài khoản doanh nghiệp'} />
              </Form.Item>

              <Form.Item
                label=''
                name='username'
                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Tên đăng nhập'} />
              </Form.Item>

              <Form.Item
                label=''
                name='passport'
                rules={[{ required: true, message: 'Vui lòng nhập số CMND/CCCD/Hộ Chiếu' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Số CMND/CCCD/Hộ Chiếu'} />
              </Form.Item>

              <Form.Item
                label=''
                name='phoneNumber'
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại User' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Số điện thoại User'} />
              </Form.Item>
              <Form.Item>
                <InfoLabel>* Vui lòng nhập đầy đủ thông tin để lấy lại mật khẩu</InfoLabel>
              </Form.Item>

              <Form.Item>
                <Row align={'middle'} justify={'space-between'}>
                  <Col span={11}>
                    <Button type='default' size={'large'} block onClick={handleClickBackLogin}>
                      Về đăng nhập
                    </Button>
                  </Col>
                  <Col span={11}>
                    <Button type='primary' htmlType='submit' size={'large'} block>
                      Tiếp theo
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
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item>
                <ErrorLabel>* Vui lòng đặt mật khẩu gồm cả số và chữ, tối thiểu 8 ký tự và chứa ký tự đặc
                  biệt</ErrorLabel>
              </Form.Item>
              <Form.Item
                label=''
                name='companyAccount'
                rules={[{ required: true, message: 'Vui lòng nhập số tài khoản doanh nghiệp' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Số tài khoản doanh nghiệp'} />
              </Form.Item>

              <Form.Item
                label=''
                name='username'
                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Tên đăng nhập'} />
              </Form.Item>

              <Form.Item
                label=''
                name='passport'
                rules={[{ required: true, message: 'Vui lòng nhập số CMND/CCCD/Hộ Chiếu' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Số CMND/CCCD/Hộ Chiếu'} />
              </Form.Item>

              <Form.Item
                label=''
                name='phoneNumber'
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại User' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Số điện thoại User'} />
              </Form.Item>


              <Form.Item>
                <Row align={'middle'} justify={'space-between'}>
                  <Col span={11}>
                    <Button type='default' size={'large'} block onClick={handleClickBackVerify}>
                      Về bước trước
                    </Button>
                  </Col>
                  <Col span={11}>
                    <Button type='primary' htmlType='submit' size={'large'} block>
                      Tiếp theo
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          }
        </AuthShadowBox>
        <OtpModal phoneNumber={'0379631004'} callbackOtp={handleSubmitOtp} />
      </ForgotPasswordPageWrapper>
    </AuthLayout>
  )
}

ForgotPasswordPage.propTypes = {}

export default inject('commonStore', 'modalStore')(observer(ForgotPasswordPage))