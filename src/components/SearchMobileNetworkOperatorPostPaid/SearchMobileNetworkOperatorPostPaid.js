import React, { useEffect, useState } from 'react'
import {
  ImageProviderArea, ImgWrapper, ProviderWrapper, SearchImg, SearchInputPhoneNumber,
} from './SearchMobileNetworkOperatorPostPaidStyled'
import { inject, observer } from 'mobx-react'
import HorizontalScroll from 'react-scroll-horizontal'
import { toJS } from 'mobx'

const _ = require('lodash')

const SearchMobileNetworkOperatorPostPaid = props => {
  const { selectedProvider, handleSelectedProvider, phoneNumber, setPhoneNumber, customerStore, mobileNetworkOperatorStore, setCustomer } = props


  useEffect(() => {
    mobileNetworkOperatorStore.getServicePlanMobile();
  }, []);

  const handleOnChange = (value) => {
    setPhoneNumber(value.target.value);
  }

  const handleSearchCustomer = () => {
    customerStore.getCustomerByPhoneNumber(phoneNumber)
      .then(res => {
        let itemMatched = toJS(mobileNetworkOperatorStore.mobileNetworkOperators).find(item => item.id === toJS(res).customerNetworkMobileId);
        if (itemMatched) {
          handleSelectedProvider(itemMatched);
          setCustomer(res);
        }
      })
  }
                         
  return (
    <ProviderWrapper>
      <SearchInputPhoneNumber placeholder={"Nhập số điện thoại"} onChange={(value) => handleOnChange(value)} />
      <SearchImg src={require('../../media/icons/search_cus.png')} alt={"search_cus"} onClick={handleSearchCustomer}/>
      <HorizontalScroll pageLock={true} reverseScroll={true} style={{ width: '100%', height: 76 }}>
        {
          mobileNetworkOperatorStore.mobileNetworkOperators.map(item =>
            <ImageProviderArea key={item.id}>
              <ImgWrapper borderColor={item.id === selectedProvider?.id ? '#0465B0' : '#E0E0E0'}>
                <img src={item.imageUrl} alt={item.name} />
              </ImgWrapper>
            </ImageProviderArea>,
          )
        }
      </HorizontalScroll>
    </ProviderWrapper>
  )
}

SearchMobileNetworkOperatorPostPaid.propTypes = {
}

export default inject('mobileNetworkOperatorStore', 'customerStore')(observer(SearchMobileNetworkOperatorPostPaid))