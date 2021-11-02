import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faFileInvoiceDollar,
  faHandHoldingUsd,
  faLink,
  faExchangeAlt,
  faList,
} from '@fortawesome/free-solid-svg-icons'
import {
  CustomLink,
  HeaderLogoArea, HeaderNotifyArea,
  HeaderTransactionArea,
  HeaderTransactionItem,
  MainHeaderRight, MainHeaderRightMobile,
  MainHeaderWrapper,
} from './MainHeaderStyled'
import IMAGES from '../../images'
import NotifyBell from '../NotifyBell'
import ICONS from '../../icons'
import { Drawer, Dropdown, Menu } from 'antd'
import HeaderUserArea from '../HeaderUserArea'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { DEVICE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import MainSideBar from '../MainSideBar'
import DrawerSideBar from '../DrawerSideBar'

const MainHeader = props => {
  const { commonStore } = props
  const { pageName } = props.commonStore
  const [visibleMobileDrawerLeft, setVisibleMobileDrawerLeft] = useState(false)
  const [visibleMobileDrawerRight, setVisibleMobileDrawerRight] = useState(false)
  const { device } = commonStore
  const history = useHistory()

  const handleClickDrawerMenu = (e) => {
    console.log(e)
  }

  return (
    <MainHeaderWrapper>
      <HeaderLogoArea>
        <img src={IMAGES.MAIN_LOGO} alt={''} style={{ cursor: 'pointer' }} onClick={() => history.push('/')} />
        <span>Doanh Nghiệp</span>
        <FontAwesomeIcon
          onClick={() => setVisibleMobileDrawerLeft(true)}
          icon={faList}
          size={'2x'}
          style={{
            display: device === DEVICE.MOBILE ? 'block' : 'none',
            cursor: 'pointer',
            color: '#fff',
            marginLeft: 8,
          }} />
        <Drawer
          title={null}
          placement='left'
          closable={false}
          width={SIDEBAR_WIDTH_EXPAND}
          style={{ padding: 0 }}
          onClose={() => setVisibleMobileDrawerLeft(false)}
          visible={visibleMobileDrawerLeft}>
          <DrawerSideBar />
        </Drawer>
      </HeaderLogoArea>
      <MainHeaderRight>
        <HeaderTransactionArea>
          <HeaderTransactionItem href={'#'}>
            <img src={ICONS.RECHARGE_ICON} alt={''} />
            <CustomLink activeClassName={pageName === 'dfd' ? 'selected' : ''} to=""><span>Nạp tiền</span></CustomLink>
          </HeaderTransactionItem>
          <HeaderTransactionItem href={'#'}>
            <img src={ICONS.TRANSFER_ICON} alt={''} />
            <CustomLink activeClassName={pageName === 'das' ? 'selected' : ''} to=""><span>Chuyển tiền</span></CustomLink>
          </HeaderTransactionItem>
          <HeaderTransactionItem href={'#'}>
            {/*<img src={ICONS.LINK_BANK_ICON} alt={''} />*/}
            <CustomLink activeClassName={pageName === 'contract' ? 'selected' : ''} to="/contract">
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.7753 3.65201H10.8732C10.5067 3.65201 10.2096 3.92999 10.2096 4.27297C10.2096 4.61595 10.5067 4.89394 10.8732 4.89394H11.7753C12.1418 4.89394 12.4389 4.61595 12.4389 4.27297C12.4389 3.92999 12.1418 3.65201 11.7753 3.65201ZM21.9846 7.38301H0.663434C0.366751 7.38301 0.10603 7.1985 0.0251691 6.9312C-0.0556923 6.6639 0.0628129 6.37896 0.315615 6.23328L10.9762 0.0921822C11.1896 -0.0307274 11.4586 -0.0307274 11.6719 0.0921822L22.3325 6.23328C22.5853 6.37879 22.7038 6.6639 22.6231 6.9312C22.5423 7.1985 22.2815 7.38301 21.9846 7.38301ZM20.7424 8.62506C20.9257 8.62506 21.0742 8.76407 21.0742 8.93554C21.0742 9.44995 20.6286 9.86699 20.0789 9.86699H2.56862C2.01896 9.86699 1.57334 9.44995 1.57334 8.93554C1.57334 8.76407 1.72188 8.62506 1.9051 8.62506H20.7424ZM2.76509 11.1082H4.80419C4.97397 11.1082 5.11158 11.237 5.11158 11.3959V16.7676C5.11158 16.9264 4.97397 17.0552 4.80419 17.0552H2.76509C2.59532 17.0552 2.45766 16.9264 2.45766 16.7676V11.3959C2.45766 11.237 2.59532 11.1082 2.76509 11.1082ZM9.83103 11.1082H7.79176C7.62198 11.1082 7.48432 11.237 7.48432 11.3959V16.7676C7.48432 16.9264 7.62198 17.0552 7.79176 17.0552H9.83103C10.0008 17.0552 10.1384 16.9264 10.1384 16.7676V11.3959C10.1384 11.237 10.0008 11.1082 9.83103 11.1082ZM12.8173 11.1082H14.8566C15.0264 11.1082 15.164 11.237 15.164 11.3959V16.7676C15.164 16.9264 15.0264 17.0552 14.8566 17.0552H12.8173C12.6475 17.0552 12.5099 16.9264 12.5099 16.7676V11.3959C12.5099 11.237 12.6475 11.1082 12.8173 11.1082ZM17.8428 11.1082H19.882C20.0517 11.1082 20.1893 11.237 20.1893 11.3959V16.7676C20.1893 16.9264 20.0517 17.0552 19.882 17.0552H17.8428C17.6731 17.0552 17.5354 16.9264 17.5354 16.7676V11.3959C17.5354 11.237 17.6731 11.1082 17.8428 11.1082ZM21.9841 18.2975H0.663898C0.297412 18.2975 0.000374882 18.5755 0.000374882 18.9185V20.5744C0.000374882 20.9174 0.297412 21.1954 0.663898 21.1954H21.9841C22.3506 21.1954 22.6476 20.9174 22.6476 20.5744V18.9185C22.6476 18.5755 22.3506 18.2975 21.9841 18.2975Z" fill="white"/>
              </svg> <span>Liên kết</span></CustomLink>
          </HeaderTransactionItem>
          <HeaderTransactionItem href={'#'}>
            <img src={ICONS.WITHDRAW_ICON} alt={''} />
            <CustomLink activeClassName={pageName === 'gf' ? 'selected' : ''} to="/contract"><span>Rút tiền</span></CustomLink>
          </HeaderTransactionItem>
        </HeaderTransactionArea>
        <HeaderNotifyArea>
          <NotifyBell />
        </HeaderNotifyArea>
        <HeaderUserArea />
      </MainHeaderRight>
      <MainHeaderRightMobile>
        <FontAwesomeIcon
          onClick={() => setVisibleMobileDrawerRight(true)}
          icon={faBars}
          size={'2x'}
          color={'#fff'}
          style={{ cursor: 'pointer' }} />
        <Drawer
          title={'Ví doanh nghiệp'}
          placement='right'
          style={{ padding: 0 }}
          onClose={() => setVisibleMobileDrawerRight(false)}
          visible={visibleMobileDrawerRight}>
          <Menu
            onClick={handleClickDrawerMenu}
            style={{ width: '100%' }}
            defaultSelectedKeys={['1']}
            mode='inline'
          >
            <Menu.Item key='1'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faFileInvoiceDollar} />
              Nạp tiền
            </Menu.Item>
            <Menu.Item key='2'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faExchangeAlt} />
              Chuyển tiền
            </Menu.Item>
            <Menu.Item key='3'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faLink} />
              Liên kết
            </Menu.Item>
            <Menu.Item key='4'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faHandHoldingUsd} />
              Rút tiền
            </Menu.Item>
          </Menu>
        </Drawer>
      </MainHeaderRightMobile>
    </MainHeaderWrapper>

  )
}

MainHeader.propTypes = {}

export default inject('commonStore')(observer(MainHeader))