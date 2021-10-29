import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import {
  CompanyName, FooterRightMenu, FooterRightMenuItem, FooterRightPhone,
  MainFooterLeft,
  MainFooterLeftInfo,
  MainFooterRight,
  MainFooterWrapper,
  TelsArea,
} from './MainFooterStyled'
import IMAGES from '../../images'
import { Link } from 'react-router-dom'

const MainFooter = props => {
  const { commonStore } = props
  const { appTheme } = commonStore
  return (
    <MainFooterWrapper fontColor={appTheme.fontColor}>
      <MainFooterLeft>
        <Link to={'#'}>
          <img src={IMAGES.AUTH_LOGO} alt={''} />
        </Link>
        <MainFooterLeftInfo>
          <CompanyName color={appTheme.fontColor}>Tổng công ty Viễn Thông MobiFone </CompanyName>
          <p>Số 01 phố Phạm Văn Bạch, Yên Hòa, Cầu Giấy, Hà Nội</p>
          <TelsArea>
            <a href={'tel:84243781800'}>
              (+84-24) 3783 1800
            </a>
            <span style={{ margin: '0 8px' }}>-</span>
            <a href={'tel:842437831734'}>
              (+84-24) 3783 1734
            </a>
          </TelsArea>
        </MainFooterLeftInfo>
      </MainFooterLeft>
      <MainFooterRight>
        <FooterRightMenu>
          <FooterRightMenuItem href={'#'}>Giới thiệu</FooterRightMenuItem>
          <span style={{ margin: '0 8px' }}>-</span>
          <FooterRightMenuItem href={'#'}>Liên hệ</FooterRightMenuItem>
          <span style={{ margin: '0 8px' }}>-</span>
          <FooterRightMenuItem href={'#'}>Chính sách</FooterRightMenuItem>
          <span style={{ margin: '0 8px' }}>-</span>
          <FooterRightMenuItem href={'#'}>Điều khoản</FooterRightMenuItem>
        </FooterRightMenu>
        <FooterRightPhone>
          <a href={'tel:18001090'}>
            <FontAwesomeIcon icon={faPhoneVolume} style={{ marginRight: 8 }} />
            18001090
          </a>
        </FooterRightPhone>
      </MainFooterRight>
    </MainFooterWrapper>
  )
}

MainFooter.propTypes = {}

export default inject('commonStore')(observer(MainFooter))