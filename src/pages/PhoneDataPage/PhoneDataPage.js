import React, { useEffect, useState } from 'react'
import { PhoneDataPageWrapper } from './PhoneDataPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Descriptions, message, Row } from 'antd'
import {
  AreaCreateCommand, CreateCommandButton, ModalCustom, ResultSearchForm,
  TitleFunds
} from '../WaterBillPage/WaterBillPageStyled'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import OtpModal from '../../components/OtpModal'
import SuccessModal from '../../components/SuccessModal'
import { inject, observer } from 'mobx-react'
import { InputCount, TitleInfoService, WhiteRoundedInfoService } from '../CardDataPage/CardDataPageStyled'
import SearchMobileNetworkOperator from '../../components/SearchMobileNetworkOperator'
import ServicePlanMobileData from '../../components/ServicePlanMobileData'
import { toJS } from 'mobx'

const PhoneDataPage = props => {

  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedTopupVoucher, setSelectedTopupVoucher ] = useState(null);
  const [visibleOtp, setVisibleOtp] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true);

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
    setIsModalVisible(true);
  }

  const handleSetPhoneNumber = (value) => {
    console.log(value);
    setPhoneNumber(value);
  }

  const handleOk = () => {
    setIsModalVisible(false);
    setVisibleOtp(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSuccessActiveCommand = () => {
    setVisibleSuccess(false)
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

  const handleSubmitOtp = (otp) => {
    if (otp === '123456') {
      setVisibleOtp(false)
      setVisibleSuccess(true)
    } else {
      message.error('OTP không chính xác')
    }
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
                <SearchMobileNetworkOperator phoneNumber={phoneNumber} setPhoneNumber={handleSetPhoneNumber} selectedProvider={selectedProvider} handleSelectedProvider={handleSelectedProvider}></SearchMobileNetworkOperator>
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
      <ModalCustom title="Xác nhận giao dịch" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} okText={"Xác nhận"} maskClosable={"true"} closable={true}>
        <ResultSearchForm>
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Nguồn tiền" labelStyle={{width: "30%"}}>{selectedItem?.accountNumber}</Descriptions.Item>
            <Descriptions.Item label="Nhà cung cấp" labelStyle={{width: "30%"}}>{selectedProvider?.name}</Descriptions.Item>
            <Descriptions.Item label="Dịch vụ" labelStyle={{width: "30%"}}>Nạp Data {selectedProvider?.name}</Descriptions.Item>
            <Descriptions.Item label="Sản phẩm">{selectedTopupVoucher?.name}</Descriptions.Item>
            <Descriptions.Item label="Mệnh giá">{selectedTopupVoucher?.denominations}</Descriptions.Item>
            <Descriptions.Item label="Giá bán" >{selectedTopupVoucher?.discount}</Descriptions.Item>
            <Descriptions.Item label="Số điện thoại" >{phoneNumber}</Descriptions.Item>
            <Descriptions.Item label="Tổng tiền" >{selectedTopupVoucher?.discount}đ</Descriptions.Item>
            <Descriptions.Item label="Phí giao dịch" >0đ</Descriptions.Item>
            <Descriptions.Item label="Thành tiền" >{selectedTopupVoucher?.discount}đ</Descriptions.Item>
          </Descriptions>
        </ResultSearchForm>
      </ModalCustom>
      <OtpModal
        phoneNumber={'0379631004'}
        callbackOtp={handleSubmitOtp}
        visible={visibleOtp}
        onCancel={() => setVisibleOtp(false)} />
      <SuccessModal visible={visibleSuccess} description={'Bạn đã lập lệnh thành công'}
                    callbackSuccess={handleSuccessActiveCommand} />
    </DefaultLayout>

  )
}

PhoneDataPage.propTypes = {

}

export default inject('providerStore')(observer(PhoneDataPage))