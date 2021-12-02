import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import {
  AddLinkPageWrapper,
  AreaChooseBank, AreaCreateCommand, CreateCommandButton,
  TitleInfoLink,
  WhiteRoundedInfoLink,
} from './AddLinkPageStyled'
import LinkDirectBank from '../../components/LinkDirectBank'
import LinkInternalBank from '../../components/LinkInternalBank'
import { Col, Row } from 'antd'
import { inject, observer } from 'mobx-react'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import InfoAccountArea from '../../components/InfoAccountArea'

const AddLinkPage = props => {

  const { accountWalletStore } = props

  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handlerCallbackHitBank = (item) => {
    setSelectedItem(item);
  }
  const handlerCallbackBankAccount = (valueChange) => {
    console.log("sad")
    setSelectedAccount(valueChange);
  }

  useEffect(() => {
    accountWalletStore.getAccountWallets()
      .then(res => {
        setSelectedAccount(res.find(item => item.default));
      })
  }, [])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Thêm liên kết</title>
      </Helmet>
      <AddLinkPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.ADD_LINK} />
        <WhiteRoundedBox margin={'0 16px 16px 16px'}>
          <Row>
            <Col span={24}>
              <TitleInfoLink>Thông tin liên kết</TitleInfoLink>
            </Col>
            <Col span={6}></Col>
            <Col span={12}>
              <WhiteRoundedInfoLink margin={'0 16px 16px 0'}>
                <InfoAccountArea
                  callbackBankAccount={handlerCallbackBankAccount}
                  selectedAccount={selectedAccount}></InfoAccountArea>
              </WhiteRoundedInfoLink>
            </Col>
            <Col span={6}></Col>
          </Row>
          <Row>
            <Col span={24}>
              <TitleInfoLink>Chọn ngân hàng liên kết</TitleInfoLink>
            </Col>
            <Col span={6}>
              <WhiteRoundedBox margin={'0 16px 0 0'}>
                <LinkDirectBank callbackHitBank={handlerCallbackHitBank} selectedItem={selectedItem}></LinkDirectBank>
              </WhiteRoundedBox>
            </Col>
            <Col span={18}>
              <WhiteRoundedBox padding={'16px 0'}>
                <LinkInternalBank callbackHitBank={handlerCallbackHitBank} selectedItem={selectedItem}></LinkInternalBank>
              </WhiteRoundedBox>
            </Col>
          </Row>
          <AreaCreateCommand>
            <CreateCommandButton type='primary'>Tạo lệnh</CreateCommandButton>
          </AreaCreateCommand>
          <AreaChooseBank>
          </AreaChooseBank>
        </WhiteRoundedBox>
      </AddLinkPageWrapper>
    </DefaultLayout>
  )
}

AddLinkPage.propTypes = {}

export default inject('commonStore', 'accountWalletStore')(observer(AddLinkPage))