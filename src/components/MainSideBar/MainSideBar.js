import React from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  BankAvatarWrapper,
  BankInfoArea,
  MainSideBarWrapper,
  SocialIconWrapper,
} from './MainSideBarStyled'
import { DEVICE, PAGES, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import IMAGES from '../../images'
import { CaretLeftOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import ICONS from '../../icons'
import MenuSideBarArea from '../MenuSideBarArea'

const MainSideBar = props => {
  const { commonStore } = props
  const { isCollapse, device, pageName } = commonStore

  const history = useHistory()

  const handleToggleSideBar = (collapse) => {
    commonStore.setIsCollapse(collapse)
  }

  return (
    <MainSideBarWrapper
      display={device === DEVICE.MOBILE ? 'none' : 'flex'}
      width={isCollapse ? SIDEBAR_WIDTH_COLLAPSE : SIDEBAR_WIDTH_EXPAND}>
      <BankInfoArea display={isCollapse ? 'none' : 'flex'} color={commonStore.appTheme.solidColor}>
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

      <MenuSideBarArea />

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