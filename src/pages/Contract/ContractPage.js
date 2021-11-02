import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import Contract from '../../components/Contract'

const ContractPage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.CONTRACT} />
      <Contract/>
    </DefaultLayout>
  )
}

ContractPage.propTypes = {}

export default inject('commonStore')(observer(ContractPage))