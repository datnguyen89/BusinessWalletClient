import React, { useEffect, useState } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { inject, observer } from 'mobx-react'
import { Descriptions } from 'antd'
import {
  ResultSearchForm,
  SearchCustomerForm,
  SearchCustomerInput,
  SearchCustomerWrapper, SearchImg,
} from './SearchCustomerStyled'
import { toJS } from 'mobx'

const SearchCustomer = props => {

  const { resultSearchCustomer, setCustomerBySearch, customerStore, placeholder } = props

  const [ searchText, setSearchText ] = useState("");
  const [ customerSearch, setCustomerSearch ] = useState(null);

  const handleSearchCustomer = (value) => {
    if (searchText === "") {
      setCustomerBySearch(null);
      setCustomerSearch(null);
    } else {
      customerStore.getCustomerByCode(value)
        .then(res => {
          setCustomerSearch(res);
          console.log(toJS(customerStore.customer));
          setCustomerBySearch(res);
        });
    }
  }
  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <SearchCustomerWrapper>
      <SearchCustomerForm>
        <SearchCustomerInput
          placeholder={placeholder}
          suffix={
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '20px' }} />
          }
          onChange={handleOnChange}
        />
        <SearchImg src={require('../../media/icons/search_cus.png')} alt={"search_cus"} onClick={handleSearchCustomer}/>
      </SearchCustomerForm>
      <ResultSearchForm>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Nhà cung cấp" labelStyle={{width: "30%"}}>{resultSearchCustomer?.providerName}</Descriptions.Item>
          <Descriptions.Item label="Mã khách hàng">{customerSearch?.customerCode}</Descriptions.Item>
          <Descriptions.Item label="Tên khách hàng">{customerSearch?.customerName}</Descriptions.Item>
          <Descriptions.Item label="Địa chỉ" >{customerSearch?.customerAddress}</Descriptions.Item>
          <Descriptions.Item label="Kỳ thanh toán" >{customerSearch?.payTerms}</Descriptions.Item>
          <Descriptions.Item label="Số tiền" >{customerSearch?.tax}</Descriptions.Item>
        </Descriptions>
      </ResultSearchForm>
    </SearchCustomerWrapper>
  )
}

SearchCustomer.propTypes = {
}

export default inject('customerStore')(observer(SearchCustomer))