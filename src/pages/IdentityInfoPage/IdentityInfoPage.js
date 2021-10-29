import React from 'react'
import PropTypes from 'prop-types'
import { IdentityInfoPageWrapper } from './IdentityInfoPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import EnterpriseInfo from '../../components/EnterpriseInfo/EnterpriseInfo'

const IdentityInfoPage = props => {

  return (
    <DefaultLayout>
      <Helmet>
        <title>Thông tin định danh</title>
      </Helmet>
      <IdentityInfoPageWrapper>
        <EnterpriseInfo></EnterpriseInfo>
      </IdentityInfoPageWrapper>
    </DefaultLayout>
  )
}

IdentityInfoPage.propTypes = {

}

export default IdentityInfoPage