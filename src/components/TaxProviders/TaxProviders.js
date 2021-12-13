import React, { useEffect, useState } from 'react'
import {
  AliasProvider,
  AreaProvider,
  ContentProvider, ImgIconProvider, NameProvider,
  SearchProvider, SearchProviderWrapper,
  TagAreaProvider, TaxProvidersWrapper,
} from './TaxProvidersStyled'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { inject, observer } from 'mobx-react'

const _ = require('lodash')

const TaxProviders = props => {
  const { selectedProvider, handleSelectedProvider, placeholder, data } = props

  const handlerSetSelectProvider = (value) => {
    handleSelectedProvider(value)
  }

  return (
    <TaxProvidersWrapper>
      <SearchProviderWrapper>
        <SearchProvider
          placeholder={placeholder}
          suffix={
            <SearchOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '20px' }} />
          }
        />
      </SearchProviderWrapper>
      <AreaProvider style={{ width: '100%', height: 300 }}>
        <Row>
          {
            data?.map(item =>
              (
                <Col span={12} key={item.id}>
                  <TagAreaProvider borderColor={item.id === selectedProvider?.id ? '#0465B0' : '#E0E0E0'}
                                   onClick={() => handlerSetSelectProvider(item)}>
                    <ImgIconProvider>
                      <img src={item.imageUrl} alt={'icon_provider.svg'} />
                    </ImgIconProvider>
                    <ContentProvider>
                      <AliasProvider>{item.name}</AliasProvider>
                      <NameProvider>{item.description}</NameProvider>
                    </ContentProvider>
                  </TagAreaProvider>
                </Col>
              ),
            )
          }
        </Row>
      </AreaProvider>
    </TaxProvidersWrapper>
  )
}

TaxProviders.propTypes = {}

export default inject('customerStore')(observer(TaxProviders))