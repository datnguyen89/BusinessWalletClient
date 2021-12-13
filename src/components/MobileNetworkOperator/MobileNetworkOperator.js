import React, { useEffect } from 'react'
import {ImageProviderArea, ProviderWrapper,
  TagProvider, TitlePickProviders,
} from './MobileNetworkOperatorStyled'
import { inject, observer } from 'mobx-react'

const _ = require('lodash')

const MobileNetworkOperator = props => {
  const { mobileNetworkOperatorStore, selectedProvider, handleSelectedProvider } = props


  useEffect(() => {
    mobileNetworkOperatorStore.getMobileNetworkOperators();
  }, []);

  const handlerSetSelectProvider = (value) => {
    handleSelectedProvider(value);
  }

  return (
    <ProviderWrapper>
      <TitlePickProviders>Chọn nhà cung cấp</TitlePickProviders>
      <TagProvider>
        {
          mobileNetworkOperatorStore.mobileNetworkOperators.map(item =>
            <ImageProviderArea onClick={() => handlerSetSelectProvider(item)} key={item.id} src={item.imageUrl} alt={item.name} borderColor={item.id === selectedProvider?.id ? '#0465B0' : '#E0E0E0'} />
          )
        }
      </TagProvider>
    </ProviderWrapper>
  )
}

MobileNetworkOperator.propTypes = {
}

export default inject('mobileNetworkOperatorStore')(observer(MobileNetworkOperator))