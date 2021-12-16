import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  ApartmentFeePageWrapper, AreaCreateCommand, CreateCommandButton, DescriptionsCustom,
  FormSearch, ResultSearchForm,
  SearchImg,
  SearchInputPhoneNumber, TitleFunds, TitleInfoService,
  WhiteRoundedInfoSearchCustomer, WhiteRoundedInfoService,
} from './ApartmentFeePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Descriptions, Row } from 'antd'
import TaxProviders from '../../components/TaxProviders/TaxProviders'
import { InfoCircleOutlined } from '@ant-design/icons'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'

const ApartmentFeePage = props => {

  const { providerStore, customerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [customer, setCustomer] = useState(null)
  const [valueSearch, setValueSearch] = useState('')
  const [listData, setListData] = useState(null)

  const [fields, setFields] = useState(null)

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
      'Nguồn tiền': selectedItem?.accountNumber,
      'Nhà cung cấp': selectedProvider?.name,
      'Mã khách hàng':  customer?.customerCode,
      'Tên khách hàng':  customer?.customerName,
      'Địa chỉ':  customer?.customerAddress,
      'Kỳ thanh toán': customer.payTerms,
      'Số tiền': customer.tax,
      'Phí giao dịch': '0đ',
      'Tổng tiền': customer.tax,
    }
    setFields(arrField)
    setIsModalVisible(true)
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  const handleOnChange = (value) => {
    setValueSearch(value.target.value)
  }

  const handleSearchCustomer = () => {
    if (valueSearch === "") {
      setCustomer(null);
      return;
    }
    customerStore.getCustomerByCodeForAppartmentFee(valueSearch)
      .then(res => {
        console.log(res)
        setCustomer(res)
      })

  }

  const handleSearchProvider = (value) => {
    if (value !== "") {
      providerStore.getAppartmentByName()
        .then(res => {
          setSelectedProvider(res);
        });
    }
    else {
      setSelectedProvider(null);
    }
  }

  useEffect(() => {
    providerStore.getApartmentProviders()
      .then(res => {
        console.log(res)
        setListData(res)
      })
  }, [])

  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider])

  useEffect(() => {
    if (selectedProvider && selectedItem)
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Phí chung cư</title>
      </Helmet>
      <ApartmentFeePageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.APARTMENT_FEE} />
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
                <TaxProviders selectedProvider={selectedProvider}
                              handleSelectedProvider={handleSelectedProvider}
                              placeholder={'Tìm kiếm nhà cung cấp'}
                              data={listData}
                              handleSearchProvider={handleSearchProvider}></TaxProviders>
              </WhiteRoundedInfoService>
              <FormSearch>
                <SearchInputPhoneNumber placeholder={'Nhập mã khách hàng'}
                                        onChange={(value) => handleOnChange(value)}
                                        suffix={<InfoCircleOutlined />}/>
                <SearchImg src={require('../../media/icons/search_cus.png')} alt={'search_cus'}
                           onClick={handleSearchCustomer} />
              </FormSearch>

              <WhiteRoundedInfoSearchCustomer margin={'20px 0 16px 0'}>
                <ResultSearchForm>
                  <DescriptionsCustom bordered column={1}>
                    <Descriptions.Item label='Nhà cung cấp'
                                       labelStyle={{ width: '30%' }}>{selectedProvider?.name}</Descriptions.Item>
                    <Descriptions.Item label='Mã khách hàng'>{customer?.customerCode}</Descriptions.Item>
                    <Descriptions.Item label='Tên khách hàng'>{customer?.customerName}</Descriptions.Item>
                    <Descriptions.Item label='Địa chỉ'>{customer?.customerAddress}</Descriptions.Item>
                    <Descriptions.Item label='Kỳ thanh toán  '>{customer?.payTerms}</Descriptions.Item>
                    <Descriptions.Item label='Số tiền'>{customer?.tax}đ</Descriptions.Item>
                  </DescriptionsCustom>
                </ResultSearchForm>
              </WhiteRoundedInfoSearchCustomer>
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
                <LinkInternalBank selectedItem={selectedItem} setClickFunds={handleClickFunds}
                                  callbackHitBank={handleCallbackHitBank}></LinkInternalBank>
              </WhiteRoundedBox>
            </Col>
          </Row>
          <AreaCreateCommand>
            <CreateCommandButton type={disabledConfirmDeal ? 'default' : 'primary'} onClick={showModalConfirmDeal}
                                 disabled={disabledConfirmDeal}>Tạo lệnh</CreateCommandButton>
          </AreaCreateCommand>
        </WhiteRoundedBox>
      </ApartmentFeePageWrapper>
      <ModalCustomCommandForm
        title={'Xác nhận giao dịch'}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible}></ModalCustomCommandForm>
    </DefaultLayout>
  )
}

ApartmentFeePage.propTypes = {

}

export default inject('providerStore', 'customerStore')(observer(ApartmentFeePage))