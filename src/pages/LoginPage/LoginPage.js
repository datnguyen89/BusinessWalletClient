import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import AuthLayout from '../../layouts/AuthLayout'
import { Input, Form, Checkbox, Button, Row, Col, message } from 'antd'
import { AuthShadowBox } from '../../components/CommonStyled/CommonStyled'
import IMAGES from '../../images'
import { LoginFormTitle, LoginPageWrapper, TitleWrapper } from './LoginPageStyled'
import { Link, useHistory } from 'react-router-dom'
import OtpModal from '../../components/OtpModal'

const LoginPage = props => {
  const { commonStore, modalStore } = props
  const history = useHistory()

  const onFinish = (formCollection) => {
    console.log('Success:', formCollection)
    modalStore.setVisibleOtp(true)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmitOtp = (otp) => {
    modalStore.setVisibleOtp(false)
    message.info(otp)
    history.push('/')
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
        <OtpModal phoneNumber={'0379631004'} callbackOtp={handleSubmitOtp} />
      </LoginPageWrapper>
    </AuthLayout>
  )
}

LoginPage.propTypes = {}

export default inject('commonStore', 'modalStore')(observer(LoginPage))