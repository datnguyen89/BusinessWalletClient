import React from 'react'
import { inject, observer } from 'mobx-react'
import { MenuOutlined } from '@ant-design/icons'
import {
  HeaderLogoArea,
  HeaderNotifyArea,
  HeaderTransactionArea,
  HeaderUserArea,
  MainHeaderWrapper,
} from './MainHeaderStyled'
import { DEVICE } from '../../utils/constant'
import IMAGES from '../../images'
import NotifyBell from '../NotifyBell'

const MainHeader = props => {
  const { commonStore } = props
  const { device } = commonStore
  return (
    <MainHeaderWrapper>
      <HeaderLogoArea href={'/'}>
        <img src={IMAGES.MAIN_LOGO} alt={''} />
        <span>Doanh Nghiệp</span>
      </HeaderLogoArea>
      <HeaderTransactionArea>

      </HeaderTransactionArea>
      <NotifyBell />
      <HeaderUserArea>

      </HeaderUserArea>
    </MainHeaderWrapper>

  )
}

MainHeader.propTypes = {}

export default inject('commonStore')(observer(MainHeader))