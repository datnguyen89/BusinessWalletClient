import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faFileInvoiceDollar,
  faHandHoldingUsd,
  faLink,
  faExchangeAlt,
  faList,
} from '@fortawesome/free-solid-svg-icons'
import {
  CustomLink,
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
import { Link, NavLink, useHistory } from 'react-router-dom'
import { DEVICE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import MainSideBar from '../MainSideBar'
import DrawerSideBar from '../DrawerSideBar'

const MainHeader = props => {
  const { commonStore } = props
  const { pageName } = props.commonStore
  const [visibleMobileDrawerLeft, setVisibleMobileDrawerLeft] = useState(false)
  const [visibleMobileDrawerRight, setVisibleMobileDrawerRight] = useState(false)
  const { device } = commonStore
  const history = useHistory()

  const handleClickDrawerMenu = (e) => {
    console.log('handleClickDrawerMenu', e)
  }

  return (
    <MainHeaderWrapper>
      <HeaderLogoArea>
        <img src={IMAGES.MAIN_LOGO} alt={''} style={{ cursor: 'pointer' }} onClick={() => history.push('/')} />
        <span>Doanh Nghiệp</span>
        <FontAwesomeIcon
          onClick={() => setVisibleMobileDrawerLeft(true)}
          icon={faList}
          size={'2x'}
          style={{
            display: device === DEVICE.MOBILE ? 'block' : 'none',
            cursor: 'pointer',
            color: '#fff',
            marginLeft: 8,
          }} />
        <Drawer
          title={null}
          placement='left'
          closable={false}
          width={SIDEBAR_WIDTH_EXPAND}
          style={{ padding: 0 }}
          onClose={() => setVisibleMobileDrawerLeft(false)}
          visible={visibleMobileDrawerLeft}>
          <DrawerSideBar />
        </Drawer>
      </HeaderLogoArea>
      <MainHeaderRight>
        <HeaderTransactionArea>
          <HeaderTransactionItem className={pageName === 'deposit' ? 'selected' : ''}>
            <CustomLink to='/deposit'>{ICONS.DEPOSIT_ICON}<span>Nạp tiền</span></CustomLink>
          </HeaderTransactionItem>
          <HeaderTransactionItem className={pageName === 'tranfer' ? 'selected' : ''}>
            <CustomLink to='/tranfer'>{ICONS.TRANSFER_ICON}<span>Chuyển tiền</span></CustomLink>
          </HeaderTransactionItem>
          <HeaderTransactionItem className={pageName === 'contract' ? 'selected' : ''}>
            <CustomLink to='/contract'>{ICONS.LINK_BANK_ICON}<span>Liên kết</span> </CustomLink>
          </HeaderTransactionItem>
          <HeaderTransactionItem className={pageName === 'withdraw' ? 'selected' : ''}>
            <CustomLink to='/withdraw'>{ICONS.WITHDRAW_ICON}<span>Rút tiền</span></CustomLink>
          </HeaderTransactionItem>
        </HeaderTransactionArea>
        <HeaderNotifyArea>
          <NotifyBell />
        </HeaderNotifyArea>
        <HeaderUserArea />
      </MainHeaderRight>
      <MainHeaderRightMobile>
        <FontAwesomeIcon
          onClick={() => setVisibleMobileDrawerRight(true)}
          icon={faBars}
          size={'2x'}
          color={'#fff'}
          style={{ cursor: 'pointer' }} />
        <Drawer
          title={'Ví doanh nghiệp'}
          placement='right'
          style={{ padding: 0 }}
          onClose={() => setVisibleMobileDrawerRight(false)}
          visible={visibleMobileDrawerRight}>
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