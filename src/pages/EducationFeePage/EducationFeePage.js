import React, { useEffect, useState } from 'react'
import {
  AreaCreateCommand,
  CreateCommandButton,
  EducationFeePageWrapper,
  FormSearch, ResultSearchForm,
  SearchImg,
  SearchInputPhoneNumber, TitleFunds, TitleInfoService,
  WhiteRoundedInfoSearchCustomer, WhiteRoundedInfoService,
} from './EducationFeePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import TaxProviders from '../../components/TaxProviders/TaxProviders'
import { InfoCircleOutlined } from '@ant-design/icons'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'
import numberUtils from '../../utils/numberUtils'
import DescriptionsCustom from '../../components/DescriptionsCustom'

const EducationFeePage = props => {

  const { providerStore, customerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [customer, setCustomer] = useState(null)
  const [valueSearch, setValueSearch] = useState('')
  const [listData, setListData] = useState(null)

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
      'T??n tr?????ng h???c': selectedProvider?.name,
      'M?? kh??ch h??ng': customer?.customerCode,
      'T??n kh??ch h??ng': customer?.customerName,
      '?????a ch???': customer?.customerAddress,
      'K??? thanh to??n': customer.payTerms,
      'H???c ph??': numberUtils.thousandSeparator(customer.tax) + '??',
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
    if (valueSearch === '') {
      setCustomer(null)
      return
    }
    customerStore.getCustomerByCodeForEducationFee(valueSearch)
      .then(res => {
        setCustomer(res)
      })
  }

  const handleSearchProvider = (value) => {
    if (value !== '') {
      providerStore.getSchoolsByName(value)
        .then(res => {
          setSelectedProvider(res)
        })
    } else {
      setSelectedProvider(null)
    }
  }

  const showDescriptions = () => {
    let arrField = {
      'T??n tr?????ng': selectedProvider?.name,
      'M?? kh??ch h??ng': customer?.customerCode,
      'T??n kh??ch h??ng': customer?.customerName,
      '?????a ch???': customer?.customerAddress,
      'H???c ph?? k??? h???c': customer?.payTerms,
      'S??? ti???n': customer?.tax && `${numberUtils.thousandSeparator(customer?.tax) + '??'}`,
    }
    setFieldsDescription(arrField)
  }
  useEffect(() => {
    showDescriptions()
  }, [customer, selectedProvider])

  useEffect(() => {
    showDescriptions()
    providerStore.getSchoolProviders()
      .then(res => {
        setListData(res)
      })
  }, [])

  useEffect(() => {
    setCustomer(null)
  }, [selectedProvider])

  useEffect(() => {
    if (selectedProvider && selectedItem && customer)
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, customer])

  return (
    <>
      <Helmet>
        <title>H???c ph??</title>
      </Helmet>
      <EducationFeePageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.EDUCATION_FEE} />
        <WhiteRoundedBox>
          <Row>
            <Col span={24}>
              <TitleInfoService>Th??ng tin d???ch v???</TitleInfoService>
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
      </EducationFeePageWrapper>
      <ModalCustomCommandForm
        title={'X??c nh???n giao d???ch'}
        fields={fieldsModal}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </>
  )
}

EducationFeePage.propTypes = {}

export default inject('providerStore', 'customerStore')(observer(EducationFeePage))