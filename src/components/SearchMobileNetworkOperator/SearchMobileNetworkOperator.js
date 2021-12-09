import React, { useEffect } from 'react'
import {
  ImageProviderArea, ProviderWrapper, SearchInputPhoneNumber,
  TagProvider,
} from './SearchMobileNetworkOperatorStyled'
import { inject, observer } from 'mobx-react'

const _ = require('lodash')

const SearchMobileNetworkOperator = props => {
  const { mobileNetworkOperatorStore, selectedProvider, handleSelectedProvider, setPhoneNumber } = props


  useEffect(() => {
    mobileNetworkOperatorStore.getServicePlanMobile();
  }, []);

  const handlerSetSelectProvider = (value) => {
    handleSelectedProvider(value);
  }

  const handleOnChange = (value) => {
    setPhoneNumber(value.target.value);
  }
                         
  return (
    <ProviderWrapper>
      <SearchInputPhoneNumber placeholder={"Nhập số điện thoại"} onChange={(value) => handleOnChange(value)} />
      <TagProvider>
        {
          mobileNetworkOperatorStore.mobileNetworkOperators.map(item =>
            <ImageProviderArea onClick={() => handlerSetSelectProvider(item)} key={item.id} borderColor={item.id === selectedProvider?.id ? '#0465B0' : '#E0E0E0'}>
              <img src={item.imageUrl} alt={item.name} />
            </ImageProviderArea>
          )
        }
      </TagProvider>
    </ProviderWrapper>
  )
}

SearchMobileNetworkOperator.propTypes = {
}

export default inject('mobileNetworkOperatorStore')(observer(SearchMobileNetworkOperator))