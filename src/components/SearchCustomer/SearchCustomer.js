import React, { useEffect, useState } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { inject, observer } from 'mobx-react'
import { Button, Col, Descriptions, Row } from 'antd'
import {
  ResultSearchForm,
  SearchCustomerForm,
  SearchCustomerInput,
  SearchCustomerWrapper, SearchImg,
} from './SearchCustomerStyled'

const SearchCustomer = props => {
  const { resultSearchCustomer } = props

  return (
    <SearchCustomerWrapper>
      <SearchCustomerForm>
        <SearchCustomerInput
          placeholder="Nhập mã khách hàng"
          suffix={
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '20px' }} />
          }
        />
        <SearchImg src={require('../../media/icons/search_cus.png')} alt={"search_cus"}/>
      </SearchCustomerForm>
      <ResultSearchForm>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Nhà cung cấp" labelStyle={{width: "30%"}}>{resultSearchCustomer?.providerName}</Descriptions.Item>
          <Descriptions.Item label="Mã khách hàng">{resultSearchCustomer?.customerCode}</Descriptions.Item>
          <Descriptions.Item label="Tên khách hàng">{resultSearchCustomer?.customerName}</Descriptions.Item>
          <Descriptions.Item label="Địa chỉ" >{resultSearchCustomer?.customerAddress}</Descriptions.Item>
          <Descriptions.Item label="Kỳ thanh toán" >{resultSearchCustomer?.paymentTerm}</Descriptions.Item>
          <Descriptions.Item label="Số tiền" >{resultSearchCustomer?.taxPaid}</Descriptions.Item>
        </Descriptions>
      </ResultSearchForm>
    </SearchCustomerWrapper>
  )
}

SearchCustomer.propTypes = {
}

export default SearchCustomer