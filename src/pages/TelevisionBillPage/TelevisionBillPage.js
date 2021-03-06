import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AreaCreateCommand,
  CreateCommandButton, DescriptionsCustomForKPlus, FormSearch,
  ResultSearchForm, SearchImg, SearchInputPhoneNumber,
  TelevisionBillPageWrapper, TitleFunds, TitleInfoService, WhiteRoundedInfoSearchCustomer,
  WhiteRoundedInfoService,
} from './TelevisionBillPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { toJS } from 'mobx'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Descriptions, Radio, Row } from 'antd'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'
import TaxProviders from '../../components/TaxProviders'
import { InfoCircleOutlined } from '@ant-design/icons'
import numberUtils from '../../utils/numberUtils'
import DescriptionsCustom from '../../components/DescriptionsCustom'

const TelevisionBillPage = props => {
  const { providerStore, customerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [customer, setCustomer] = useState(null)
  const [listData, setListData] = useState(null)
  const [tax, setTax] = useState('')
  const [valueSearch, setValueSearch] = useState('')
  const [typeKPlusTelevision, setTypeKPlusTelevision] = useState(false)
  const [typeNotKPlusTelevision, setTypeNotKPlusTelevision] = useState(false)
  const [packages, setPackages] = useState(null)
  const [stateRadio, setStateRadio] = useState(1)

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
      'T??n g??i c?????c': stateRadio.packageName ?? selectedProvider.name,
      'S??? ti???n': numberUtils.thousandSeparator(tax) + '??',
      'Gi?? b??n': numberUtils.thousandSeparator(tax) + '??',
      'Ph?? giao d???ch': '0??',
      'T???ng ti???n': numberUtils.thousandSeparator(tax) + '??',
    }
    setFieldsModal(arrField)
    setIsModalVisible(true)
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  const handleOnChange = (value) => {
    setValueSearch(value.target.value)
  }

  const handleSearchCustomer = () => {
    customerStore.getCustomerByCodeForTelevisions(valueSearch)
      .then(res => {
        setCustomer(res)
        if (selectedProvider?.name !== 'K+') {
          setTax(res.debitBalance)
        }
      })
  }

  const handleSearchProvider = (value) => {
    if (value !== '') {
      providerStore.getTelevisionByName()
        .then(res => {
          setSelectedProvider(res)
        })
    } else {
      setSelectedProvider(null)
    }
  }

  const setDescriptions = () => {
    let arrField = {
      'Nh?? cung c???p': selectedProvider?.name,
      'T??n kh??ch h??ng': customer?.customerName,
      'K??? thanh to??n': customer?.payTerms,
      'S??? d?? n??? c?????c': customer?.debitBalance && `${numberUtils.thousandSeparator(customer?.debitBalance)} ??`,
    }
    setFieldsDescription(arrField)
  }

  const handleOnChangeChoosePackage = (value) => {
    setStateRadio(value.target.value)
    setTax(value.target.value.packagePrice)
  }

  useEffect(() => {
    providerStore.getTelevisions()
      .then(res => {
        console.log(res)
        setListData(res)
      })
  }, [])

  useEffect(() => {
    providerStore.getPackagesByCustomerCodeOrContract(valueSearch)
      .then(res => {
        setPackages(res)
      })
  }, [typeKPlusTelevision])

  useEffect(() => {
    if (selectedProvider == null) {
      setTypeKPlusTelevision(false)
      setTypeNotKPlusTelevision(false)
    } else if (selectedProvider?.name === 'K+') {
      setTypeKPlusTelevision(true)
      setTypeNotKPlusTelevision(false)
    } else if (selectedProvider?.name !== 'K+') {
      setCustomer(null)
      setTax('')
      setTypeNotKPlusTelevision(true)
      setTypeKPlusTelevision(false)
      setDescriptions()
    }
    setCustomer(null)
    setTax('')
  }, [selectedProvider])

  useEffect(() => {
    if (customer && selectedProvider?.name === 'K+') {
      return
    } else if (selectedProvider?.name !== 'K+')
      setDescriptions()
  }, [customer])
  useEffect(() => {
    if (selectedProvider && selectedItem && tax !== '' && customer)
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, tax, customer])

  return (
    <>
      <Helmet>
        <title>H??a ????n truy???n h??nh</title>
      </Helmet>
      <TelevisionBillPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TELEVISION_BILL} />
        <WhiteRoundedBox>
          <Row>
            <Col span={24}>
              <TitleInfoService>Ch???n nh?? cung c???p</TitleInfoService>
            </Col>
          </Row>
          <Row>
            <Col span={6} />
            <Col span={12}>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <TaxProviders selectedProvider={selectedProvider}
                              handleSelectedProvider={handleSelectedProvider}
                              placeholder={'T??m ki???m nh?? cung c???p'}
                              data={listData}
                              handleSearchProvider={handleSearchProvider} />
              </WhiteRoundedInfoService>
              <FormSearch>
                <SearchInputPhoneNumber placeholder={'Nh???p m?? kh??ch h??ng/h???p ?????ng'}
                                        onChange={(value) => handleOnChange(value)}
                                        suffix={<InfoCircleOutlined />} />
                <SearchImg src={require('../../media/icons/search_cus.png')} alt={'search_cus'}
                           onClick={handleSearchCustomer} />
              </FormSearch>

              <WhiteRoundedInfoSearchCustomer margin={'20px 0 16px 0'}
                                              display={typeNotKPlusTelevision ? 'visible' : 'none'}>
                <ResultSearchForm>
                  <DescriptionsCustom
                    fields={fieldsDescription} />
                </ResultSearchForm>
              </WhiteRoundedInfoSearchCustomer>
              <WhiteRoundedInfoSearchCustomer margin={'20px 0 16px 0'}
                                              display={typeKPlusTelevision ? 'visible' : 'none'}>
                <ResultSearchForm>
                  <Radio.Group onChange={handleOnChangeChoosePackage} value={stateRadio}>
                    <DescriptionsCustomForKPlus bordered column={1}>
                      {
                        packages?.map((item, index) => (
                          <Descriptions.Item
                            key={index}
                            label={<Radio value={item}>{item.packageName}</Radio>}
                            contentStyle={{ 'display': 'flex', 'justifyContent': 'flex-end' }}>
                            {item.packagePrice && `${numberUtils.thousandSeparator(item.packagePrice)}??`}</Descriptions.Item>
                        ))
                      }
                      <Descriptions.Item label='S??? ti???n'
                                         labelStyle={{ 'fontWeight': 'bold', width: '40%' }}
                                         contentStyle={{
                                           'display': 'flex',
                                           'justifyContent': 'flex-end',
                                           'fontWeight': 'bold',
                                         }}>
                        {tax && `${numberUtils.thousandSeparator(tax)}??`}</Descriptions.Item>
                    </DescriptionsCustomForKPlus>
                  </Radio.Group>
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
      </TelevisionBillPageWrapper>
      <ModalCustomCommandForm
        title={'X??c nh???n giao d???ch'}
        fields={fieldsModal}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </>
  )
}

TelevisionBillPage.propTypes = {}

export default inject('customerStore', 'providerStore')(observer(TelevisionBillPage))