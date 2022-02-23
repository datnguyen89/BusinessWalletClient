import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { TestPageWrapper } from './TestPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import { Button, Form, TreeSelect } from 'antd'
import DefaultLayout from '../../layouts/DefaultLayout'
import { useHistory, useLocation } from 'react-router-dom'
import { PAGES } from '../../utils/constant'

const { SHOW_CHILD } = TreeSelect

const treeData = [
  {
    title: 'Tạo lập',
    value: '1',
    children: [
      {
        title: 'Khởi tạo giao dịch',
        value: '2',
        children: [
          {
            title: 'Trạng thái chờ duyệt',
            value: '3',
          },
        ],
      },
      {
        title: 'Quản lý giao dịch tạo lập',
        value: '4',
        children: [
          {
            title: 'Sửa',
            value: '5',
          },
          {
            title: 'Xóa',
            value: '6',
          },
        ],
      },
    ],
  },
  {
    title: 'Phê duyệt',
    value: '11',
    children: [
      {
        title: 'Quản lý giao dịch',
        value: '22',
        children: [
          {
            title: 'Phê duyệt',
            value: '33',
          },
        ],
      },
    ],
  },
]

const TestPageStyled = props => {
  const { commonStore, testStore,authenticationStore } = props
  const { appTheme } = commonStore
  const location = useLocation()
  const history = useHistory()

  const handleClick = () => {
    authenticationStore.logout()
    history.push({
      pathname: PAGES.LOGIN.PATH,
      state: { from: window.location.pathname },
    })
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Test</title>
      </Helmet>
      <TestPageWrapper>
        <Button type={'primary'} onClick={handleClick}>OK</Button>
      </TestPageWrapper>
    </DefaultLayout>

  )
}

TestPageStyled.propTypes = {}

export default inject('commonStore', 'testStore', 'authenticationStore')(observer(TestPageStyled))