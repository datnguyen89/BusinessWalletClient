import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { Helmet } from 'react-helmet/es/Helmet'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import MobileNetworkOperator from '../../components/MobileNetworkOperator/MobileNetworkOperator'
import ServicePlanMobile from '../../components/ServicePlanMobile/ServicePlanMobile'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'

import {
  AreaCreateCommand, CreateCommandButton,
  InputCount,
  PhoneCardPageWrapper,
  TitleFunds, TitleInfoService,
  WhiteRoundedInfoService,
} from './PhoneCardPageStyled'
import numberUtils from '../../utils/numberUtils'

const PhoneCardPage = props => {
  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [selectedTopUpVoucher, setSelectedTopUpVoucher] = useState(null)
  const [countTopUpVoucher, setCountTopUpVoucher] = useState(0)
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
      'S???n ph???m': selectedTopUpVoucher?.name,
      'M???nh gi??': numberUtils.thousandSeparator(selectedTopUpVoucher?.denominations) + '??',
      'Gi?? b??n': numberUtils.thousandSeparator(selectedTopUpVoucher?.discount) + '??',
      'S??? l?????ng': countTopUpVoucher,
      'T???ng ti???n': numberUtils.thousandSeparator(countTopUpVoucher * selectedTopUpVoucher?.discount) + '??',
      'Ph?? giao d???ch': '0??',
      'Th??nh ti???n': numberUtils.thousandSeparator(countTopUpVoucher * selectedTopUpVoucher?.discount) + '??',
    }
    setFields(arrField)
    setIsModalVisible(true)
  }

  const onChangeCountTopUpVouchers = (value) => {
    setCountTopUpVoucher(value)
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider])

  useEffect(() => {
    if (selectedProvider && selectedItem && selectedTopUpVoucher && countTopUpVoucher > 0 && !isNaN(countTopUpVoucher))
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, selectedTopUpVoucher, countTopUpVoucher])

  return (
    <>
      <Helmet>
        <title>Mua m?? th??? ??i???n tho???i</title>
      </Helmet>
      <PhoneCardPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.PHONE_CARD} />
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
                <MobileNetworkOperator selectedProvider={selectedProvider}
                                       handleSelectedProvider={handleSelectedProvider} />
              </WhiteRoundedInfoService>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <ServicePlanMobile title={'Ch???n g??i/m???nh gi??'} selectedTopUpVoucher={selectedTopUpVoucher}
                                   handleSelectedTopUpVoucher={handleSelectedTopUpVoucher} />
              </WhiteRoundedInfoService>

              <InputCount
                min={1}
                placeholder={'Nh???p s??? l?????ng'}
                onChange={onChangeCountTopUpVouchers} />
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
      </PhoneCardPageWrapper>
      <ModalCustomCommandForm
        title={'X??c nh???n giao d???ch'}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </>

  )
}

PhoneCardPage.propTypes = {}

export default inject('providerStore')(observer(PhoneCardPage))