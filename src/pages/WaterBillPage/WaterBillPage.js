import React, { useEffect, useState } from 'react'
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
import { inject, observer } from 'mobx-react'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'

const WaterBillPage = props => {

  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [customerBySearch, setCustomerBySearch] = useState(null);
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true);
  const [fields, setFields] = useState(null);

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
    let arrField = {
      "Nguồn tiền": selectedItem?.accountNumber,
      "Nhà cung cấp": selectedProvider?.providerName,
      "Mã khách hàng": customerBySearch?.customerCode,
      "Tên khách hàng": customerBySearch?.customerName,
      "Địa chỉ": customerBySearch?.customerAddress,
      "Số tiền": customerBySearch?.tax + 'đ',
      "Giá bán": customerBySearch?.tax + 'đ',
      "Phí giao dịch": '0đ',
      "Thành tiền": customerBySearch?.tax + 'đ'
    };
    setFields(arrField);
    setIsModalVisible(true);
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value);
  }

  const handleSetCustomerBySearch = (value) => {
    setCustomerBySearch(value);
  }
  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider]);

  useEffect(() => {
    if (selectedProvider && selectedItem)
      setDisabledConfirmDeal(false);
    else
      setDisabledConfirmDeal(true);

  }, [selectedItem, selectedProvider]);

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
                <Providers placeholder={"Tìm kiếm nhà cung cấp"} selectedProvider={selectedProvider} handleSelectedProvider={handleSelectedProvider}></Providers>
              </WhiteRoundedInfoPayment>
            </Col>
            <Col span={6}></Col>
          </Row>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <SearchCustomer placeholder={"Nhập mã khách hàng"} resultSearchCustomer={selectedProvider} setCustomerBySearch={handleSetCustomerBySearch}></SearchCustomer>
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
            <CreateCommandButton type={disabledConfirmDeal ? 'default' : 'primary'} onClick={showModalConfirmDeal} disabled={disabledConfirmDeal}>Tạo lệnh</CreateCommandButton>
          </AreaCreateCommand>
        </WhiteRoundedBox>
      </WaterBillPageWrapper>
      <ModalCustomCommandForm
        title={"Xác nhận giao dịch"}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible}></ModalCustomCommandForm>
    </DefaultLayout>
  )
}

WaterBillPage.propTypes = {

}

export default inject('providerStore')(observer(WaterBillPage))