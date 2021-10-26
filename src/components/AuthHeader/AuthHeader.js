import React from 'react'
import PropTypes from 'prop-types'
import { AuthHeaderWrapper, SubTitleLogo } from './AuthHeaderStyled'
import IMAGES from '../../images'

const AuthHeader = props => {
  return (
    <AuthHeaderWrapper>
      <img src={IMAGES.AUTH_LOGO} alt={''} height={66} width={86} />
      <SubTitleLogo>MobiFone Pay Doanh Nghiệp</SubTitleLogo>
    </AuthHeaderWrapper>
  )
}

AuthHeader.propTypes = {}

export default AuthHeader