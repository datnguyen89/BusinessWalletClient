import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

import { MainSideBarWrapper } from './MainSideBarStyled'
import { DEVICE, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'

const MainSideBar = props => {
  const { commonStore } = props
  const { isCollapse, device } = commonStore

  const handleToggleSideBar = () => {
    commonStore.setIsCollapse(!isCollapse)
  }

  return (
    <MainSideBarWrapper display={device === DEVICE.mobile ? 'none' : 'block'}
                        width={isCollapse ? SIDEBAR_WIDTH_COLLAPSE : SIDEBAR_WIDTH_EXPAND}>
      <div>
        MainSideBar {isCollapse.toString()}
      </div>
      <Button type={'primary'}
              style={{ display: (device === DEVICE.mobile || device === DEVICE.tablet) ? 'none' : 'block' }}
              onClick={handleToggleSideBar}>Toogle</Button>
      <p>{device}</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>123</p><br />
      <p>456</p><br />
      <p>456</p><br />
      <p>456</p><br />
      <p>456</p><br />
      <p>456</p><br />
      <p>end</p><br />

    </MainSideBarWrapper>
  )
}

MainSideBar.propTypes = {}

export default inject('commonStore')(observer(MainSideBar))