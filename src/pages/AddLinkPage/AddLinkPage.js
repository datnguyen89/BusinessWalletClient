import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import {
  AddLinkPageWrapper,
  AreaChooseBank,
  TitleInfoLink,
  WhiteRoundedInfoLink,
} from './AddLinkPageStyled'
import LinkDirectBank from '../../components/LinkDirectBank'
import LinkInternalBank from '../../components/LinkInternalBank'
import { Col, Row } from 'antd'
import { inject, observer } from 'mobx-react'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import InfoAccountArea from '../../components/InfoAccountArea'
import { toJS } from 'mobx'

const AddLinkPage = props => {
  const { commonStore, accountWalletStore } = props
  const [selectedAccountWallet, setSelectedAccountWallet] = useState(null)
  const handlerCallbackBankAccount = (valueChange) => {
    // selectedAccountWallet dùng khi submit form
    setSelectedAccountWallet(valueChange)
    let newArr = [...accountWalletStore.accountWallets];
    newArr = newArr.map(item => {
      if (valueChange.id === item.id) {
        item.default = true
      } else  {
        item.default = false
      }
      return item
    })
    console.log(toJS(accountWalletStore.accountWallets))
    accountWalletStore.setAccountWallets(newArr)
  }

  useEffect(() => {
    accountWalletStore.getAccountWallets();
  }, []);

  useEffect(()=>{
    // console.log(toJS(accountWalletStore.accountWallets));
  }, [accountWalletStore.accountWallets])

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
                  <InfoAccountArea callbackBankAccount={handlerCallbackBankAccount} data={accountWalletStore.accountWallets} />
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
                <LinkDirectBank></LinkDirectBank>
              </WhiteRoundedBox>
            </Col>
            <Col span={18}>
              <WhiteRoundedBox padding={'16px 0'}>
                <LinkInternalBank></LinkInternalBank>
              </WhiteRoundedBox>
            </Col>
          </Row>
          <AreaChooseBank>
          </AreaChooseBank>
        </WhiteRoundedBox>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </AddLinkPageWrapper>
    </DefaultLayout>
  )
}

AddLinkPage.propTypes = {}

export default inject('commonStore', 'accountWalletStore')(observer(AddLinkPage))