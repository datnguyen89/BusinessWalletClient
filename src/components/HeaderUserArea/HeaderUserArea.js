import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { Dropdown, Menu } from 'antd'
import UserAvatar from '../UserAvatar'
import ICONS from '../../icons'
import { HeaderUserAreaWrapper, ThemePickerItem, ThemePickerWrapper } from './HeaderUserAreaStyled'
import { useHistory } from 'react-router-dom'
import ChangePasswordModal from '../ChangePasswordModal'
import { THEME_LIST } from '../../utils/constant'

const HeaderUserArea = props => {

  const { commonStore } = props

  const history = useHistory()
  const handleClickMenu = (path) => {
    history.push(path)
  }

  const [visibleChangePassword, setVisibleChangePassword] = useState(false)

  const handleSuccessChangePassword = () => {

  }
  const handleChangeAppTheme = themeName => {
    commonStore.setTheme(themeName)
  }

  const menu = (
    <Menu>
      <Menu.Item className={'user-menu-item'} key='0' onClick={() => setVisibleChangePassword(true)}>
        {ICONS.SETTING}
        <span className={'user-menu-label'}>Đổi mật khẩu</span>
      </Menu.Item>
      <Menu.Item className={'user-menu-item'} key='1' onClick={() => handleClickMenu('/login')}>
        {ICONS.LOGOUT}
        <span className={'user-menu-label'}>Đăng xuất</span>
      </Menu.Item>
      <Menu.Item key='2'>
        <ThemePickerWrapper>
          {
            THEME_LIST.map(item =>
              <ThemePickerItem key={item.name} color={item.solidColor}
                               onClick={() => handleChangeAppTheme(item.name)} />,
            )
          }
        </ThemePickerWrapper>
      </Menu.Item>
    </Menu>
  )
  return (
    <HeaderUserAreaWrapper id={'user-menu-wrapper'} color={commonStore.appTheme.solidColor}>
      <Dropdown overlay={menu}
                placement={'bottomCenter'}
                trigger={['click']}
                getPopupContainer={() => document.getElementById('user-menu-wrapper')}>
        <div>
          <UserAvatar avatarUrl={null} />
          <span>Administrator</span>
          <img src={ICONS.WHITE_ARROW_DOWN} alt={''} height={8} />
        </div>
      </Dropdown>
      <ChangePasswordModal
        visible={visibleChangePassword}
        onSuccess={handleSuccessChangePassword}
        onCancel={() => setVisibleChangePassword(false)} />

    </HeaderUserAreaWrapper>
  )
}

HeaderUserArea.propTypes = {}

export default inject('commonStore')(observer(HeaderUserArea))