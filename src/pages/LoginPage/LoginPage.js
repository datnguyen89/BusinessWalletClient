import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { Button, Col, Form, Input, message, Row } from 'antd'
import { AuthShadowBox } from '../../components/CommonStyled/CommonStyled'
import IMAGES from '../../images'
import { LoginFormTitle, LoginPageWrapper, TitleWrapper } from './LoginPageStyled'
import { Link, useHistory } from 'react-router-dom'
import OtpModal from '../../components/OtpModal'

const LoginPage = props => {
  const history = useHistory()
  const [visibleOtp, setVisibleOtp] = useState(false)

  const onFinish = (formCollection) => {
    setVisibleOtp(true)
    console.log('Success:', formCollection)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmitOtp = (otp) => {
    if (otp === '123456') {
      history.push('/')
    } else {
      message.error('Mã OTP không đúng')
    }
  }

  return (
    <AuthLayout>
      <LoginPageWrapper>
        <AuthShadowBox>
          <TitleWrapper>
            <img src={IMAGES.AUTH_LOGO} alt={''} />
            <LoginFormTitle>ĐĂNG NHẬP MOBIFONE PAY DOANH NGHIỆP</LoginFormTitle>
          </TitleWrapper>
          <Form
            name='basic'
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label=''
              name='username'
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
            >
              <Input size={'large'} className={'auth-input'} placeholder={'Tên đăng nhập'} />
            </Form.Item>

            <Form.Item
              label=''
              name='password'
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
            >
              <Input.Password size={'large'} className={'auth-input'} placeholder={'Mật khẩu'} />
            </Form.Item>

            <Form.Item>
              <Row align={'middle'}>
                <Col span={12}>
                  <Link to={'/forgot-password'}>Quên mật khẩu</Link>
                </Col>
                <Col span={12}>
                  <Button type='primary' htmlType='submit' size={'large'} block>
                    Đăng nhập
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </AuthShadowBox>
        <OtpModal
          phoneNumber={'0379631004'}
          visible={visibleOtp}
          onCancel={() => setVisibleOtp(false)}
          callbackOtp={handleSubmitOtp} />
      </LoginPageWrapper>
    </AuthLayout>
  )
}

LoginPage.propTypes = {}

export default LoginPage