import React, { useEffect, useState } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { inject, observer } from 'mobx-react'
import { Button, Col, Descriptions, Row } from 'antd'
import {
  ResultSearchForm,
  SearchCustomerForm,
  SearchCustomerInput,
  SearchCustomerWrapper,
} from './SearchCustomerStyled'

const SearchCustomer = props => {
  const onSearch = value => console.log(value);


  return (
    <SearchCustomerWrapper>
      <SearchCustomerForm>
        <SearchCustomerInput
          placeholder="Nhập mã khách hàng"
          suffix={
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '20px' }} />
          }
        />
        <img src={require('../../media/icons/search_cus.png')} alt={"search_cus"}/>
      </SearchCustomerForm>
      <ResultSearchForm>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Tên khách hàng" labelStyle={{width: "30%"}}></Descriptions.Item>
          <Descriptions.Item label="Địa chỉ" ></Descriptions.Item>
          <Descriptions.Item label="Kỳ thanh toán" ></Descriptions.Item>
          <Descriptions.Item label="Số tiền" ></Descriptions.Item>
        </Descriptions>
      </ResultSearchForm>
    </SearchCustomerWrapper>
  )
}

SearchCustomer.propTypes = {
}

export default SearchCustomer