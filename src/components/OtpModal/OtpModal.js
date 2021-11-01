import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { ExpiredLabel, OtpDescription, OtpModalWrapper, ResendOtp, WaitingResendOtp } from './OtpModalStyled'
import { Button, Col, message, Modal, Row } from 'antd'

const _ = require('lodash')

const OtpModal = props => {
  const { otpStore, callbackOtp, phoneNumber, otpLength } = props
  const [timeLeft, setTimeLeft] = useState(180)
  const [timeResend, setTimeResend] = useState(0)
  const [otp, setOtp] = useState('')

  const containerStyle = {
    width: '100%',
    justifyContent: 'center',
    margin: '16px 0',
  }
  const inputStyle = {
    width: '45px',
    height: '45px',
    margin: '0 8px',
    outline: 'none',
    border: '1px solid #ccc',
    borderRadius: '8px',
  }
  const focusStyle = {
    border: '1px solid #0261AD',
  }
  const handleOk = () => {
    let checkOtpLength = otpLength || 6
    if (!otp) {
      message.error('Vui lòng nhập mã OTP')
      return
    }
    if (otp.length < checkOtpLength) {
      message.error(`Vui lòng nhập đủ ${checkOtpLength} ký tự OTP`)
      return
    }
    callbackOtp(otp)
  }
  const handleInputOtp = (value) => {
    const reg = /^-?\d+\.?\d*$/
    if (reg.test(value)) {
      setOtp(value)
    } else {
      setOtp('')
    }
  }
  const handleCancel = () => {
    otpStore.setVisible(false)
  }
  const handleClickResend = () => {
    setTimeResend(60)
    setTimeLeft(180)
  }

  useEffect(() => {
    if (!timeLeft) return
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeLeft])

  useEffect(() => {
    if (!timeResend) return
    const intervalId = setInterval(() => {
      setTimeResend(timeResend - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeResend])

  useEffect(() => {
    if (otpStore.visible) return
    setTimeLeft(180)
    setTimeResend(0)
    setOtp('')
  }, [otpStore.visible])

  return (
    <OtpModalWrapper
      title='Nhập mã xác thực'
      maskClosable={false}
      visible={otpStore.visible}
      footer={null}
      onCancel={handleCancel}>
      <Row justify={'center'}>
        <Col span={24}>
          <OtpDescription>
            Mã xác thực đã được gửi qua SĐT {_.fill(phoneNumber.split(''), '*', 3, phoneNumber.length - 3)}.
            <br />
            Nếu không nhận được OTP vui lòng ấn {timeResend === 0 ?
            <ResendOtp onClick={handleClickResend}>Gửi lại</ResendOtp> :
            <WaitingResendOtp>(Gửi lại sau {timeResend}s)</WaitingResendOtp>}
          </OtpDescription>
        </Col>
        <Col span={24}>
          <OtpInput
            shouldAutoFocus={true}
            isInputNum={true}
            value={otp}
            numInputs={otpLength || 6}
            onChange={handleInputOtp}
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            focusStyle={focusStyle}
            separator={''} />
        </Col>
        <Col span={24}>
          <ExpiredLabel>
            Mã OTP sẽ hết hạn sau {timeLeft}s
          </ExpiredLabel>
        </Col>
        <Col span={8}>
          <Button block type={'primary'} onClick={handleOk}>Xác nhận</Button>
        </Col>
      </Row>
    </OtpModalWrapper>
  )
}

OtpModal.propTypes = {
  otpLength: PropTypes.number,
  phoneNumber: PropTypes.string.isRequired,
  callbackOtp: PropTypes.string.isRequired,
}

export default inject('otpStore')(observer(OtpModal))