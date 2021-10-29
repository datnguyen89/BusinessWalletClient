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
import { useHistory } from 'react-router-dom'
import { DEVICE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import MainSideBar from '../MainSideBar'
import DrawerSideBar from '../DrawerSideBar'

const MainHeader = props => {
  const { commonStore } = props
  const [visibleMobileDrawerLeft, setVisibleMobileDrawerLeft] = useState(false)
  const [visibleMobileDrawerRight, setVisibleMobileDrawerRight] = useState(false)
  const { device } = commonStore
  const history = useHistory()

  const handleClickDrawerMenu = (e) => {
    console.log(e)
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