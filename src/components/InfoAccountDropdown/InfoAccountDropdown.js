import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { toJS } from 'mobx'
import {
  InfoAccountDropdownContent, InfoAccountDropdownMoney, InfoAccountDropdownPhone,
  InfoAccountDropdownTitle,
  InfoAccountDropdownWrapper,
} from './InfoAccountDropdownStyled'

const InfoAccountDropdownDropdown = props => {
  const { data, enableBorder } = props
  return (

      data ? <InfoAccountDropdownWrapper border={enableBorder} borderColor={data.default ? '#0465B0' : '#E0E0E0'}>
      <InfoAccountDropdownTitle>Tài khoản ví</InfoAccountDropdownTitle>
      <InfoAccountDropdownContent>{data.bankname}</InfoAccountDropdownContent>
      <InfoAccountDropdownPhone>{data.phoneNumber}</InfoAccountDropdownPhone>
      <InfoAccountDropdownMoney>{data.accountBalance}<span>đ</span></InfoAccountDropdownMoney>
    </InfoAccountDropdownWrapper> : <div></div>


  )
}

InfoAccountDropdownDropdown.propTypes = {
  callbackBankAccount: PropTypes.func,
  enableBorder: PropTypes.bool.isRequired
}

export default InfoAccountDropdownDropdown