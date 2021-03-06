import React, { useEffect, useState } from 'react'
import {
  AreaCreateCommand, CreateCommandButton, FormSearch, ResultSearchForm, SearchImg, SearchInputPhoneNumber,
  TitleFunds,
  TitleInfoPayment,
  WaterBillPageWrapper,
  WhiteRoundedInfoPayment, WhiteRoundedInfoSearchCustomer,
} from './WaterBillPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import Providers from '../../components/Providers'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank'
import { inject, observer } from 'mobx-react'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { InfoCircleOutlined } from '@ant-design/icons'
import DescriptionsCustom from '../../components/DescriptionsCustom'
import numberUtils from '../../utils/numberUtils'

const WaterBillPage = props => {

  const { customerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [customerBySearch, setCustomerBySearch] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [customer, setCustomer] = useState(null)

  const [fieldsModal, setFieldsModal] = useState(null)
  const [fieldsDescription, setFieldsDescription] = useState(null)

  const handleClickFunds = (value) => {
    setSelectedItem(value)
  }

  const handleCallbackHitBank = (value) => {
    setSelectedItem(value)
  }

  const handleSelectedProvider = (value) => {
    setSelectedProvider(value)
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      'Ngu???n ti???n': selectedItem?.accountNumber,
      'Nh?? cung c???p': selectedProvider?.name,
      'M?? kh??ch h??ng': customer?.customerCode,
      'T??n kh??ch h??ng': customer?.customerName,
      '?????a ch???': customer?.customerAddress,
      'S??? ti???n': numberUtils.thousandSeparator(customer.tax) + '??',
      'Gi?? b??n': numberUtils.thousandSeparator(customer.tax) + '??',
      'Ph?? giao d???ch': '0??',
      'Th??nh ti???n': numberUtils.thousandSeparator(customer.tax) + '??',
    }
    setFieldsModal(arrField)
    setIsModalVisible(true)
  }

  const setDescriptions = () => {
    let arrField = {
      'Nh?? cung c???p': selectedProvider?.name,
      'M?? kh??ch h??ng': customer?.customerCode,
      'T??n kh??ch h??ng': customer?.customerName,
      '?????a ch???': customer?.customerAddress,
      'K??? thanh to??n': customer?.payTerms,
      'S??? ti???n': customer?.tax && `${numberUtils.thousandSeparator(customer?.tax) + '??'}`,
    }
    setFieldsDescription(arrField)
  }

  const handleSearchCustomer = () => {
    if (customerBySearch === '') {
      setCustomer(null)
      return
    }
    customerStore.getCustomerByCodeForElectricTax(customerBySearch)
      .then(res => {
        setCustomer(res)
      })
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  const handleOnChange = (value) => {
    setCustomerBySearch(value)
  }
  useEffect(() => {
    setCustomer(null)
  }, [selectedProvider])

  useEffect(() => {
    setDescriptions()
  }, [selectedProvider, customer])

  useEffect(() => {
    if (selectedProvider && selectedItem && customer)
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, customer])

  return (
    <>
      <Helmet>
        <title>H??a ????n ti???n n?????c</title>
      </Helmet>
      <WaterBillPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.WATER_BILL} />
        <WhiteRoundedBox>
          <Row>
            <Col span={24}>
              <TitleInfoPayment>Th??ng tin thanh to??n</TitleInfoPayment>
            </Col>
          </Row>
          <Row>
            <Col span={6} />
            <Col span={12}>
              <WhiteRoundedInfoPayment margin={'0 0 16px 0'}>
                <Providers placeholder={'T??m ki???m nh?? cung c???p'} selectedProvider={selectedProvider}
                           handleSelectedProvider={handleSelectedProvider} />
              </WhiteRoundedInfoPayment>
            </Col>
            <Col span={6} />
          </Row>
          <Row>
            <Col span={6} />
            <Col span={12}>
              <FormSearch>
                <SearchInputPhoneNumber placeholder={'Nh???p m?? kh??ch h??ng'}
                                        onChange={(value) => handleOnChange(value)}
                                        suffix={<InfoCircleOutlined />} />
                <SearchImg src={require('../../media/icons/search_cus.png')} alt={'search_cus'}
                           onClick={handleSearchCustomer} />
              </FormSearch>
              <WhiteRoundedInfoSearchCustomer margin={'20px 0 16px 0'}>
                <ResultSearchForm>
                  <DescriptionsCustom
                    fields={fieldsDescription} />
                </ResultSearchForm>
              </WhiteRoundedInfoSearchCustomer>
            </Col>
            <Col span={6} />
          </Row>
          <Row>
            <Col span={24}>
              <TitleFunds>Ngu???n ti???n</TitleFunds>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <WhiteRoundedBox margin={'0 16px 0 0'}>
                    <DigitalWallet selectedItem={selectedItem} setClickFunds={handleClickFunds} />
                  </WhiteRoundedBox>
                </Col>
                <Col span={24}>
                  <WhiteRoundedBox margin={'16px 16px 0 0'}>
                    <LinkDirectedBank selectedItem={selectedItem} setClickFunds={handleClickFunds} />
                  </WhiteRoundedBox>
                </Col>
              </Row>
            </Col>
            <Col span={18}>
              <WhiteRoundedBox padding={'16px 0'}>
                <LinkInternalBank selectedItem={selectedItem} setClickFunds={handleClickFunds}
                                  callbackHitBank={handleCallbackHitBank} />
              </WhiteRoundedBox>
            </Col>
          </Row>
          <AreaCreateCommand>
            <CreateCommandButton type={disabledConfirmDeal ? 'default' : 'primary'} onClick={showModalConfirmDeal}
                                 disabled={disabledConfirmDeal}>T???o l???nh</CreateCommandButton>
          </AreaCreateCommand>
        </WhiteRoundedBox>
      </WaterBillPageWrapper>
      <ModalCustomCommandForm
        title={'X??c nh???n giao d???ch'}
        fields={fieldsModal}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </>
  )
}

WaterBillPage.propTypes = {}

export default inject('customerStore')(observer(WaterBillPage))