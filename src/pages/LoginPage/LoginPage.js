import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Col, Form, Input, message, Row } from 'antd'
import { AuthShadowBox } from '../../components/CommonStyled/CommonStyled'
import IMAGES from '../../images'
import { LoginFormTitle, LoginPageWrapper, TitleWrapper } from './LoginPageStyled'
import { Link, useHistory, useLocation } from 'react-router-dom'
import OtpModal from '../../components/OtpModal'
import { APP_CLIENT_ID, PAGES } from '../../utils/constant'
import stringUtils from '../../utils/stringUtils'

const LoginPage = props => {
  const { commonStore, authenticationStore } = props
  const { appLoading } = commonStore
  const history = useHistory()
  const location = useLocation()
  const [formLogin] = Form.useForm()

  const [visibleOtp, setVisibleOtp] = useState(false)
  const [currPayload, setCurrPayload] = useState({})
  const [extendData, setExtendData] = useState('')

  const onFinish = (formCollection) => {
    if (appLoading) return
    // 0963493002
    // 123456
    let payload = {
      ExtendData: '',
      ActiveCode: '',
      UserName: formCollection.userName,
      Password: formCollection.password,
      ClientId: APP_CLIENT_ID,
    }
    authenticationStore.userLogin(payload)
      .then(res => {
        switch (res?.responseCode) {
          case 0:
            history.push(location?.state?.from || PAGES.HOME.PATH)
            break
          case -52:
            setCurrPayload(payload)
            setVisibleOtp(true)
            setExtendData(res?.extendData)
            break
          default:
            message.error(res?.message)
            break
        }
      })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmitOtp = (otp) => {
    let payload = {
      ExtendData: extendData,
      ActiveCode: otp,
      UserName: currPayload.UserName,
      Password: currPayload.Password,
      ClientId: APP_CLIENT_ID,
    }
    authenticationStore.activeDevice(payload)
      .then(res => {
        switch (res?.responseCode) {
          case 0:
            history.push(location?.state?.from || PAGES.HOME.PATH)
            break
          case -10105:
          case -1:
            message.error(res?.message)
            setVisibleOtp(false)
            setCurrPayload({})
            setExtendData('')
            formLogin.resetFields()
            break
          default:
            message.error(res?.message)
            break
        }
      })
  }
  const handleCancelOtp = () => {
    setVisibleOtp(false)
    setCurrPayload({})
    setExtendData('')
  }

  const handleChangeUsername = (e) => {
    let inputText = e.currentTarget.value.trim().replaceAll(' ', '')
    if (inputText.length === 0) return
    inputText = stringUtils.removeVietnameseCharMark(inputText)
    formLogin.setFieldsValue({
      username: inputText,
    })
  }

  useEffect(() => {
    return () => {
      setVisibleOtp(false)
      setCurrPayload({})
      setExtendData('')
    }
  }, [])

  return (
    <>
      <LoginPageWrapper>
        <AuthShadowBox color={commonStore.appTheme.solidColor}>
          <TitleWrapper>
            <img src={IMAGES.AUTH_LOGO} alt={''} />
            <LoginFormTitle>ĐĂNG NHẬP MOBIFONE PAY DOANH NGHIỆP</LoginFormTitle>
          </TitleWrapper>
          <Form
            form={formLogin}
            name='basic'
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label=''
              name='userName'
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
            >
              <Input className={'auth-input'} onChange={handleChangeUsername} placeholder={'Tên đăng nhập'} />
            </Form.Item>

            <Form.Item
              label=''
              name='password'
              // rules={[{ validator: validator.validateLoginPassword }]}
            >
              <Input.Password className={'auth-input'} placeholder={'Mật khẩu'} />
            </Form.Item>

            <Form.Item>
              <Row align={'middle'}>
                <Col span={12}>
                  <Link to={'/forgot-password'}>Quên mật khẩu</Link>
                </Col>
                <Col span={12}>
                  <Button type='primary' htmlType='submit' block>
                    Đăng nhập
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </AuthShadowBox>
        <OtpModal
          phoneNumber={currPayload?.UserName || ''}
          visible={visibleOtp}
          onCancel={handleCancelOtp}
          callbackOtp={handleSubmitOtp} />
      </LoginPageWrapper>
    </>
  )
}

LoginPage.propTypes = {}

export default inject('commonStore', 'authenticationStore')(observer(LoginPage))