import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AreaCreateCommand,
  CreateCommandButton, DescriptionsCustom, FormSearch,
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

const TelevisionBillPage = props => {
  const { providerStore, customerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [customer, setCustomer] = useState(null)
  const [listData, setListData] = useState(null)
  const [tax, setTax] = useState("")
  const [valueSearch, setValueSearch] = useState('')
  const [typeKPlusTelevision, setTypeKPlusTelevision] = useState(false)
  const [typeNotKPlusTelevision, setTypeNotKPlusTelevision] = useState(false)
  const [packages, setPackages] = useState(null);
  const [ stateRadio, setStateRadio ] = useState(1);

  const [fields, setFields] = useState(null)

  const handleClickFunds = (value) => {
    setSelectedItem(value)
  }

  const handleCallbackHitBank = (value) => {
    setSelectedItem(value)
  }

  const handleSelectedProvider = (value) => {
    console.log(toJS(value))
    setSelectedProvider(value)
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      'Nguồn tiền': selectedItem?.accountNumber,
      'Nhà cung cấp': selectedProvider?.name,
      'Mã khách hàng':  customer?.customerCode,
      'Tên gói cước': stateRadio.packageName,
      'Số tiền': tax,
      'Giá bán': tax,
      'Phí giao dịch': '0đ',
      'Tổng tiền': tax,
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
    customerStore.getCustomerByCodeOrContract(valueSearch)
      .then(res => {
        setCustomer(res);
        setTax(res.debitBalance);
      })
  }

  const handleSearchProvider = (value) => {
    if (value !== "") {
      providerStore.getTelevisionByName()
        .then(res => {
          setSelectedProvider(res);
        });
    }
    else {
      setSelectedProvider(null);
    }
  }

  const handleOnChangeChoosePackage = (value) => {
    console.log(value.target.value);
    setStateRadio(value.target.value);
    setTax(value.target.value.packagePrice);
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
        setPackages(res);
      })
  }, [typeKPlusTelevision]);

  useEffect(() => {
    if (selectedProvider == null) {
      setTypeKPlusTelevision(false);
      setTypeNotKPlusTelevision(false);
    } else if (selectedProvider?.name === "K+")
    {
      setTypeKPlusTelevision(true);
      setTypeNotKPlusTelevision(false);
    }
    else if (selectedProvider?.name !== "K+")
    {
      setTypeNotKPlusTelevision(true);
      setTypeKPlusTelevision(false);
    }
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider])

  useEffect(() => {
    if (selectedProvider && selectedItem && tax !== "")
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, tax])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Hóa đơn truyền hình</title>
      </Helmet>
      <TelevisionBillPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TELEVISION_BILL} />
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
                <TaxProviders selectedProvider={selectedProvider}
                              handleSelectedProvider={handleSelectedProvider}
                              placeholder={'Tìm kiếm nhà cung cấp'}
                              data={listData}
                              handleSearchProvider={handleSearchProvider}></TaxProviders>
              </WhiteRoundedInfoService>
              <FormSearch>
                <SearchInputPhoneNumber placeholder={'Nhập mã khách hàng/hợp đồng'}
                                        onChange={(value) => handleOnChange(value)}
                                        suffix={<InfoCircleOutlined />}/>
                <SearchImg src={require('../../media/icons/search_cus.png')} alt={'search_cus'}
                           onClick={handleSearchCustomer} />
              </FormSearch>

              <WhiteRoundedInfoSearchCustomer margin={'20px 0 16px 0'} display={typeNotKPlusTelevision ? 'visible': 'none'}>
                <ResultSearchForm>
                  <DescriptionsCustom bordered column={1}>
                    <Descriptions.Item label='Nhà cung cấp'
                                       labelStyle={{ width: '30%' }}>{selectedProvider?.name}</Descriptions.Item>
                    <Descriptions.Item label='Tên khách hàng'>{customerStore.customer?.customerName}</Descriptions.Item>
                    <Descriptions.Item label='Kỳ thanh toán'>{customer?.payTerms}</Descriptions.Item>
                    <Descriptions.Item label='Số dư nợ cước'>{customer?.debitBalance}đ</Descriptions.Item>
                  </DescriptionsCustom>
                </ResultSearchForm>
              </WhiteRoundedInfoSearchCustomer>
              <WhiteRoundedInfoSearchCustomer margin={'20px 0 16px 0'} display={typeKPlusTelevision ? 'visible': 'none'}>
                <ResultSearchForm>
                  <Radio.Group onChange={handleOnChangeChoosePackage} value={stateRadio} >
                    <DescriptionsCustom bordered column={1}>
                        {
                            packages?.map((item, index) => (
                              <Descriptions.Item
                                key={index}
                                label={<Radio value={item}>{item.packageName}</Radio>}
                                contentStyle={{'display': 'flex', 'justify-content': 'flex-end'}}>{item.packagePrice}đ</Descriptions.Item>
                            ))
                        }
                      <Descriptions.Item label='Số tiền'
                                         labelStyle={{'font-weight': 'bold', width: '40%'}}
                                         contentStyle={{'display': 'flex', 'justify-content': 'flex-end', 'font-weight': 'bold'}}>{tax}đ</Descriptions.Item>
                  </DescriptionsCustom>
                  </Radio.Group>
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
      </TelevisionBillPageWrapper>
      <ModalCustomCommandForm
        title={'Xác nhận giao dịch'}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible}></ModalCustomCommandForm>
    </DefaultLayout>
  )
}

TelevisionBillPage.propTypes = {}

export default inject('customerStore', 'providerStore')(observer(TelevisionBillPage))