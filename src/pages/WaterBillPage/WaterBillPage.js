import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AreaCreateCommand, CreateCommandButton, ModalCustom, ResultSearchForm,
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
import { Col, Descriptions, Row } from 'antd'
import Providers from '../../components/Providers'
import SearchCustomer from '../../components/SearchCustomer/SearchCustomer'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank'
import { inject, observer } from 'mobx-react'

const WaterBillPage = props => {

  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleClickFunds = (value) => {
    setSelectedItem(value);
  }

  const handleCallbackHitBank = (value) => {
    setSelectedItem(value);
  }

  const handleSelectedProvider = (value) => {
    setSelectedProvider(value);
  }

  const showModalConfirmDeal = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider]);

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
                <Providers selectedProvider={selectedProvider} handleSelectedProvider={handleSelectedProvider}></Providers>
              </WhiteRoundedInfoPayment>
            </Col>
            <Col span={6}></Col>
          </Row>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <SearchCustomer resultSearchCustomer={selectedProvider}></SearchCustomer>
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
            <CreateCommandButton type='primary' onClick={showModalConfirmDeal}>Tạo lệnh</CreateCommandButton>
          </AreaCreateCommand>
        </WhiteRoundedBox>
      </WaterBillPageWrapper>
      <ModalCustom title="Xác nhận giao dịch" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} okText={"Xác nhận"} maskClosable={"true"} closable={true}>
        <ResultSearchForm>
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Nguồn tiền" labelStyle={{width: "30%"}}>{selectedItem?.accountNumber}</Descriptions.Item>
            <Descriptions.Item label="Nhà cung cấp" labelStyle={{width: "30%"}}>{selectedProvider?.providerName}</Descriptions.Item>
            <Descriptions.Item label="Mã khách hàng">{selectedProvider?.customerCode}</Descriptions.Item>
            <Descriptions.Item label="Tên khách hàng">{selectedProvider?.customerName}</Descriptions.Item>
            <Descriptions.Item label="Địa chỉ" >{selectedProvider?.customerAddress}</Descriptions.Item>
            <Descriptions.Item label="Số tiền" >{selectedProvider?.taxPaid}</Descriptions.Item>
            <Descriptions.Item label="Giá bán" >{selectedProvider?.taxPaid}</Descriptions.Item>
            <Descriptions.Item label="Phí giao dịch" >{selectedProvider?.taxPaid}</Descriptions.Item>
            <Descriptions.Item label="Tổng tiền" >{selectedProvider?.taxPaid}</Descriptions.Item>
          </Descriptions>
        </ResultSearchForm>
      </ModalCustom>
    </DefaultLayout>
  )
}

WaterBillPage.propTypes = {

}

export default inject('providerStore')(observer(WaterBillPage))