import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AreaCreateCommand, CreateCommandButton,
  TitleFunds,
  TitleInfoPayment,
  WaterBillPageWrapper,
  WhiteRoundedInfoPayment,
} from './WaterBillPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import Providers from '../../components/Providers'
import SearchCustomer from '../../components/SearchCustomer/SearchCustomer'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank'
import { toJS } from 'mobx'

const WaterBillPage = props => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickFunds = (value) => {
    setSelectedItem(value);
  }

  const handleCallbackHitBank = (value) => {
    setSelectedItem(value);
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Hóa đơn tiền nước</title>
      </Helmet>
      <WaterBillPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.WATER_BILL} />
        <WhiteRoundedBox margin={'0 16px 16px 16px'}>
          <Row>
            <Col span={24}>
              <TitleInfoPayment>Thông tin thanh toán</TitleInfoPayment>
            </Col>
          </Row>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <WhiteRoundedInfoPayment margin={'0 0 16px 0'}>
                <Providers></Providers>
              </WhiteRoundedInfoPayment>
            </Col>
            <Col span={6}></Col>
          </Row>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <SearchCustomer></SearchCustomer>
            </Col>
            <Col span={6}></Col>
          </Row>
          <Row>
            <Col span={24}>
              <TitleFunds>Nguồn tiền</TitleFunds>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <WhiteRoundedBox margin={'0 16px 0 0'}>
                    <DigitalWallet selectedItem={selectedItem} setClickFunds={handleClickFunds}></DigitalWallet>
                  </WhiteRoundedBox>
                </Col>
                <Col span={24}>
                  <WhiteRoundedBox margin={'16px 16px 0 0'}>
                    <LinkDirectedBank selectedItem={selectedItem} setClickFunds={handleClickFunds}></LinkDirectedBank>
                  </WhiteRoundedBox>
                </Col>
              </Row>
            </Col>
            <Col span={18}>
              <WhiteRoundedBox padding={'16px 0'}>
                <LinkInternalBank selectedItem={selectedItem} setClickFunds={handleClickFunds} callbackHitBank={handleCallbackHitBank}></LinkInternalBank>
              </WhiteRoundedBox>
            </Col>
          </Row>
          <AreaCreateCommand>
            <CreateCommandButton type='primary'>Tạo lệnh</CreateCommandButton>
          </AreaCreateCommand>
        </WhiteRoundedBox>
      </WaterBillPageWrapper>
    </DefaultLayout>

  )
}

WaterBillPage.propTypes = {

}

export default WaterBillPage