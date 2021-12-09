import React, { useEffect } from 'react'
import {
  DiscountText,
  ProviderWrapper,
  TagProvider, TitlePickProviders, TopupVoucherContent, TopupVoucherData, TopupVoucherPrice, TopupVouchersArea,
} from './ServicePlanMobileDataStyled'
import { inject, observer } from 'mobx-react'

const _ = require('lodash')

const ServicePlanMobileData = props => {
  const { mobileNetworkOperatorStore, selectedTopupVoucher, handleSelectedTopupVoucher } = props


  useEffect(() => {
    mobileNetworkOperatorStore.getTopupVoucher();
  }, []);

  const handlerSetSelectTopuVoucher = (value) => {
    handleSelectedTopupVoucher(value);
  }

  return (
    <ProviderWrapper>
      <TitlePickProviders>Chọn mệnh giá</TitlePickProviders>
      <TagProvider>
        {
          mobileNetworkOperatorStore.topUpVouchers.map(item =>
            <TopupVouchersArea span={6} onClick={() => handlerSetSelectTopuVoucher(item)} key={item.id}>
                <TopupVoucherContent
                  borderColor={item.id === selectedTopupVoucher?.id ? '#0465B0' : '#E0E0E0'}
                  color={item.id === selectedTopupVoucher?.id ? '#0465B0' : '#333333'}>
                  <TopupVoucherPrice>
                    <h4>{item.denominations}<span>đ</span></h4>
                    <DiscountText colorText={item.id === selectedTopupVoucher?.id ? '#0465B0' : '#B4B4B4'}>{item.discount}<span>đ</span></DiscountText>
                  </TopupVoucherPrice>
                  <TopupVoucherData>
                    <h5>{item.data}/</h5>
                    <h6>{item.rangeTimeValid}</h6>
                  </TopupVoucherData>
                </TopupVoucherContent>
            </TopupVouchersArea>
          )
        }
      </TagProvider>
    </ProviderWrapper>
  )
}

ServicePlanMobileData.propTypes = {
}

export default inject('mobileNetworkOperatorStore')(observer(ServicePlanMobileData))