import React, { useEffect, useState } from 'react'
import {
  AreaCreateCommand,
  CardDataPageWrapper, CreateCommandButton, InputCount, TitleFunds,
  TitleInfoService,
  WhiteRoundedInfoService,
} from './CardDataPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Descriptions, InputNumber, message, Row } from 'antd'
import MobileNetworkOperator from '../../components/MobileNetworkOperator'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank'
import { inject, observer } from 'mobx-react'
import ServicePlanMobile from '../../components/ServicePlanMobile'
import { ModalCustom, ResultSearchForm } from '../WaterBillPage/WaterBillPageStyled'
import OtpModal from '../../components/OtpModal'
import SuccessModal from '../../components/SuccessModal'

const CardDataPage = props => {
  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedTopupVoucher, setSelectedTopupVoucher ] = useState(null);
  const [visibleOtp, setVisibleOtp] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [countTopupVoucher, setCountTopupVoucher] = useState(0);
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true);

  const handleClickFunds = (value) => {
    setSelectedItem(value);
  }

  const handleCallbackHitBank = (value) => {
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

  const onChangeCountTopupVouchers = (value) => {
    console.log(value);
    setCountTopupVoucher(value);
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
    if (selectedProvider && selectedItem && selectedTopupVoucher && countTopupVoucher > 0)
      setDisabledConfirmDeal(false);
     else
      setDisabledConfirmDeal(true);

  }, [selectedItem, selectedProvider, selectedTopupVoucher, countTopupVoucher]);

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
        <title>Mã thẻ data</title>
      </Helmet>
      <CardDataPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.CARD_DATA} />
        <WhiteRoundedBox margin={'0 16px 16px 16px'}>
          <Row>
            <Col span={24}>
              <TitleInfoService>Thông tin dịch vụ</TitleInfoService>
            </Col>
          </Row>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <MobileNetworkOperator selectedProvider={selectedProvider} handleSelectedProvider={handleSelectedProvider}></MobileNetworkOperator>
              </WhiteRoundedInfoService>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <ServicePlanMobile selectedTopupVoucher={selectedTopupVoucher} handleSelectedTopupVoucher={handleSelectedTopupVoucher}></ServicePlanMobile>
              </WhiteRoundedInfoService>

              <InputCount min={1} defaultValue={"Nhập số lượng"} onChange={onChangeCountTopupVouchers}/>
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
      </CardDataPageWrapper>
      <ModalCustom title="Xác nhận giao dịch" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} okText={"Xác nhận"} maskClosable={"true"} closable={true}>
        <ResultSearchForm>
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Nguồn tiền" labelStyle={{width: "30%"}}>{selectedItem?.accountNumber}</Descriptions.Item>
            <Descriptions.Item label="Nhà cung cấp" labelStyle={{width: "30%"}}>{selectedProvider?.name}</Descriptions.Item>
            <Descriptions.Item label="Sản phẩm">{selectedTopupVoucher?.name}</Descriptions.Item>
            <Descriptions.Item label="Mệnh giá">{selectedTopupVoucher?.denominations}</Descriptions.Item>
            <Descriptions.Item label="Giá bán" >{selectedTopupVoucher?.discount}</Descriptions.Item>
            <Descriptions.Item label="Số lượng" >{countTopupVoucher}</Descriptions.Item>
            <Descriptions.Item label="Tổng tiền" >{countTopupVoucher*selectedTopupVoucher?.discount}đ</Descriptions.Item>
            <Descriptions.Item label="Phí giao dịch" >0đ</Descriptions.Item>
            <Descriptions.Item label="Thành tiền" >{countTopupVoucher*selectedTopupVoucher?.discount}đ</Descriptions.Item>
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

CardDataPage.propTypes = {

}

export default inject('providerStore')(observer(CardDataPage))