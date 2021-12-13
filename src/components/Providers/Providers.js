import React, { useEffect, useState } from 'react'
import {
  AliasProvider,
  AreaProvider,
  ButtonProviderArea, ContentProvider, ImgIconProvider, NameProvider,
  ProviderWrapper,
  SearchProvider, SearchProviderWrapper,
  TagAreaProvider,
  TagProvider,
} from './ProvidersStyled'
import { SearchOutlined } from '@ant-design/icons'
import { inject, observer } from 'mobx-react'
import { Button, Col, Row } from 'antd'

const _ = require('lodash')

const Providers = props => {
  const { providerStore, selectedProvider, handleSelectedProvider } = props
  const onSearch = value => console.log(value);

  useEffect(() => {
    providerStore.getProviderAreas()
  }, []);

  useEffect(() => {
    providerStore.getProviders()
  }, []);

  const handlerSetSelectProvider = (value) => {
    handleSelectedProvider(value);
  }

  return (
    <ProviderWrapper>
      <SearchProviderWrapper>
        <SearchProvider
          placeholder="Tìm kiếm nhà cung cấp"
          suffix={
            <SearchOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '20px' }} />
          }
        />
      </SearchProviderWrapper>
      <TagProvider>
        {
          providerStore.areas.map(item =>
            <ButtonProviderArea key={item.id}>{item.area}</ButtonProviderArea>
          )
        }
      </TagProvider>
      <AreaProvider>
        <Row>
          {
            providerStore.providers.map(item =>
              (
                  <Col span={12} key={item.id}>
                    <TagAreaProvider borderColor={item.id === selectedProvider?.id ? '#0465B0' : '#E0E0E0'} onClick={() => handlerSetSelectProvider(item)}>
                      <ImgIconProvider>
                        <img src={require('../../media/icons/icon_provider.svg')} alt={'icon_provider.svg'} />
                      </ImgIconProvider>
                      <ContentProvider>
                        <AliasProvider>{item.area}</AliasProvider>
                        <NameProvider>{item.providerName}</NameProvider>
                      </ContentProvider>
                    </TagAreaProvider>
                  </Col>
              )
            )
          }
        </Row>
      </AreaProvider>
    </ProviderWrapper>
  )
}

Providers.propTypes = {
}

export default inject('providerStore')(observer(Providers))