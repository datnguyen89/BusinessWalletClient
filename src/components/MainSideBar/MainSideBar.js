import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import {
  BankAvatarWrapper,
  BankInfoArea,
  MainSideBarWrapper, MenuSidebarArea,
  MenuSidebarItem,
  MenuSidebarWrapper, SocialIconWrapper,
} from './MainSideBarStyled'
import { DEVICE, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import IMAGES from '../../images'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import ICONS from '../../icons'

const MainSideBar = props => {
  const { commonStore } = props
  const { isCollapse, device, pageName } = commonStore

  const history = useHistory()

  const handleToggleSideBar = (collapse) => {
    commonStore.setIsCollapse(collapse)
  }

  const handleClickMenu = (path) => {
    history.push(`/${path}`)
  }

  return (
    <MainSideBarWrapper
      display={device === DEVICE.MOBILE ? 'none' : 'flex'}
      width={isCollapse ? SIDEBAR_WIDTH_COLLAPSE : SIDEBAR_WIDTH_EXPAND}>
      <BankInfoArea display={isCollapse ? 'none' : 'flex'}>
        <BankAvatarWrapper>
          <img src={IMAGES.SACOMBANK} alt={''} height={60} />
        </BankAvatarWrapper>
        <span className={'bank-name-sidebar'}>Ngân hàng cổ phần thương mại Sài Gòn</span>
        <CaretLeftOutlined
          onClick={() => handleToggleSideBar(true)}
          className={'collapse-sidebar-icon'}
          style={{ display: (device === DEVICE.MOBILE || device === DEVICE.TABLET) ? 'none' : 'block' }} />
      </BankInfoArea>
      <FontAwesomeIcon
        onClick={() => handleToggleSideBar(false)}
        className={'expand-sidebar-icon'}
        style={{ display: !isCollapse ? 'none' : 'inline-block' }}
        icon={faBars} />
      <MenuSidebarArea>
        <MenuSidebarItem
          onClick={() => handleClickMenu('identity-info')}
          className={pageName === 'identity-info' ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.IDENTITY_ICON}
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Thông tin định danh</span>
        </MenuSidebarItem>
        {/*<MenuSidebarItem*/}
        {/*  onClick={() => handleClickMenu('transfer-multiple')}*/}
        {/*  className={pageName === 'transfer-multiple' ? 'active' : ''}*/}
        {/*  color={commonStore.appTheme.solidColor}>*/}
        {/*  {ICONS.TRANSFER_MULTI_ICON}*/}
        {/*  <span className={'menu-sidebar-label'}*/}
        {/*        style={{ display: isCollapse ? 'none' : 'block' }}>Chuyển tiền theo Lô</span>*/}
        {/*</MenuSidebarItem>*/}
        {/*<MenuSidebarItem*/}
        {/*  onClick={() => handleClickMenu('transfer-mobile-money')}*/}
        {/*  className={pageName === 'transfer-mobile-money' ? 'active' : ''}*/}
        {/*  color={commonStore.appTheme.solidColor}>*/}
        {/*  {ICONS.MOBILE_MONEY_ICON}*/}
        {/*  <span className={'menu-sidebar-label'} style={{ display: isCollapse ? 'none' : 'block' }}>Nạp/Rút Mobifone Money</span>*/}
        {/*</MenuSidebarItem>*/}
        <MenuSidebarItem
          onClick={() => handleClickMenu('transaction-manage')}
          className={pageName === 'transaction-manage' ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.TRANSACTION_ICON}
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Quản lý giao dịch</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu('transaction-history')}
          className={pageName === 'transaction-history' ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.HISTORY_ICON}
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Lịch sử giao dịch</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu('policy')}
          className={pageName === 'policy' ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.POLICY_ICON}
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Điều khoản sử dụng</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu('support')}
          className={pageName === 'support' ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.SUPPORT_ICON}
          <span className={'menu-sidebar-label'} style={{ display: isCollapse ? 'none' : 'block' }}>Trợ giúp</span>
        </MenuSidebarItem>
      </MenuSidebarArea>
      <SocialIconWrapper flexDirection={isCollapse ? 'column' : 'row'}>
        <Link to={'#'}>
          <img src={ICONS.FACEBOOK} alt={''} />
        </Link>
        <Link to={'#'}>
          <img src={ICONS.INSTAGRAM} alt={''} />
        </Link>
        <Link to={'#'}>
          <img src={ICONS.YOUTUBE} alt={''} />
        </Link>
      </SocialIconWrapper>

    </MainSideBarWrapper>
  )
}

MainSideBar.propTypes = {}

export default inject('commonStore')(observer(MainSideBar))