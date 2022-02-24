import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faExchangeAlt,
  faFileInvoiceDollar,
  faHandHoldingUsd,
  faLink,
} from '@fortawesome/free-solid-svg-icons'
import {
  CustomLink,
  HeaderLogoArea,
  HeaderMenuText,
  HeaderNotifyArea,
  HeaderTransactionArea,
  HeaderTransactionItem,
  MainHeaderRight,
  MainHeaderRightMobile,
  MainHeaderWrapper,
} from './MainHeaderStyled'
import IMAGES from '../../images'
import NotifyBell from '../NotifyBell'
import ICONS from '../../icons'
import { Drawer, Dropdown, Menu } from 'antd'
import HeaderUserArea from '../HeaderUserArea'
import { useHistory } from 'react-router-dom'
import { PAGES, PAYMENT_GROUP_PAGES, SERVICES_DATA, TRANSFER_GROUP_PAGES, TRANSFERS } from '../../utils/constant'
import {
  HeaderDropdownIconWrapper,
  HeaderDropdownItem,
  HeaderDropdownItemText,
  HeaderDropdownWrapper,
} from '../CommonStyled/CommonStyled'
import MenuSideBarArea from '../MenuSideBarArea'

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

  const paymentOverlay = (
    <HeaderDropdownWrapper>
      {
        SERVICES_DATA.map(item =>
          <HeaderDropdownItem
            key={item.ID}
            onClick={() => history.push(item.PATH)}
            color={commonStore.appTheme.solidColor}>
            <HeaderDropdownIconWrapper>
              <img src={item.ICON_SMALL} alt={''} />
            </HeaderDropdownIconWrapper>
            <HeaderDropdownItemText>
              {item.SERVICE_NAME}
            </HeaderDropdownItemText>
          </HeaderDropdownItem>,
        )
      }
    </HeaderDropdownWrapper>
  )
  const transferOverlay = (
    <HeaderDropdownWrapper>
      {
        TRANSFERS.map(item =>
          <HeaderDropdownItem
            onClick={() => history.push(item.PATH)}
            key={item.ID}
            color={commonStore.appTheme.solidColor}>
            <HeaderDropdownIconWrapper>
              <img src={item.ICON} alt={''} />
            </HeaderDropdownIconWrapper>
            <HeaderDropdownItemText>
              {item.LABEL}
            </HeaderDropdownItemText>
          </HeaderDropdownItem>,
        )
      }
    </HeaderDropdownWrapper>
  )
  return (
    <MainHeaderWrapper>
      <HeaderLogoArea>
        <img src={IMAGES.MAIN_LOGO}
             alt={''}
             height={44}
             style={{ cursor: 'pointer' }}
             onClick={() => history.push(PAGES.HOME.PATH)} />
        <span>Doanh Nghiệp</span>
      </HeaderLogoArea>
      <MainHeaderRight>
        <HeaderTransactionArea>
          <HeaderTransactionItem
            className={PAYMENT_GROUP_PAGES.includes(pageName) ? 'selected' : ''}
            id={'header-payment-area'}>
            <Dropdown
              overlay={paymentOverlay}
              overlayClassName={'header-payment-area'}
              trigger={'click'}
              placement={'bottomCenter'}
              getPopupContainer={() => document.getElementById('header-payment-area')}>
              <HeaderMenuText>{ICONS.PAYMENT_ICON}<span>Thanh toán</span></HeaderMenuText>
            </Dropdown>
          </HeaderTransactionItem>
          <HeaderTransactionItem className={pageName === PAGES.DEPOSIT.NAME ? 'selected' : ''}>
            <CustomLink to={PAGES.DEPOSIT.PATH}>{ICONS.DEPOSIT_ICON}<span>Nạp tiền</span></CustomLink>
          </HeaderTransactionItem>
          <HeaderTransactionItem
            className={TRANSFER_GROUP_PAGES.includes(pageName) ? 'selected' : ''}
            id={'header-transfer-area'}>
            <Dropdown
              overlay={transferOverlay}
              overlayClassName={'header-transfer-area'}
              trigger={'click'}
              placement={'bottomCenter'}
              getPopupContainer={() => document.getElementById('header-transfer-area')}>
              <HeaderMenuText>{ICONS.TRANSFER_ICON}<span>Chuyển tiền</span></HeaderMenuText>
            </Dropdown>
          </HeaderTransactionItem>
          <HeaderTransactionItem className={pageName === PAGES.LINK_BANK.NAME ? 'selected' : ''}>
            <CustomLink to={PAGES.LINK_BANK.PATH}>{ICONS.LINK_BANK_ICON}<span>Liên kết</span> </CustomLink>
          </HeaderTransactionItem>
          <HeaderTransactionItem className={pageName === PAGES.WITHDRAW.NAME ? 'selected' : ''}>
            <CustomLink to={PAGES.WITHDRAW.PATH}>{ICONS.WITHDRAW_ICON}<span>Rút tiền</span></CustomLink>
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
          <MenuSideBarArea />
        </Drawer>
      </MainHeaderRightMobile>
    </MainHeaderWrapper>

  )
}

MainHeader.propTypes = {}

export default inject('commonStore')(observer(MainHeader))