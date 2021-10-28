import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { GlobalStyle } from './ThemeProviderStyled'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive/src'
import { DEVICE } from '../../utils/constant'

const ThemeProvider = props => {
  const { commonStore, children } = props
  const { isCollapse } = commonStore
  const { i18n } = useTranslation()

  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isMobile = useMediaQuery({ maxWidth: 767 })

  useEffect(() => {
    i18n.changeLanguage(commonStore.appLanguage)
  }, [commonStore.appLanguage])

  useEffect(() => {
    if (!isDesktop) return
    commonStore.setDevice(DEVICE.desktop)
  }, [isDesktop])
  useEffect(() => {
    if (!isTablet) return
    commonStore.setDevice(DEVICE.tablet)
  }, [isTablet])
  useEffect(() => {
    if (!isMobile) return
    commonStore.setDevice(DEVICE.mobile)
  }, [isMobile])

  return (
    <>
      <GlobalStyle
        theme={commonStore.appTheme}
      />
      {children}
    </>
  )
}

export default inject('commonStore')(observer(ThemeProvider))
