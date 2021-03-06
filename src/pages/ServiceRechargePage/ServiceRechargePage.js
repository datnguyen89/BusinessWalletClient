import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AreaCreateCommand, AreaSearchCustomer, CreateCommandButton, InputEnterTax,
  ResultSearchForm, SearchImg, SearchInputPhoneNumber,
  ServiceRechargePageWrapper,
  TitleFunds, TitleInfoService,
  WhiteRoundedInfoService,
} from './ServiceRechargePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'
import numberUtils from '../../utils/numberUtils'
import DescriptionsCustom from '../../components/DescriptionsCustom'

const ServiceRechargePage = props => {


  const { customerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [customerCode, setCustomerCode] = useState('')
  const [customer, setCustomer] = useState(null)
  const [tax, setTax] = useState('')

  const [fieldsModal, setFieldsModal] = useState(null)
  const [fieldsDescription, setFieldsDescription] = useState(null)


  const handleOnChange = (value) => {
    setCustomerCode(value.target.value)
  }

  const handleSearchCustomer = () => {
    if (customerCode === '') {
      setCustomer(null)
    } else {
      customerStore.getCustomerByCodeOrContract(customerCode)
        .then(res => {
          console.log(res)
          setCustomer(res)
        })
    }
  }

  const handleClickFunds = (value) => {
    setSelectedItem(value)
  }

  const handleCallbackHitBank = (value) => {
    setSelectedItem(value)
  }

  const handleEnterTax = (value) => {
    setTax(value.target.value)
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      'Ngu???n ti???n': selectedItem?.accountNumber,
      'Nh?? cung c???p': 'VETC',
      'M?? kh??ch h??ng': customer?.customerCode,
      'T??n kh??ch h??ng': customer?.customerName,
      'S??? ti???n': numberUtils.thousandSeparator(tax) + '??',
      'Ph?? giao d???ch': '0??',
      'T???ng ti???n': numberUtils.thousandSeparator(tax) + '??',
    }
    setFieldsModal(arrField)
    setIsModalVisible(true)
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  const showDescriptions = () => {

    let arrField = {
      'Nh?? cung c???p': customer?.providerBy,
      'T??n kh??ch h??ng': customer?.customerName,
    }
    setFieldsDescription(arrField)
  }
  useEffect(() => {
    console.log(fieldsDescription)
  }, [fieldsDescription])

  useEffect(() => {
    showDescriptions()
  }, [customer])

  useEffect(() => {
    if (selectedItem && tax !== '' && !isNaN(+tax) && customer)
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, tax, customer])

  return (
    <>
      <Helmet>
        <title>N???p d???ch v???</title>
      </Helmet>
      <ServiceRechargePageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.SERVICE_RECHARGE} />
        <WhiteRoundedBox>
          <Row>
            <Col span={24}>
              <TitleInfoService>Th??ng tin d???ch v???</TitleInfoService>
            </Col>
          </Row>
          <Row>
            <Col span={6} />
            <Col span={12}>
              <WhiteRoundedInfoService margin={'0 0 16px 0'} padding={'16px'}>
                <AreaSearchCustomer>
                  <SearchInputPhoneNumber placeholder={'Nh???p m?? kh??ch h??ng/h???p ?????ng'}
                                          onChange={(value) => handleOnChange(value)} />
                  <SearchImg src={require('../../media/icons/search_cus.png')} alt={'search_cus'}
                             onClick={handleSearchCustomer} />
                </AreaSearchCustomer>
                <ResultSearchForm>
                  <DescriptionsCustom
                    fields={fieldsDescription} />
                </ResultSearchForm>
                <InputEnterTax placeholder={'Nh???p s??? ti???n'} onChange={handleEnterTax} />
              </WhiteRoundedInfoService>
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
      </ServiceRechargePageWrapper>
      <ModalCustomCommandForm
        title={'X??c nh???n giao d???ch'}
        fields={fieldsModal}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </>

  )
}

ServiceRechargePage.propTypes = {}

export default inject('customerStore')(observer(ServiceRechargePage))