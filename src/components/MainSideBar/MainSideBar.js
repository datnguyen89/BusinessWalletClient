import React from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  BankAvatarWrapper,
  BankInfoArea,
  MainSideBarWrapper,
  MenuSidebarArea,
  MenuSidebarItem,
  SocialIconWrapper,
} from './MainSideBarStyled'
import { DEVICE, PAGES, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import IMAGES from '../../images'
import { CaretLeftOutlined } from '@ant-design/icons'
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
    history.push(path)
  }

  return (
    <MainSideBarWrapper
      style={{
        width: isCollapse ? SIDEBAR_WIDTH_COLLAPSE : SIDEBAR_WIDTH_EXPAND,
        display: device === DEVICE.MOBILE ? 'none' : 'flex',
      }}>
      <BankInfoArea
        style={{
          display: isCollapse ? 'none' : 'flex',
        }}
        color={commonStore.appTheme.solidColor}
      >
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
          onClick={() => handleClickMenu(PAGES.IDENTITY.PATH)}
          className={pageName === PAGES.IDENTITY.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          <img src={ICONS.TTDD_ICON} alt={''} />
          <span
            className={'menu-sidebar-label'}
            style={{ display: isCollapse ? 'none' : 'block' }}>
            Thông tin định danh
          </span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.TRANSACTION_MANAGE.PATH)}
          className={pageName === PAGES.TRANSACTION_MANAGE.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          <img src={ICONS.QLGD_ICON} alt={''} />
          <span
            className={'menu-sidebar-label'}
            style={{ display: isCollapse ? 'none' : 'block' }}>
            Quản lý giao dịch
          </span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.TRANSACTION_HISTORY.PATH)}
          className={pageName === PAGES.TRANSACTION_HISTORY.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          <img src={ICONS.LSGD_ICON} alt={''} />
          <span
            className={'menu-sidebar-label'}
            style={{ display: isCollapse ? 'none' : 'block' }}>
            Lịch sử giao dịch
          </span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.REPORT_SUMMARY.PATH)}
          className={pageName === PAGES.REPORT_SUMMARY.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          <img src={ICONS.BCTH_ICON} alt={''} />
          <span
            className={'menu-sidebar-label'}
            style={{ display: isCollapse ? 'none' : 'block' }}>
            Báo cáo tổng hợp
          </span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.REPORT_DETAIL.PATH)}
          className={pageName === PAGES.REPORT_DETAIL.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          <img src={ICONS.BCCT_ICON} alt={''} />
          <span
            className={'menu-sidebar-label'}
            style={{ display: isCollapse ? 'none' : 'block' }}>
            Báo cáo chi tiết
          </span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.LIMIT_SETTING.PATH)}
          className={pageName === PAGES.LIMIT_SETTING.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          <img src={ICONS.CDHM_ICON} alt={''} />
          <span
            className={'menu-sidebar-label'}
            style={{ display: isCollapse ? 'none' : 'block' }}>
            Cài đặt hạn mức
          </span>
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