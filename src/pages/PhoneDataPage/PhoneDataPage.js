import React, { useEffect, useState } from 'react'
import { PhoneDataPageWrapper } from './PhoneDataPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import {
  AreaCreateCommand, CreateCommandButton, ModalCustom, ResultSearchForm,
  TitleFunds
} from '../WaterBillPage/WaterBillPageStyled'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import { inject, observer } from 'mobx-react'
import { TitleInfoService, WhiteRoundedInfoService } from '../CardDataPage/CardDataPageStyled'
import SearchMobileNetworkOperator from '../../components/SearchMobileNetworkOperator'
import ServicePlanMobileData from '../../components/ServicePlanMobileData'
import { toJS } from 'mobx'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm'

const PhoneDataPage = props => {

  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedTopupVoucher, setSelectedTopupVoucher ] = useState(null);
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true);

  const [fields, setFields] = useState(null);

  const handleClickFunds = (value) => {
    setSelectedItem(value);
  }

  const handleCallbackHitBank = (value) => {
    console.log(toJS(value));
    setSelectedItem(value);
  }

  const handleSelectedProvider = (value) => {
    setSelectedProvider(value);
    setSelectedTopupVoucher(null);
  }

  const handleSelectedTopupVoucher = (value) => {
    setSelectedTopupVoucher(value);
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      "Nguồn tiền": selectedItem?.accountNumber,
      "Nhà cung cấp": selectedProvider?.name,
      "Dịch vụ": selectedProvider?.name,
      "Sản phẩm": selectedTopupVoucher?.name,
      "Mệnh giá": selectedTopupVoucher?.denominations,
      "Giá bán": selectedTopupVoucher?.discount,
      "Số điện thoại": phoneNumber,
      "Tổng tiền": selectedTopupVoucher?.discount + 'đ',
      "Phí giao dịch": '0đ',
      "Thành tiền": selectedTopupVoucher?.discount + 'đ'
    };
    setFields(arrField);
    setIsModalVisible(true);
  }

  const handleSetPhoneNumber = (value) => {
    setPhoneNumber(value);
  }

  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider]);

  useEffect(() => {
    if (selectedProvider && selectedItem && selectedTopupVoucher && !isNaN(phoneNumber))
      setDisabledConfirmDeal(false);
    else
      setDisabledConfirmDeal(true);

  }, [selectedItem, selectedProvider, selectedTopupVoucher, phoneNumber]);

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value);
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp data điện thoại</title>
      </Helmet>
      <PhoneDataPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.PHONE_DATA} />
        <WhiteRoundedBox margin={'0 16px 16px 16px'}>
          <Row>
            <Col span={24}>
              <TitleInfoService>Chọn nhà cung cấp</TitleInfoService>
            </Col>
          </Row>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <SearchMobileNetworkOperator phoneNumber={phoneNumber} setPhoneNumber={handleSetPhoneNumber} selectedProvider={selectedProvider} handleSelectedProvider={handleSelectedProvider} />
              </WhiteRoundedInfoService>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <ServicePlanMobileData selectedTopupVoucher={selectedTopupVoucher} handleSelectedTopupVoucher={handleSelectedTopupVoucher}></ServicePlanMobileData>
              </WhiteRoundedInfoService>
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
      </PhoneDataPageWrapper>
      <ModalCustomCommandForm
        title={"Xác nhận giao dịch"}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible}></ModalCustomCommandForm>
    </DefaultLayout>

  )
}

PhoneDataPage.propTypes = {

}

export default inject('providerStore')(observer(PhoneDataPage))