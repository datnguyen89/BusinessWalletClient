import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFileInvoiceDollar, faHandHoldingUsd, faLink, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import {
  HeaderLogoArea, HeaderNotifyArea,
  HeaderTransactionArea,
  HeaderTransactionItem,
  MainHeaderRight, MainHeaderRightMobile,
  MainHeaderWrapper,
} from './MainHeaderStyled'
import IMAGES from '../../images'
import NotifyBell from '../NotifyBell'
import ICONS from '../../icons'
import { Drawer, Dropdown, Menu } from 'antd'
import HeaderUserArea from '../HeaderUserArea'

const MainHeader = props => {
  const { commonStore } = props
  const [visibleMobileDrawer, setVisibleMobileDrawer] = useState(false)
  const { device } = commonStore

  const handleClickDrawerMenu = (e) => {
    console.log(e)
  }

  return (
    <MainHeaderWrapper>
      <HeaderLogoArea href={'/'}>
        <img src={IMAGES.MAIN_LOGO} alt={''} />
        <span>Doanh Nghiệp</span>
      </HeaderLogoArea>
      <MainHeaderRight>
        <HeaderTransactionArea>
          <HeaderTransactionItem href={'#'}>
            <img src={ICONS.RECHARGE_ICON} alt={''} />
            <span>Nạp tiền</span>
          </HeaderTransactionItem>
          <HeaderTransactionItem href={'#'}>
            <img src={ICONS.TRANSFER_ICON} alt={''} />
            <span>Chuyển tiền</span>
          </HeaderTransactionItem>
          <HeaderTransactionItem href={'#'}>
            <img src={ICONS.LINK_BANK_ICON} alt={''} />
            <span>Liên kết</span>
          </HeaderTransactionItem>
          <HeaderTransactionItem href={'#'}>
            <img src={ICONS.WITHDRAW_ICON} alt={''} />
            <span>Rút tiền</span>
          </HeaderTransactionItem>
        </HeaderTransactionArea>
        <HeaderNotifyArea>
          <NotifyBell />
        </HeaderNotifyArea>
        <HeaderUserArea />
      </MainHeaderRight>
      <MainHeaderRightMobile>
        <FontAwesomeIcon
          onClick={() => setVisibleMobileDrawer(true)}
          icon={faBars}
          size={'2x'}
          color={'#fff'}
          style={{ cursor: 'pointer' }} />
        <Drawer
          title={'Ví doanh nghiệp'}
          placement='right'
          style={{ padding: 0 }}
          onClose={() => setVisibleMobileDrawer(false)}
          visible={visibleMobileDrawer}>
          <Menu
            onClick={handleClickDrawerMenu}
            style={{ width: '100%' }}
            defaultSelectedKeys={['1']}
            mode='inline'
          >
            <Menu.Item key='1'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faFileInvoiceDollar} />
              Nạp tiền
            </Menu.Item>
            <Menu.Item key='2'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faExchangeAlt} />
              Chuyển tiền
            </Menu.Item>
            <Menu.Item key='3'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faLink} />
              Liên kết
            </Menu.Item>
            <Menu.Item key='4'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faHandHoldingUsd} />
              Rút tiền
            </Menu.Item>
          </Menu>
        </Drawer>
      </MainHeaderRightMobile>
    </MainHeaderWrapper>

  )
}

MainHeader.propTypes = {}

export default inject('commonStore')(observer(MainHeader))