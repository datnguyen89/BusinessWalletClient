import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { Dropdown, Menu } from 'antd'
import UserAvatar from '../UserAvatar'
import ICONS from '../../icons'
import { DropdownUserSetting, HeaderUserAreaWrapper, ThemePickerItem, ThemePickerWrapper } from './HeaderUserAreaStyled'
import { useHistory } from 'react-router-dom'
import ChangePasswordModal from '../ChangePasswordModal'
import { PAGES, THEME_LIST, TRANSFERS } from '../../utils/constant'
import {
  HeaderDropdownIconWrapper,
  HeaderDropdownItem,
  HeaderDropdownItemText,
  HeaderDropdownWrapper,
} from '../CommonStyled/CommonStyled'

const HeaderUserArea = props => {

  const { commonStore, authenticationStore, profileStore } = props

  const { jwtDecode } = authenticationStore

  const history = useHistory()
  const { userProfile } = profileStore


  const handleClickLogout = () => {
    authenticationStore.logout()
      .finally(() => {
        history.push(PAGES.LOGIN.PATH)
      })
  }

  const [visibleChangePassword, setVisibleChangePassword] = useState(false)

  const handleSuccessChangePassword = () => {
    console.log('Đổi mật khẩu thành công')
  }
  const handleChangeAppTheme = themeName => {
    commonStore.setTheme(themeName)
  }

  const menu = (
    <HeaderDropdownWrapper>
      <HeaderDropdownItem
        justifyContent={'center'}
        columns={2}
        onClick={() => setVisibleChangePassword(true)}
        color={commonStore.appTheme.solidColor}>
        <HeaderDropdownIconWrapper>
          {ICONS.SETTING}
        </HeaderDropdownIconWrapper>
        <HeaderDropdownItemText>
          Đổi mật khẩu
        </HeaderDropdownItemText>
      </HeaderDropdownItem>
      <HeaderDropdownItem
        justifyContent={'center'}
        columns={2}
        onClick={() => handleClickLogout()}
        color={commonStore.appTheme.solidColor}>
        <HeaderDropdownIconWrapper>
          {ICONS.LOGOUT}
        </HeaderDropdownIconWrapper>
        <HeaderDropdownItemText>
          Đăng xuất
        </HeaderDropdownItemText>
      </HeaderDropdownItem>
    </HeaderDropdownWrapper>
  )
  return (
    <HeaderUserAreaWrapper id={'user-menu-wrapper'} color={commonStore.appTheme.solidColor}>
      <Dropdown overlay={menu}
                overlayClassName={'header-user-area'}
                placement={'bottomRight'}
                trigger={['click']}
                getPopupContainer={() => document.getElementById('user-menu-wrapper')}>
        <DropdownUserSetting>
          <UserAvatar avatarUrl={userProfile?.avatar} />
          <span>{userProfile?.fullName}</span>
          <img src={ICONS.WHITE_ARROW_DOWN} alt={''} height={8} />
        </DropdownUserSetting>
      </Dropdown>
      <ChangePasswordModal
        visible={visibleChangePassword}
        onSuccess={handleSuccessChangePassword}
        onClose={() => setVisibleChangePassword(false)} />

    </HeaderUserAreaWrapper>
  )
}

HeaderUserArea.propTypes = {}

export default inject('commonStore', 'authenticationStore', 'profileStore')(observer(HeaderUserArea))