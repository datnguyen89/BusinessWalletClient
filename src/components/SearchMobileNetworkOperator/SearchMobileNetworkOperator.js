import React, { useEffect } from 'react'
import {
  ImageProviderArea, ImgWrapper, ProviderWrapper, SearchInputPhoneNumber,
  TagProvider,
} from './SearchMobileNetworkOperatorStyled'
import { inject, observer } from 'mobx-react'
import HorizontalScroll from 'react-scroll-horizontal'

const _ = require('lodash')

const SearchMobileNetworkOperator = props => {
  const { mobileNetworkOperatorStore, selectedProvider, handleSelectedProvider, setPhoneNumber } = props


  useEffect(() => {
    mobileNetworkOperatorStore.getServicePlanMobile()
  }, [])

  const handlerSetSelectProvider = (value) => {
    handleSelectedProvider(value)
  }

  const handleOnChange = (value) => {
    setPhoneNumber(value.target.value)
  }

  return (
    <ProviderWrapper>
      <SearchInputPhoneNumber placeholder={'Nhập số điện thoại'} onChange={(value) => handleOnChange(value)} />
      <HorizontalScroll pageLock={true} reverseScroll={true} style={{ width: '100%', height: 76 }}>
        {
          mobileNetworkOperatorStore.mobileNetworkOperators.map(item =>
            <ImageProviderArea onClick={() => handlerSetSelectProvider(item)} key={item.id}>
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

SearchMobileNetworkOperator.propTypes = {}

export default inject('mobileNetworkOperatorStore')(observer(SearchMobileNetworkOperator))