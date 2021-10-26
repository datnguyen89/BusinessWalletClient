import React from 'react'
import PropTypes from 'prop-types'
import { DefaultLayoutWrapper } from './DefaultLayoutStyled'
import MainSideBar from '../../components/MainSideBar'
import MainContent from '../../components/MainContent/MainContent'
import MainHeader from '../../components/MainHeader'
import MainBody from '../../components/MainBody'
import MainFooter from '../../components/MainFooter'

const DefaultLayout = props => {
  const { children } = props
  return (
    <DefaultLayoutWrapper>
      <MainHeader />
      <MainContent>
        <MainSideBar />
        <MainBody>
          {children}
        </MainBody>
      </MainContent>
      <MainFooter />
    </DefaultLayoutWrapper>
  )
}

DefaultLayout.propTypes = {}

export default DefaultLayout