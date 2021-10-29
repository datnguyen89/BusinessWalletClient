import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import DefaultLayout from '../../layouts/DefaultLayout'
import { useMagicColor } from '../../hooks/magicColor'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import HomeWidgets from '../../components/HomeWidgets'
import HomeServices from '../../components/HomeServices'
import { CarouselWrapper } from './HomePageStyled'
import IMAGES from '../../images'

const HomePage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.HOME} />
      <HomeWidgets />
      <HomeServices />
      <CarouselWrapper>
        <img src={IMAGES.HOME_CAROUSEL} alt={''} />
      </CarouselWrapper>
    </DefaultLayout>
  )
}

HomePage.propTypes = {}

export default inject('commonStore')(observer(HomePage))