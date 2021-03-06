import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import Contract from '../../components/Contract'
import { Helmet } from 'react-helmet/es/Helmet'
import { LinkBankPageWrapper } from './LinkBankPageStyled'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'

const LinkBankPage = props => {
  const { commonStore } = props

  return (
    <>
      <Helmet>
        <title>Liên kết</title>
      </Helmet>
      <LinkBankPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.LINK_BANK} />
        <WhiteRoundedBox>
          <Contract/>
        </WhiteRoundedBox>
      </LinkBankPageWrapper>
    </>
  )
}

LinkBankPage.propTypes = {}

export default inject('commonStore')(observer(LinkBankPage))