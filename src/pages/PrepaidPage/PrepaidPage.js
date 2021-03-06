import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { toJS } from 'mobx'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import SearchMobileNetworkOperator from '../../components/SearchMobileNetworkOperator/SearchMobileNetworkOperator'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import {
  AreaCreateCommand,
  CreateCommandButton,
  PrepaidPageWrapper,
  TitleFunds,
  TitleInfoService,
  WhiteRoundedInfoService,
} from './PrepaidPageStyled'
import { inject, observer } from 'mobx-react'
import ServicePlanMobile from '../../components/ServicePlanMobile'
import numberUtils from '../../utils/numberUtils'

const PrepaidPage = props => {
  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [selectedTopUpVoucher, setSelectedTopUpVoucher] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)

  const [fields, setFields] = useState(null)

  const handleClickFunds = (value) => {
    setSelectedItem(value)
  }

  const handleCallbackHitBank = (value) => {
    setSelectedItem(value)
  }

  const handleSelectedProvider = (value) => {
    setSelectedProvider(value)
    setSelectedTopUpVoucher(null)
  }

  const handleSelectedTopUpVoucher = (value) => {
    setSelectedTopUpVoucher(value)
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      'Ngu???n ti???n': selectedItem?.accountNumber,
      'Nh?? cung c???p': selectedProvider?.name,
      'D???ch v???': 'N???p ti???n ??i???n tho???i',
      'S???n ph???m': selectedTopUpVoucher?.name,
      'M???nh gi??': numberUtils.thousandSeparator(selectedTopUpVoucher?.denominations) + '??',
      'Gi?? b??n': numberUtils.thousandSeparator(selectedTopUpVoucher?.discount) + '??',
      'S??? ??i???n tho???i': phoneNumber,
      'T???ng ti???n': numberUtils.thousandSeparator(selectedTopUpVoucher?.discount) + '??',
      'Ph?? giao d???ch': '0??',
      'Th??nh ti???n': numberUtils.thousandSeparator(selectedTopUpVoucher?.discount) + '??',
    }
    setFields(arrField)
    setIsModalVisible(true)
  }

  const handleSetPhoneNumber = (value) => {
    setPhoneNumber(value)
  }

  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider])

  useEffect(() => {
    if (selectedProvider && selectedItem && selectedTopUpVoucher && !isNaN(phoneNumber))
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, selectedTopUpVoucher, phoneNumber])

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  return (
    <>
      <Helmet>
        <title>N???p ti???n ??i???n tho???i</title>
      </Helmet>
      <PrepaidPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.PREPAID} />
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
                <SearchMobileNetworkOperator phoneNumber={phoneNumber} setPhoneNumber={handleSetPhoneNumber}
                                             selectedProvider={selectedProvider}
                                             handleSelectedProvider={handleSelectedProvider} />
              </WhiteRoundedInfoService>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <ServicePlanMobile title={'Ch???n m???nh gi??'} selectedTopUpVoucher={selectedTopUpVoucher}
                                   handleSelectedTopUpVoucher={handleSelectedTopUpVoucher} />
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
      </PrepaidPageWrapper>
      <ModalCustomCommandForm
        title={'X??c nh???n giao d???ch'}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </>

  )
}

PrepaidPage.propTypes = {}

export default inject('providerStore')(observer(PrepaidPage))