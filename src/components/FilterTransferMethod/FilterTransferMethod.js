import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  ButtonConfirm,
  FilterByMethod,
  FilterByTime,
  FilterTransferMethodWrapper,
  LabelFilter,
} from './FilterTransferMethodStyled'
import { Button, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import ConfirmModal from '../ConfirmModal'
import OtpModal from '../OtpModal'
import SuccessModal from '../SuccessModal'
import { ContractWrapper } from '../Contract/ContractStyled'

const FilterTransferMethod = props => {

  const children = []
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
  }

  const size = 20
  const handleChange = () => {
  }

  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const [visibleOTP, setVisibleOTP] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)
  const handleCancel = () => {
    setVisibleConfirm(false)
  }
  const handleCancelTrue = () => {
    console.log('bỏ liên kết thành công')
    setVisibleConfirm(false)
    setVisibleOTP(true)
  }
  const confirm = () => {
    setVisibleConfirm(true)
  }
  const handleCallbackOTP = (otp) => {
    console.log(otp)
    setVisibleOTP(false)
    setVisibleSuccess(true)
  }

  return (
    <FilterTransferMethodWrapper>
      <FilterByTime>
        <LabelFilter>Tháng chi</LabelFilter>
        <Select size={size} defaultValue='a1' onChange={handleChange} style={{ width: 200 }}>
          {children}
        </Select>
      </FilterByTime>
      <FilterByMethod>
        <LabelFilter>Hình thức</LabelFilter>
        <Select size={size} defaultValue='a1' onChange={handleChange} style={{ width: 200 }}>
          {children}
        </Select>
      </FilterByMethod>
      <ButtonConfirm type='primary' onClick={confirm}>Xác nhận</ButtonConfirm>
      <ConfirmModal
        visible={visibleConfirm}
        onCancel={handleCancel}
        callbackConfirm={handleCancelTrue}
        description={'Quý khách có chắc chắn muốn lưu lệnh vừa tạo ?'} />
      <OtpModal
        visible={visibleOTP}
        callbackOtp={handleCallbackOTP}
        onCancel={() => setVisibleOTP((false))}
        phoneNumber={'123456789'} />
      <SuccessModal
        visible={visibleSuccess}
        callbackSuccess={() => setVisibleSuccess(false)}
        description={'Bạn đã lập lệnh thành công'} />
    </FilterTransferMethodWrapper>
  )
}

FilterTransferMethod.propTypes = {}

export default FilterTransferMethod