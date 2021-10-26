import React from 'react'
import PropTypes from 'prop-types'
import { AuthMenuLinkItem, AuthMenuLinkWrapper } from './AuthMenuLinkStyled'
import { Link } from 'react-router-dom'

const AuthMenuLink = props => {
  return (
    <AuthMenuLinkWrapper>
      <AuthMenuLinkItem>
        <Link to={'#'}>Giới thiệu</Link>
      </AuthMenuLinkItem>
      -
      <AuthMenuLinkItem>
        <Link to={'#'}>Liên hệ</Link>
      </AuthMenuLinkItem>
      -
      <AuthMenuLinkItem>
        <Link to={'#'}>Chính sách</Link>
      </AuthMenuLinkItem>
      -
      <AuthMenuLinkItem>
        <Link to={'#'}>Điều khoản</Link>
      </AuthMenuLinkItem>
    </AuthMenuLinkWrapper>
  )
}

AuthMenuLink.propTypes = {
  
}

export default AuthMenuLink