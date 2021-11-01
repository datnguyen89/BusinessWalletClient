import styled from 'styled-components'
import { Modal } from 'antd'

export const OtpModalWrapper = styled(Modal)`
  .ant-modal-header {
    padding: 12px 16px;
  }
  .ant-modal-body {
    padding: 16px;
  }
  .ant-modal-content {
    border-radius: 10px;
    overflow: hidden;
  }  
`
export const OtpDescription = styled.div`
  text-align: center;
`
export const ExpiredLabel = styled.div`
  text-align: center;
  margin-bottom: 16px;
`
export const ResendOtp = styled.span`
  cursor: pointer;
  color: #0261AD;  
`
export const WaitingResendOtp = styled.span`
  color: #ccc;
`