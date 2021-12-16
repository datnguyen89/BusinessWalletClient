import React, { useEffect } from 'react'
import {
  ImageProviderArea, ProviderWrapper, ScrollbarsCustom,
  TitlePickProviders,
} from './MobileNetworkOperatorStyled'
import { inject, observer } from 'mobx-react'

const _ = require('lodash')

const MobileNetworkOperator = props => {
  const { mobileNetworkOperatorStore, selectedProvider, handleSelectedProvider } = props


  useEffect(() => {
    mobileNetworkOperatorStore.getMobileNetworkOperators()
  }, [])

  const handlerSetSelectProvider = (value) => {
    handleSelectedProvider(value)
  }

  return (
    <ProviderWrapper>
      <TitlePickProviders>Chọn nhà cung cấp</TitlePickProviders>
      <ScrollbarsCustom style={{ width: '100%', height: 89 }}>
        {
          mobileNetworkOperatorStore.mobileNetworkOperators.map(item =>
            <ImageProviderArea
              onClick={() => handlerSetSelectProvider(item)}
              key={item.id}
              src={item.imageUrl}
              alt={item.name}
              borderColor={item.id === selectedProvider?.id ? '#0465B0' : '#E0E0E0'} />,
          )
        }
      </ScrollbarsCustom>
    </ProviderWrapper>
  )
}

MobileNetworkOperator.propTypes = {}

export default inject('mobileNetworkOperatorStore')(observer(MobileNetworkOperator))