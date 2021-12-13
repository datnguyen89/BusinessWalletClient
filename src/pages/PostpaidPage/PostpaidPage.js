import React, { useEffect, useState } from 'react'
import {
  AreaCreateCommand, CreateCommandButton, InputEnterTax,
  PostpaidPageWrapper, ResultSearchForm,
  TitleFunds,
  TitleInfoService,
  WhiteRoundedInfoService,
} from './PostpaidPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Descriptions, Row } from 'antd'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'
import SearchMobileNetworkOperatorPostPaid from '../../components/SearchMobileNetworkOperatorPostPaid'

const PostpaidPage = props => {

  const { providerStore, customerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedTopupVoucher, setSelectedTopupVoucher ] = useState(null);
  const [countTopUpVoucher, setCountTopUpVoucher] = useState(0);
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true);

  const [fields, setFields] = useState(null);

  const handleSetPhoneNumber = (value) => {
    setPhoneNumber(value);
  }

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

  const handleEnterTax = (value) => {
    console.log(value);
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      "Nguồn tiền": selectedItem?.accountNumber,
      "Nhà cung cấp": selectedProvider?.name,
      "Sản phẩm": selectedTopupVoucher?.name,
      "Mệnh giá": selectedTopupVoucher?.denominations,
      "Giá bán": selectedTopupVoucher?.discount,
      "Số lượng": countTopUpVoucher,
      "Tổng tiền": countTopUpVoucher*selectedTopupVoucher?.discount + 'đ',
      "Phí giao dịch": '0đ',
      "Thành tiền": countTopUpVoucher*selectedTopupVoucher?.discount + 'đ'
    };
    setFields(arrField);
    setIsModalVisible(true);
  }

  const onChangeCountTopUpVouchers = (value) => {
    console.log(value);
    setCountTopUpVoucher(value);
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value);
  }

  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider]);

  useEffect(() => {
    if (selectedProvider && selectedItem && selectedTopupVoucher && countTopUpVoucher > 0 && !isNaN(countTopUpVoucher))
      setDisabledConfirmDeal(false);
    else
      setDisabledConfirmDeal(true);

  }, [selectedItem, selectedProvider, selectedTopupVoucher, countTopUpVoucher]);

  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp trả sau</title>
      </Helmet>
      <PostpaidPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.POSTPAID} />
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
                <SearchMobileNetworkOperatorPostPaid phoneNumber={phoneNumber} setPhoneNumber={handleSetPhoneNumber} selectedProvider={selectedProvider} handleSelectedProvider={handleSelectedProvider}></SearchMobileNetworkOperatorPostPaid>
              </WhiteRoundedInfoService>
              <WhiteRoundedInfoService margin={'0 0 16px 0'} padding={'16px 20px'}>
                <ResultSearchForm>
                  <Descriptions bordered column={1}>
                    <Descriptions.Item label="Nhà cung cấp" labelStyle={{width: "30%"}}>{}</Descriptions.Item>
                    <Descriptions.Item label="Tên khách hàng">{customerStore.customer?.customerName}</Descriptions.Item>
                    <Descriptions.Item label="Kỳ thanh toán" >{}</Descriptions.Item>
                    <Descriptions.Item label="Số dư nợ cước" >{}</Descriptions.Item>
                  </Descriptions>
                </ResultSearchForm>
                <InputEnterTax placeholder={"Nhập số tiền"} onChange={() => handleEnterTax() } />
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
      </PostpaidPageWrapper>
      <ModalCustomCommandForm
        title={"Xác nhận giao dịch"}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible}></ModalCustomCommandForm>
    </DefaultLayout>

  )
}

PostpaidPage.propTypes = {

}

export default inject('providerStore', 'customerStore')(observer(PostpaidPage))