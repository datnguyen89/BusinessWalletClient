import React, { useEffect } from 'react'
import {
  ImageProviderArea, ProviderWrapper, SearchImg, SearchInputPhoneNumber,
  TagProvider,
} from './SearchMobileNetworkOperatorPostPaidStyled'
import { inject, observer } from 'mobx-react'

const _ = require('lodash')

const SearchMobileNetworkOperatorPostPaid = props => {
  const { selectedProvider, handleSelectedProvider, setPhoneNumber, customerStore, mobileNetworkOperatorStore } = props


  useEffect(() => {
    mobileNetworkOperatorStore.getServicePlanMobile();
  }, []);

  // const handlerSetSelectProvider = (value) => {
  //   handleSelectedProvider(value);
  // }

  const handleOnChange = (value) => {
    setPhoneNumber(value.target.value);
    customerStore.getCustomerByPhoneNumber(value)
      .then(res => {
        var itemMatched = mobileNetworkOperatorStore.mobileNetworkOperators.filter(item => item.id === res.customerNetworkMobileId);
        if (itemMatched) {
          handleSelectedProvider(itemMatched);
        }
      })
  }

  const handleSearchCustomer = (value) => {
    console.log(value.target);
    customerStore.getCustomerByCode(value)
      .then(res => {
        customerStore.setCustomerByCode(res);
      });
  }
                         
  return (
    <ProviderWrapper>
      <SearchInputPhoneNumber placeholder={"Nhập số điện thoại"} onChange={(value) => handleOnChange(value)} />
      <SearchImg src={require('../../media/icons/search_cus.png')} alt={"search_cus"} onClick={handleSearchCustomer}/>
      <TagProvider>
        {
          mobileNetworkOperatorStore.mobileNetworkOperators.map(item =>
            <ImageProviderArea key={item.id} borderColor={item.id === selectedProvider?.id ? '#0465B0' : '#E0E0E0'}>
              <img src={item.imageUrl} alt={item.name} />
            </ImageProviderArea>
          )
        }
      </TagProvider>
    </ProviderWrapper>
  )
}

SearchMobileNetworkOperatorPostPaid.propTypes = {
}

export default inject('mobileNetworkOperatorStore', 'customerStore')(observer(SearchMobileNetworkOperatorPostPaid))