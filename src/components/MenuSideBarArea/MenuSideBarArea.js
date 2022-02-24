import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { MenuSideBarAreaWrapper, MenuSidebarItem } from './MenuSideBarAreaStyled'
import { PAGES } from '../../utils/constant'
import ICONS from '../../icons'
import { useHistory } from 'react-router-dom'

const MenuSideBarArea = props => {

  const { commonStore } = props
  const { isCollapse, device, pageName } = commonStore

  const history = useHistory()
  const handleClickMenu = (path) => {
    history.push(path)
  }

  return (
    <MenuSideBarAreaWrapper>
      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.IDENTITY.PATH)}
        className={pageName === PAGES.IDENTITY.NAME ? 'active' : ''}
        color={commonStore.appTheme.solidColor}>
        <img src={ICONS.TTDD_ICON} alt={''} width={24} />
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
        <img src={ICONS.QLGD_ICON} alt={''} width={24} />
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
        <img src={ICONS.LSGD_ICON} alt={''} width={24} />
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
        <img src={ICONS.BCTH_ICON} alt={''} width={24} />
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
        <img src={ICONS.BCCT_ICON} alt={''} width={24} />
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
        <img src={ICONS.CDHM_ICON} alt={''} width={24} />
        <span
          className={'menu-sidebar-label'}
          style={{ display: isCollapse ? 'none' : 'block' }}>
            Cài đặt hạn mức
          </span>
      </MenuSidebarItem>
    </MenuSideBarAreaWrapper>
  )
}

MenuSideBarArea.propTypes = {}

export default inject('commonStore')(observer(MenuSideBarArea))