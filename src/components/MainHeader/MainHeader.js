import React from 'react'
import { inject, observer } from 'mobx-react'
import {
  HeaderLogoArea, HeaderNotifyArea,
  HeaderTransactionArea,
  HeaderTransactionItem,
  HeaderUserArea,
  MainHeaderRight,
  MainHeaderWrapper,
} from './MainHeaderStyled'
import IMAGES from '../../images'
import NotifyBell from '../NotifyBell'
import ICONS from '../../icons'
import UserAvatar from '../UserAvatar'

const MainHeader = props => {
  const { commonStore } = props
  const { device } = commonStore
  return (
    <MainHeaderWrapper>
      <HeaderLogoArea href={'/'}>
        <img src={IMAGES.MAIN_LOGO} alt={''} />
        <span>Doanh Nghiệp</span>
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
        <HeaderUserArea>
          <UserAvatar avatarUrl={null} />
          <span>Administrator</span>
          <img src={ICONS.WHITE_ARROW_DOWN} alt={''} height={8} />
        </HeaderUserArea>
      </MainHeaderRight>

    </MainHeaderWrapper>

  )
}

MainHeader.propTypes = {}

export default inject('commonStore')(observer(MainHeader))