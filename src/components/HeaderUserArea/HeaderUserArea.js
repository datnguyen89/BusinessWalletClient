import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Menu } from 'antd'
import UserAvatar from '../UserAvatar'
import ICONS from '../../icons'
import { HeaderUserAreaWrapper } from './HeaderUserAreaStyled'

const HeaderUserArea = props => {
  const menu = (
    <Menu>
      <Menu.Item className={'user-menu-item'} key='0'>
        <img className={'user-menu-icon'} src={ICONS.SETTING} alt={''} />
        <span className={'user-menu-label'}>Đổi mật khẩu</span>
      </Menu.Item>
      <Menu.Item className={'user-menu-item'} key='1'>
        <img className={'user-menu-icon'} src={ICONS.LOGOUT} alt={''} />
        <span className={'user-menu-label'}>Đăng xuất</span>
      </Menu.Item>
    </Menu>
  )
  return (
    <HeaderUserAreaWrapper id={'user-menu-wrapper'}>
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
    </HeaderUserAreaWrapper>
  )
}

HeaderUserArea.propTypes = {
  
}

export default HeaderUserArea